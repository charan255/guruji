import React, { useState } from 'react';
import { User, CheckCircle, Zap, Target, BookOpen, Shield } from 'lucide-react';
import { PROFILE_CONSTANTS, INTERESTS } from '../data';
import { api } from '../services/api';

const UserProfile = ({ onComplete }) => {
    const [data, setData] = useState({
        interests: [],
        skills: { coding: 3, data: 3, design: 3, business: 3, people: 3, arts: 3 },
        workStyle: { structure: 50, pace: 50 },
        learning: 'medium',
        risk: 'medium',
        motivations: []
    });

    const toggleArrayItem = (key, value) => {
        setData(prev => {
            const list = prev[key];
            if (list.includes(value)) {
                return { ...prev, [key]: list.filter(i => i !== value) };
            } else {
                return { ...prev, [key]: [...list, value] };
            }
        });
    };

    const handleSlider = (category, key, value) => {
        setData(prev => ({
            ...prev,
            [category]: { ...prev[category], [key]: parseInt(value) }
        }));
    };

    const handleComplete = async () => {
        try {
            await api.saveProfile(data);
            onComplete(data);
        } catch (err) {
            console.error("Failed to save profile", err);
            // Proceed anyway for demo
            onComplete(data);
        }
    };

    return (
        <div className="container animate-slide-up" style={{ maxWidth: '800px' }}>
            <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '1rem' }}>
                    <User size={32} color="#fff" />
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.2rem' }}>Build Your Profile</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Let's customize your career path.</p>
                </div>
            </header>

            <div className="glass-card">

                {/* 1. Interests */}
                <section style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Key Interests</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {INTERESTS.map(interest => (
                            <button
                                key={interest}
                                onClick={() => toggleArrayItem('interests', interest)}
                                className={data.interests.includes(interest) ? 'badge' : ''}
                                style={{
                                    background: data.interests.includes(interest) ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                    border: data.interests.includes(interest) ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                    color: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '2rem',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                </section>

                {/* 2. Skill Confidence */}
                <section style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                        <Zap size={20} color="var(--accent)" /> Skill Confidence
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {PROFILE_CONSTANTS.SKILLS.map(skill => (
                            <div key={skill.id}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                    <span>{skill.label}</span>
                                    <span style={{ color: 'var(--secondary)' }}>{data.skills[skill.id]}/5</span>
                                </div>
                                <input
                                    type="range" min="1" max="5"
                                    value={data.skills[skill.id]}
                                    onChange={(e) => handleSlider('skills', skill.id, e.target.value)}
                                    style={{ width: '100%', accentColor: 'var(--secondary)' }}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. Work Style */}
                <section style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Work Style</h3>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                            <span>Structured Tasks</span>
                            <span>Open-ended Problems</span>
                        </div>
                        <input
                            type="range" min="0" max="100"
                            value={data.workStyle.structure}
                            onChange={(e) => handleSlider('workStyle', 'structure', e.target.value)}
                            style={{ width: '100%', accentColor: '#fbbf24' }}
                        />
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                            <span>Fast-paced</span>
                            <span>Deep Focus</span>
                        </div>
                        <input
                            type="range" min="0" max="100"
                            value={data.workStyle.pace}
                            onChange={(e) => handleSlider('workStyle', 'pace', e.target.value)}
                            style={{ width: '100%', accentColor: '#fbbf24' }}
                        />
                    </div>
                </section>

                {/* 4. Learning & Risk */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                    <section>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                            <BookOpen size={18} /> Learning Effort
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {PROFILE_CONSTANTS.LEARNING.map(opt => (
                                <button
                                    key={opt.id}
                                    onClick={() => setData(prev => ({ ...prev, learning: opt.id }))}
                                    style={{
                                        textAlign: 'left',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        background: data.learning === opt.id ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255,255,255,0.05)',
                                        border: data.learning === opt.id ? '1px solid var(--secondary)' : '1px solid transparent',
                                        color: 'white',
                                        fontSize: '0.9rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{ fontWeight: '600' }}>{opt.label}</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{opt.desc}</div>
                                </button>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                            <Shield size={18} /> Risk Tolerance
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {PROFILE_CONSTANTS.RISK.map(opt => (
                                <button
                                    key={opt.id}
                                    onClick={() => setData(prev => ({ ...prev, risk: opt.id }))}
                                    style={{
                                        textAlign: 'left',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        background: data.risk === opt.id ? 'rgba(244, 63, 94, 0.2)' : 'rgba(255,255,255,0.05)',
                                        border: data.risk === opt.id ? '1px solid var(--accent)' : '1px solid transparent',
                                        color: 'white',
                                        fontSize: '0.9rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </section>
                </div>

                {/* 5. Motivations */}
                <section style={{ marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                        <Target size={20} color="#fbbf24" /> What drives you?
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {PROFILE_CONSTANTS.MOTIVATIONS.map(driver => (
                            <button
                                key={driver.id}
                                onClick={() => toggleArrayItem('motivations', driver.id)}
                                style={{
                                    background: data.motivations.includes(driver.id) ? '#fbbf24' : 'rgba(255,255,255,0.05)',
                                    color: data.motivations.includes(driver.id) ? '#000' : 'white',
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '2rem',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {driver.label}
                            </button>
                        ))}
                    </div>
                </section>

                <div style={{ textAlign: 'right', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
                    <button
                        className="btn-primary"
                        onClick={handleComplete}
                        disabled={data.interests.length === 0}
                        style={{ opacity: data.interests.length === 0 ? 0.5 : 1 }}
                    >
                        See Career Matches
                    </button>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;
