import React from 'react';
import { ArrowLeft, TrendingUp, AlertCircle, Map, Target, CheckCircle, XCircle, Shuffle, Play } from 'lucide-react';

const CareerDetails = ({ career, onBack, onSimulate }) => {
    if (!career) return null;

    return (
        <div className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>


            {/* Header Section */}
            <header className="glass-card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <span className="badge" style={{ marginBottom: '1rem' }}>{career.category}</span>
                        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{career.title}</h1>
                        <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '600px', marginBottom: '1.5rem' }}>{career.description}</p>

                        <button
                            className="btn-primary"
                            onClick={() => onSimulate(career)}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}
                        >
                            <Play size={20} /> Simulate This Role
                        </button>
                    </div>
                    <div style={{ textAlign: 'right', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '1rem', minWidth: '220px' }}>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Salary Range</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#4ade80' }}>{career.salary}</div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                            <div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Growth</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                    <TrendingUp size={14} /> {career.growth}
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Demand</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--accent)' }}>{career.marketDemand || 'High'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) 1fr', gap: '2rem' }}>

                {/* Left Column: Data & Roadmap */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Strengths vs Trade-offs */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="glass-card" style={{ borderColor: 'rgba(74, 222, 128, 0.3)', background: 'rgba(74, 222, 128, 0.05)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80' }}>
                                <CheckCircle size={20} /> Key Strengths
                            </h3>
                            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {career.gains?.map((g, i) => <li key={i}>{g}</li>)}
                            </ul>
                        </div>

                        <div className="glass-card" style={{ borderColor: 'rgba(251, 191, 36, 0.3)', background: 'rgba(251, 191, 36, 0.05)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24' }}>
                                <AlertCircle size={20} /> Trade-offs
                            </h3>
                            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {career.tradeOffs?.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                        </div>
                    </div>

                    <section className="glass-card">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Target size={24} color="var(--primary)" /> Skill Gap Analysis
                        </h3>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {career.skills.map(skill => (
                                <div key={skill.name}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                        <span style={{ fontWeight: '500' }}>{skill.name}</span>
                                        <span style={{ opacity: 0.7 }}>{skill.level}% Ready</span>
                                    </div>
                                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                                        <div style={{ width: `${skill.level}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--accent))' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="glass-card">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Map size={24} color="var(--secondary)" /> Learning Roadmap
                        </h3>
                        <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
                            {career.roadmap.map((step, index) => (
                                <div key={index} style={{ marginBottom: '2rem', position: 'relative' }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: '-2.6rem',
                                        top: '0',
                                        width: '18px',
                                        height: '18px',
                                        background: 'var(--bg-dark)',
                                        border: '2px solid var(--secondary)',
                                        borderRadius: '50%'
                                    }}></div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{step.title}</h4>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.duration}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Opportunity Cost & Risk */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Opportunity Cost Widget */}
                    <div className="glass-card" style={{ background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Shuffle size={20} color="var(--accent)" /> Opportunity Cost
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            {career.opportunityCost?.description}
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#4ade80' }}>ACCESSIBLE PATHS</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {career.opportunityCost?.retained.map(c => (
                                    <span key={c} style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem', border: '1px solid rgba(74, 222, 128, 0.2)' }}>
                                        {c}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>FADED OPTIONS (Harder to switch)</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {career.opportunityCost?.faded.map(c => (
                                    <span key={c} style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--text-muted)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem', border: '1px dashed rgba(255,255,255,0.1)' }}>
                                        {c}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="glass-card" style={{ borderColor: 'rgba(244, 63, 94, 0.3)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent)' }}>
                            <AlertCircle size={20} /> Reality Check
                        </h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ opacity: 0.7 }}>Risk Level:</span>
                            <span style={{ fontWeight: 'bold' }}>{career.risk}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ opacity: 0.7 }}>Lifestyle:</span>
                            <span style={{ fontWeight: 'bold' }}>{career.lifestyle || 'Varied'}</span>
                        </div>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Related Careers</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {career.related?.map((rel, i) => (
                                <span key={i} className="badge" style={{ background: 'rgba(255,255,255,0.1)' }}>{rel}</span>
                            )) || <span style={{ opacity: 0.5 }}>None listed</span>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CareerDetails;
