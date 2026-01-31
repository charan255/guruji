import React, { useState } from 'react';
import { SIMILARITY_DATA } from '../data';
import { Info } from 'lucide-react';

const SimilarityMap = () => {
    const [hoveredNode, setHoveredNode] = useState(null);
    const centerPos = { x: 400, y: 350 }; // Increased center for larger layout

    // Helper: Get X,Y from polar coordinates
    const getPos = (angle, distance) => {
        const rad = (angle - 90) * (Math.PI / 180);
        return {
            x: centerPos.x + distance * Math.cos(rad),
            y: centerPos.y + distance * Math.sin(rad)
        };
    };

    // Pre-calculate positions for all nodes
    const nodePositions = SIMILARITY_DATA.nodes.reduce((acc, node) => {
        acc[node.id] = getPos(node.angle, node.distance);
        return acc;
    }, {});

    const getLinkStyle = (strength) => {
        switch (strength) {
            case 'strong': return { width: 3, opacity: 0.6, dash: '0' };
            case 'medium': return { width: 2, opacity: 0.3, dash: '4,4' };
            case 'weak': return { width: 1, opacity: 0.15, dash: '2,2' };
            default: return { width: 1, opacity: 0.2, dash: '0' };
        }
    };

    return (
        <div className="glass-card" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1000px',
            height: '800px',
            margin: '0 auto',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.9) 100%)'
        }}>
            <h3 style={{ marginTop: '1.5rem', marginBottom: '0', zIndex: 10 }}>Career Ecosystem</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', zIndex: 10 }}>
                Explore specializations and adjacent roles. Hover to see connections.
            </p>

            <div style={{ position: 'relative', width: '800px', height: '700px' }}>

                {/* SVG Links Layer */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                    {SIMILARITY_DATA.links.map((link, idx) => {
                        const start = nodePositions[link.source];
                        const end = nodePositions[link.target];
                        const style = getLinkStyle(link.strength);

                        // Highlight link if connected to hovered node
                        const isHighlighted = hoveredNode && (link.source === hoveredNode.id || link.target === hoveredNode.id);

                        return (
                            <line
                                key={idx}
                                x1={start.x}
                                y1={start.y}
                                x2={end.x}
                                y2={end.y}
                                stroke={isHighlighted ? 'var(--primary)' : 'white'}
                                strokeWidth={style.width}
                                strokeOpacity={isHighlighted ? 0.8 : style.opacity}
                                strokeDasharray={style.dash}
                                style={{ transition: 'all 0.3s' }}
                            />
                        );
                    })}
                </svg>

                {/* Nodes Layer */}
                {SIMILARITY_DATA.nodes.map(node => {
                    const pos = nodePositions[node.id];
                    const isHovered = hoveredNode?.id === node.id;
                    const isConnected = hoveredNode && (
                        SIMILARITY_DATA.links.some(l => (l.source === hoveredNode.id && l.target === node.id) || (l.target === hoveredNode.id && l.source === node.id))
                    );

                    return (
                        <div
                            key={node.id}
                            onMouseEnter={() => setHoveredNode(node)}
                            onMouseLeave={() => setHoveredNode(null)}
                            style={{
                                position: 'absolute',
                                left: pos.x,
                                top: pos.y,
                                transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
                                width: `${node.size}px`,
                                height: `${node.size}px`,
                                borderRadius: '50%',
                                background: node.level === 0
                                    ? `radial-gradient(circle at 30% 30%, ${node.color}, #4c1d95)`
                                    : 'var(--bg-card)',
                                border: `2px solid ${node.color}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize: node.level === 2 ? '0.7rem' : '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                boxShadow: isHovered || isConnected ? `0 0 25px ${node.color}60` : `0 0 10px ${node.color}20`,
                                opacity: (hoveredNode && !isHovered && !isConnected) ? 0.3 : 1,
                                zIndex: isHovered ? 20 : (isConnected ? 10 : 2)
                            }}
                        >
                            {node.label}
                        </div>
                    );
                })}

                {/* Hover Information Panel (Fixed at bottom right) */}
                {hoveredNode && (
                    <div className="glass-card animate-slide-up" style={{
                        position: 'absolute',
                        bottom: '2rem',
                        right: '2rem',
                        width: '280px',
                        padding: '1.5rem',
                        zIndex: 30,
                        borderLeft: `4px solid ${hoveredNode.color}`,
                        background: 'rgba(15, 23, 42, 0.95)'
                    }}>
                        <h4 style={{ color: hoveredNode.color, marginBottom: '0.25rem', fontSize: '1.2rem' }}>{hoveredNode.label}</h4>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                            {hoveredNode.level === 0 ? 'Best Match (You)' : hoveredNode.level === 1 ? 'Directly Related' : 'Specialization'}
                        </div>

                        {/* Show skills for links connected to this node */}
                        {SIMILARITY_DATA.links
                            .filter(l => l.source === hoveredNode.id || l.target === hoveredNode.id)
                            .map((link, idx) => {
                                const otherId = link.source === hoveredNode.id ? link.target : link.source;
                                const otherNode = SIMILARITY_DATA.nodes.find(n => n.id === otherId);
                                return (
                                    <div key={idx} style={{ marginBottom: '0.75rem' }}>
                                        <div style={{ fontSize: '0.8rem', marginBottom: '0.2rem', display: 'flex', justifyContent: 'space-between' }}>
                                            <span>↔ {otherNode?.label}</span>
                                            <span style={{
                                                fontSize: '0.7rem',
                                                padding: '1px 6px',
                                                borderRadius: '4px',
                                                background: link.strength === 'strong' ? 'rgba(74, 222, 128, 0.2)' : 'rgba(255,255,255,0.1)',
                                                color: link.strength === 'strong' ? '#4ade80' : 'inherit'
                                            }}>
                                                {link.strength}
                                            </span>
                                        </div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                                            {link.skills.map(s => (
                                                <span key={s} style={{ fontSize: '0.7rem', opacity: 0.6, border: '1px solid rgba(255,255,255,0.1)', padding: '0 4px', borderRadius: '4px' }}>
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                )}
            </div>

            <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                fontSize: '0.8rem',
                opacity: 0.5,
                textAlign: 'left'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 10, height: 10, borderRadius: '50%', background: '#8b5cf6' }}></div> Level 0: Match</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 8, height: 8, borderRadius: '50%', border: '2px solid white' }}></div> Level 1: Related</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><div style={{ width: 6, height: 6, borderRadius: '50%', border: '1px solid white' }}></div> Level 2: Niche</div>
            </div>
        </div>
    );
};

export default SimilarityMap;
