import React, { useState, useEffect, useRef } from 'react';
import { api } from '../services/api';

const SimilarityMap = () => {
    const [networkData, setNetworkData] = useState({ nodes: [], links: [] });
    const [loading, setLoading] = useState(true);
    const [hoveredNode, setHoveredNode] = useState(null);
    const [selectedNode, setSelectedNode] = useState(null);
    const containerRef = useRef(null);

    const centerPos = { x: 400, y: 350 };

    // Group Anchors (Fixed positions for clusters)
    const anchors = {
        'Arts': { x: 400, y: 150, color: '#a855f7', label: 'Creative & Arts' },
        'Eng': { x: 650, y: 300, color: '#10b981', label: 'Tech & Eng' },
        'Data': { x: 650, y: 300, color: '#3b82f6', label: 'Tech & Eng' }, // Grouped with Eng
        'Design': { x: 550, y: 550, color: '#f43f5e', label: 'Design' },
        'Product': { x: 250, y: 550, color: '#fbbf24', label: 'Product & Business' },
        'Business': { x: 250, y: 550, color: '#fbbf24', label: 'Product & Business' }, // Grouped
        'user': { x: 400, y: 350, color: '#ffffff', label: 'You' }
    };

    useEffect(() => {
        api.getNetwork().then(data => {
            // 1. Initialize Nodes with Anchor Positions + Jitter
            let nodes = data.nodes.map(node => {
                const anchor = anchors[node.group] || { x: 400, y: 350 };
                return {
                    ...node,
                    x: anchor.x + (Math.random() * 80 - 40),
                    y: anchor.y + (Math.random() * 80 - 40),
                    radius: node.id === 'user' ? 45 : 30, // Visual radius
                    vx: 0,
                    vy: 0
                };
            });

            // Add user node if not present
            if (!nodes.find(n => n.id === 'user')) {
                nodes.push({ id: 'user', label: 'You', group: 'user', x: 400, y: 350, radius: 45, vx: 0, vy: 0 });
            }

            // 2. Simple Force Simulation (Run for fixed iterations to stabilize)
            for (let i = 0; i < 150; i++) {
                nodes.forEach(node => {
                    if (node.id === 'user') return; // User is fixed

                    // Attraction to Anchor
                    const anchor = anchors[node.group] || anchors['user'];
                    const dx = anchor.x - node.x;
                    const dy = anchor.y - node.y;
                    node.vx += dx * 0.01;
                    node.vy += dy * 0.01;

                    // Repulsion from other nodes
                    nodes.forEach(other => {
                        if (node.id === other.id) return;
                        const rx = node.x - other.x;
                        const ry = node.y - other.y;
                        const dist = Math.sqrt(rx * rx + ry * ry) || 1;
                        const minDist = node.radius + other.radius + 20; // Padding

                        if (dist < minDist) {
                            const force = (minDist - dist) / dist * 0.5; // Strong repulsion inside padding
                            node.vx += rx * force;
                            node.vy += ry * force;
                        }
                    });
                });

                // Apply velocity and damping
                nodes.forEach(node => {
                    if (node.id === 'user') return;
                    node.x += node.vx;
                    node.y += node.vy;
                    node.vx *= 0.8; // Friction
                    node.vy *= 0.8;
                });
            }

            // 3. Process Links (Add User Links)
            const userConnections = [
                { id: 'ux', match: 0.92 },
                { id: 'pm', match: 0.78 },
                { id: 'da', match: 0.65 },
                { id: 'mus', match: 0.60 } // Example Arts connection
            ];

            const rawLinks = [
                ...data.links,
                ...userConnections.map(c => ({ source: 'user', target: c.id, value: c.match * 10, isUser: true }))
            ];

            const links = rawLinks.map(link => ({
                source: nodes.find(n => n.id === link.source),
                target: nodes.find(n => n.id === link.target),
                value: link.value,
                isUser: link.isUser
            })).filter(l => l.source && l.target);

            setNetworkData({ nodes, links });
            setLoading(false);
        });
    }, []);

    // Helper to draw curved bezier paths (Unused currently but kept for ref)
    const getPath = (source, target) => {
        const mx = (source.x + target.x) / 2;
        const my = (source.y + target.y) / 2;
        const offset = 30;
        return `M${source.x},${source.y} Q${mx},${my - offset} ${target.x},${target.y}`;
    };

    if (loading) return <div className="glass-card" style={{ height: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Building Career Ecosystem...</div>;

    return (
        <div ref={containerRef} className="glass-card animate-fade-in" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1000px',
            height: '800px',
            margin: '0 auto',
            overflow: 'hidden',
            background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
        }}>
            <h3 style={{ position: 'absolute', top: '1rem', left: '2rem', zIndex: 10, fontSize: '1.5rem', margin: 0 }}>Career Ecosystem</h3>
            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -80px)', color: 'white', opacity: 0.5, fontSize: '0.8rem', pointerEvents: 'none', zIndex: 5 }}>Your Match Profile</span>

            {/* Legend Labels for Anchors */}
            {['Arts', 'Eng', 'Design', 'Product'].map(k => (
                <div key={k} style={{
                    position: 'absolute',
                    left: anchors[k].x,
                    top: anchors[k].y - 80,
                    transform: 'translateX(-50%)',
                    color: anchors[k].color,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    letterSpacing: '1px',
                    opacity: 0.8,
                    pointerEvents: 'none'
                }}>
                    {anchors[k].label}
                </div>
            ))}

            <svg style={{ width: '100%', height: '100%', cursor: 'grab' }}>
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Connections */}
                {networkData.links.map((link, i) => {
                    const isHovered = hoveredNode && (hoveredNode.id === link.source.id || hoveredNode.id === link.target.id);
                    const isStrong = link.value > 3;
                    const isUserLink = link.isUser;

                    // Determine stroke color
                    let strokeColor = anchors[link.source.group]?.color || '#ffffff';
                    if (isUserLink) strokeColor = '#facc15'; // Gold for user links
                    if (isHovered) strokeColor = 'white';

                    // Determine width and opacity
                    let width = isStrong ? 1.5 : 0.5;
                    let opacity = isStrong ? 0.3 : 0.1;

                    if (isUserLink) {
                        width = link.value * 0.3; // Map 6-10 match score to px width
                        opacity = link.value * 0.08; // Higher opacity
                    }
                    if (isHovered) {
                        width = 3;
                        opacity = 0.9;
                    }

                    return (
                        <path
                            key={i}
                            d={`M${link.source.x},${link.source.y} L${link.target.x},${link.target.y}`} // Straight lines are cleaner for clusters
                            stroke={strokeColor}
                            strokeWidth={width}
                            strokeOpacity={opacity}
                            fill="none"
                            style={{ transition: 'all 0.3s' }}
                        />
                    );
                })}

                {/* Nodes */}
                {networkData.nodes.map(node => {
                    const isUser = node.id === 'user';
                    const isHovered = hoveredNode?.id === node.id;
                    const isConnected = hoveredNode && networkData.links.some(l =>
                        (l.source.id === hoveredNode.id && l.target.id === node.id) ||
                        (l.target.id === hoveredNode.id && l.source.id === node.id)
                    );
                    const anchorColor = anchors[node.group]?.color || '#fff';

                    return (
                        <g
                            key={node.id}
                            transform={`translate(${node.x},${node.y})`}
                            onMouseEnter={() => setHoveredNode(node)}
                            onMouseLeave={() => setHoveredNode(null)}
                            onClick={() => setSelectedNode(node)}
                            style={{ cursor: 'pointer' }}
                        >
                            {/* Glow Effect */}
                            {(isHovered || isUser) && (
                                <circle r={node.radius + 10} fill={anchorColor} opacity="0.15" />
                            )}

                            {/* Node Circle */}
                            <circle
                                r={node.radius}
                                fill={isUser ? '#ffffff' : '#1e293b'}
                                stroke={anchorColor}
                                strokeWidth={isUser || isHovered ? 4 : 2}
                                filter={isUser ? "url(#glow)" : ""}
                            />

                            {/* Label inside node */}
                            <text
                                dy={isUser ? 5 : 4}
                                textAnchor="middle"
                                fill="white"
                                fontSize={isUser ? "0.9rem" : "0.7rem"}
                                fontWeight={isUser ? "bold" : "normal"}
                                style={{ pointerEvents: 'none', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                            >
                                {isUser ? "YOU" : node.label.split(' ')[0]}
                            </text>
                        </g>
                    );
                })}
            </svg>

            {/* Hover Tooltip */}
            {hoveredNode && (
                <div style={{
                    position: 'absolute',
                    top: hoveredNode.y + 40,
                    left: hoveredNode.x,
                    transform: 'translateX(-50%)',
                    background: 'rgba(15, 23, 42, 0.95)',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: `1px solid ${anchors[hoveredNode.group]?.color}`,
                    zIndex: 20,
                    pointerEvents: 'none',
                    minWidth: '200px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
                }}>
                    <h4 style={{ margin: 0, color: 'white', fontSize: '1.1rem' }}>{hoveredNode.label}</h4>
                    <span className="badge" style={{ marginTop: '0.5rem', background: 'rgba(255,255,255,0.1)' }}>{anchors[hoveredNode.group]?.label || "User Profile"}</span>
                    {hoveredNode.id !== 'user' && (
                        <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0.5rem 0' }}>
                            Click to see transition details.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SimilarityMap;
