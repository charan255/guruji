import React, { useState, useEffect, useRef } from 'react';
import { api } from '../services/api';

const SimilarityMap = () => {
    const [networkData, setNetworkData] = useState({ nodes: [], links: [] });
    const [loading, setLoading] = useState(true);
    const [hoveredNode, setHoveredNode] = useState(null);
    const containerRef = useRef(null);

    // Center of the canvas
    const cx = 500;
    const cy = 400;

    // Domain Sectors (Angles in Degrees)
    // Allocating sectors to separate genres clearly
    const sectors = {
        'AI': { start: 270, end: 330, color: '#3b82f6', label: 'AI & Data' },    // Top-Right
        'CS': { start: 330, end: 30, color: '#10b981', label: 'Core CS' },      // Right
        'Security': { start: 30, end: 70, color: '#ef4444', label: 'Security' }, // Bottom-Right

        'Hardware': { start: 70, end: 110, color: '#f97316', label: 'Electronics' }, // Bottom
        'EngTech': { start: 110, end: 150, color: '#8b5cf6', label: 'Engineering' },
        'Eng': { start: 110, end: 150, color: '#8b5cf6', label: 'Eng' },

        'Science': { start: 150, end: 210, color: '#06b6d4', label: 'Science' }, // Bottom-Left
        'Design': { start: 210, end: 240, color: '#f43f5e', label: 'Design' },   // Left
        'Product': { start: 240, end: 270, color: '#fbbf24', label: 'Product' }, // Top-Left

        'Arts': { start: 240, end: 300, color: '#ec4899', label: 'Creative Arts' }, // Overlap top
        'user': { start: 0, end: 360, color: '#ffffff', label: 'You' }
    };

    useEffect(() => {
        api.getNetwork().then(data => {
            // 1. Initialize Nodes
            let nodes = data.nodes.map(node => {
                const sector = sectors[node.group] || sectors['CS'];
                const midAngle = (sector.start + sector.end) / 2;
                const angleRad = (midAngle * Math.PI) / 180;

                // Distance based on "un-match" (Higher match = closer)
                // Match 100 -> dist 0. Match 40 -> dist ~360.
                const targetDist = (100 - (node.match || 50)) * 6;

                return {
                    ...node,
                    // Initial position with some jitter around target sector
                    x: cx + Math.cos(angleRad) * targetDist + (Math.random() * 40 - 20),
                    y: cy + Math.sin(angleRad) * targetDist + (Math.random() * 40 - 20),
                    radius: node.id === 'user' ? 25 : 8 + (node.match / 10), // Size by relevance
                    targetDist: targetDist,
                    angle: angleRad,
                    vx: 0,
                    vy: 0
                };
            });

            // Add User center
            if (!nodes.find(n => n.id === 'user')) {
                nodes.push({ id: 'user', label: 'You', group: 'user', x: cx, y: cy, radius: 40, match: 100, targetDist: 0, vx: 0, vy: 0 });
            }

            // 2. Specialized Radial Force Simulation
            for (let i = 0; i < 200; i++) {
                nodes.forEach(node => {
                    if (node.id === 'user') {
                        node.x = cx;
                        node.y = cy;
                        return;
                    }

                    // Force 1: Pull to Target Radius (Orbit)
                    const dx = node.x - cx;
                    const dy = node.y - cy;
                    const currentDist = Math.sqrt(dx * dx + dy * dy) || 1;
                    const distDiff = currentDist - node.targetDist;

                    // Pull towards ring
                    const pullStrength = 0.05;
                    node.vx -= (dx / currentDist) * distDiff * pullStrength;
                    node.vy -= (dy / currentDist) * distDiff * pullStrength;

                    // Force 2: Pull to Sector Angle
                    const targetAngle = node.angle;
                    const currentAngle = Math.atan2(dy, dx);
                    // Simple angular correction is complex, so we just pull slightly towards ideal sector coords
                    const idealX = cx + Math.cos(targetAngle) * node.targetDist;
                    const idealY = cy + Math.sin(targetAngle) * node.targetDist;
                    node.vx += (idealX - node.x) * 0.02;
                    node.vy += (idealY - node.y) * 0.02;

                    // Force 3: Collision Repulsion
                    nodes.forEach(other => {
                        if (node.id === other.id) return;
                        const rx = node.x - other.x;
                        const ry = node.y - other.y;
                        const dist = Math.sqrt(rx * rx + ry * ry) || 1;
                        const minDist = node.radius + other.radius + 15; // Spacing

                        if (dist < minDist) {
                            const force = (minDist - dist) / dist * 0.2;
                            node.vx += rx * force;
                            node.vy += ry * force;
                        }
                    });
                });

                // Update
                nodes.forEach(node => {
                    node.x += node.vx;
                    node.y += node.vy;
                    node.vx *= 0.85; // Damping
                    node.vy *= 0.85;
                });
            }

            const links = data.links.map(link => ({
                source: nodes.find(n => n.id === link.source),
                target: nodes.find(n => n.id === link.target),
                value: link.value
            })).filter(l => l.source && l.target);

            setNetworkData({ nodes, links });
            setLoading(false);
        });
    }, []);

    if (loading) return <div className="glass-card" style={{ height: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Map Loading...</div>;

    return (
        <div ref={containerRef} className="glass-card animate-fade-in" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1000px',
            height: '800px',
            margin: '0 auto',
            overflow: 'hidden',
            background: '#0f172a',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
        }}>
            {/* Header + Legend */}
            <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10, pointerEvents: 'none' }}>
                <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Career Galaxy</h3>
                <p style={{ margin: 0, opacity: 0.6, fontSize: '0.9rem' }}>Radius = Transition Difficulty</p>

                <div style={{ marginTop: '1.5rem', display: 'grid', gap: '0.5rem' }}>
                    {Object.entries(sectors).filter(([k]) => ['CS', 'AI', 'Security', 'Hardware', 'Science'].includes(k)).map(([key, s]) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }}></div>
                            <span style={{ opacity: 0.8 }}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <svg style={{ width: '100%', height: '100%' }}>
                <defs>
                    <radialGradient id="centerGlow" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Concentric Rings (Guidelines) */}
                <circle cx={cx} cy={cy} r={150} fill="none" stroke="white" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx={cx} cy={cy} r={280} fill="none" stroke="white" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx={cx} cy={cy} r={400} fill="none" stroke="white" strokeOpacity="0.02" strokeWidth="1" />

                {/* Center Glow */}
                <circle cx={cx} cy={cy} r={200} fill="url(#centerGlow)" style={{ pointerEvents: 'none' }} />

                {/* Links (Subtle by default) */}
                {networkData.links.map((link, i) => {
                    const isHovered = hoveredNode && (hoveredNode.id === link.source.id || hoveredNode.id === link.target.id);
                    // Hide lines unless hovered or part of active cluster
                    const opacity = isHovered ? 0.6 : 0.05;

                    return (
                        <line
                            key={i}
                            x1={link.source.x} y1={link.source.y}
                            x2={link.target.x} y2={link.target.y}
                            stroke={sectors[link.source.group]?.color || '#555'}
                            strokeOpacity={opacity}
                            strokeWidth={isHovered ? 1.5 : 0.5}
                            style={{ transition: 'all 0.3s' }}
                        />
                    );
                })}

                {/* Nodes */}
                {networkData.nodes.map(node => {
                    const isUser = node.id === 'user';
                    const isHovered = hoveredNode?.id === node.id;
                    const color = isUser ? '#fff' : (sectors[node.group]?.color || '#888');

                    return (
                        <g
                            key={node.id}
                            transform={`translate(${node.x},${node.y})`}
                            onMouseEnter={() => setHoveredNode(node)}
                            onMouseLeave={() => setHoveredNode(null)}
                            style={{ cursor: 'pointer', transition: 'opacity 0.3s' }}
                            opacity={hoveredNode && !isHovered && !isUser ? 0.2 : 1}
                        >
                            {/* Node Dot */}
                            <circle
                                r={isUser ? 30 : (node.radius * 0.8)} // Slightly smaller nodes 
                                fill={isUser ? 'white' : '#0f172a'}
                                stroke={color}
                                strokeWidth={isUser ? 0 : 2}
                            />
                            {/* Inner fill */}
                            {!isUser && <circle r={(node.radius * 0.8) - 4} fill={color} opacity="0.4" />}

                            {/* Label: ONLY for YOU */}
                            {isUser && (
                                <text
                                    dy={5}
                                    textAnchor="middle"
                                    fill="#0f172a"
                                    fontSize={12}
                                    fontWeight="bold"
                                    style={{ pointerEvents: 'none' }}
                                >
                                    YOU
                                </text>
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Enhanced Tooltip */}
            {hoveredNode && hoveredNode.id !== 'user' && (
                <div style={{
                    position: 'absolute',
                    top: hoveredNode.y - 20,
                    left: hoveredNode.x + 20,
                    background: 'rgba(15, 23, 42, 0.95)',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    borderLeft: `4px solid ${sectors[hoveredNode.group]?.color || '#fff'}`,
                    zIndex: 20,
                    width: 'max-content',
                    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(8px)',
                    pointerEvents: 'none',
                    transform: 'translate(10px, -50%)' // Generic offset
                }}>
                    <h4 style={{ margin: 0, color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>{hoveredNode.label}</h4>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                        <span style={{
                            background: `${sectors[hoveredNode.group]?.color}20`,
                            color: sectors[hoveredNode.group]?.color,
                            padding: '2px 8px', borderRadius: '4px'
                        }}>
                            {sectors[hoveredNode.group]?.label}
                        </span>

                        <span>•</span>

                        <span>
                            {hoveredNode.match > 80 ? 'Achievable' : hoveredNode.match > 60 ? 'Stretch' : 'Long-term'}
                        </span>
                    </div>

                    <div style={{ marginTop: '0.8rem', height: '4px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                        <div style={{
                            width: `${hoveredNode.match}%`,
                            height: '100%',
                            background: sectors[hoveredNode.group]?.color,
                            borderRadius: '2px'
                        }}></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SimilarityMap;
