import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Trophy, ChevronRight, Play } from 'lucide-react';
import SimilarityMap from './SimilarityMap';

const Recommendations = ({ userProfile, onSelectCareer, onSimulate, onCompare }) => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecs = async () => {
            setLoading(true);
            try {
                const data = await api.getRecommendations(userProfile || {});
                const mapped = data.map(item => ({
                    ...item.career,
                    match: item.score,
                    reasoning: item.reasoning,
                    salary: item.career.salary_range,
                    growth: item.career.growth_rate,
                    tradeOffs: item.career.tradeoffs || item.career.tradeOffs,
                    skills: item.career.skills.map(s => typeof s === 'string' ? { name: s, level: 75 } : s),
                    roadmap: item.career.roadmap || [],
                    opportunityCost: item.career.opportunityCost || { description: '', retained: [], faded: [] },
                    risk: typeof item.career.risk === 'object' ? Object.values(item.career.risk).join('. ') : item.career.risk,
                    tags: item.career.tags || [],
                    category: "Recommended"
                }));
                setCareers(mapped);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchRecs();
    }, [userProfile]);

    if (loading) return <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>Finding your best matches...</div>;

    return (
        <div className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>
            <header style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Your Top Career Matches</h2>
                <p style={{ color: 'var(--text-muted)' }}>Based on your skills, personality, and simulation results.</p>

                <button
                    className="btn-secondary"
                    onClick={onCompare}
                    style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
                >
                    Compare Careers
                </button>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                {careers.map((career, index) => (
                    <div key={career.id} className="glass-card card-hover" style={{ position: 'relative', overflow: 'hidden' }}>

                        <div style={{
                            position: 'absolute', top: 0, right: 0,
                            background: index === 0 ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                            padding: '0.25rem 0.75rem',
                            fontSize: '0.8rem',
                            borderRadius: '0 0 0 1rem',
                            fontWeight: 'bold'
                        }}>
                            {index === 0 ? 'Top Match' : `${career.match}% Match`}
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <div className="badge">{career.category}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{career.title}</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: '1.6' }}>
                                {career.reasoning}
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            {career.tags.map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.75rem',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '1rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div style={{
                            paddingTop: '1rem',
                            borderTop: '1px solid var(--glass-border)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <button
                                className="btn-secondary"
                                onClick={() => onSimulate(career)}
                                style={{ flex: 1, padding: '0.5rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}
                            >
                                <Play size={14} /> Simulate
                            </button>
                            <button
                                className="btn-primary"
                                onClick={() => onSelectCareer(career)}
                                style={{ flex: 1, padding: '0.5rem', fontSize: '0.9rem' }}
                            >
                                Details <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <SimilarityMap />
        </div>
    );
};

export default Recommendations;
