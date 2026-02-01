
import React from 'react';
import { CAREERS } from '../data';
import { Trophy, ChevronRight } from 'lucide-react';
import SimilarityMap from './SimilarityMap';

const Recommendations = ({ onSelectCareer, onCompare }) => {
    return (
        <div className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>
            <header style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Your Top Career Matches</h2>
                <p style={{ color: 'var(--text-muted)' }}>Based on your skills, personality, and simulation results.</p>
                <button
                    onClick={onCompare}
                    className="btn-secondary"
                    style={{ position: 'absolute', right: 0, top: 0, display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                >
                    Compare Careers <ChevronRight size={16} />
                </button>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                {CAREERS.map((career, index) => (
                    <div
                        key={career.id}
                        className="glass-card animate-slide-up"
                        style={{
                            animationDelay: `${index * 100} ms`,
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onClick={() => onSelectCareer(career)}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        {index === 0 && (
                            <div style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: '#fbbf24',
                                color: '#fff',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '1rem',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.3rem',
                                boxShadow: '0 4px 10px rgba(251, 191, 36, 0.4)'
                            }}>
                                <Trophy size={14} fill="#fff" /> Best Match
                            </div>
                        )}

                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {career.category}
                        </div>

                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{career.title}</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: `conic - gradient(var(--primary) ${career.match}%, transparent 0)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-card)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold'
                                }}>
                                    {career.match}%
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Match Score</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Highly Compatible</div>
                            </div>
                        </div>

                        <p style={{ marginBottom: '1.5rem', opacity: 0.9, lineHeight: '1.5' }}>
                            {career.reasoning}
                        </p>

                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                            {career.tags.map(tag => (
                                <span key={tag} className="badge">{tag}</span>
                            ))}
                        </div>

                        <div style={{
                            borderTop: '1px solid var(--glass-border)',
                            paddingTop: '1rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            color: 'var(--secondary)',
                            fontWeight: 600
                        }}>
                            View Roadmap <ChevronRight size={20} />
                        </div>
                    </div>
                ))}
            </div>

            <SimilarityMap />
        </div>
    );
};


export default Recommendations;
