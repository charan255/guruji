import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { ArrowLeft, Scale } from 'lucide-react';

const CareerComparison = ({ onBack }) => {
    const [allCareers, setAllCareers] = useState([]);
    const [careerA, setCareerA] = useState(null);
    const [careerB, setCareerB] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.getAllCareers().then(data => {
            setAllCareers(data);
            if (data.length >= 2) {
                setCareerA(data[0]);
                setCareerB(data[1]);
            }
            setLoading(false);
        });
    }, []);

    const handleSelectA = (e) => {
        const selected = allCareers.find(c => c.id === e.target.value);
        setCareerA(selected);
    };

    const handleSelectB = (e) => {
        const selected = allCareers.find(c => c.id === e.target.value);
        setCareerB(selected);
    };

    if (loading || !careerA || !careerB) return <div className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>Loading comparison...</div>;

    const attributes = [
        { label: 'Salary Range', key: 'salary' },
        { label: 'Growth', key: 'growth' },
        { label: 'Risk Factor', key: 'risk' }
    ];

    const getValue = (career, key) => {
        return career[key] || '-';
    };

    // ... (lines 50-136 omitted)



    return (
        <div className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>
            <button
                onClick={onBack}
                className="btn-secondary"
                style={{ width: 'fit-content', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
                <ArrowLeft size={18} /> Back to Matches
            </button>

            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <Scale size={40} color="var(--primary)" /> Compare Careers
                </h2>
                <p style={{ color: 'var(--text-muted)' }}>Analyze trade-offs side by side to make an informed choice.</p>
            </header>

            {/* Selectors */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center', marginBottom: '3rem' }}>
                <div className="glass-card" style={{ padding: '1rem' }}>
                    <select
                        value={careerA.id}
                        onChange={handleSelectA}
                        style={{
                            width: '100%',
                            background: 'transparent',
                            color: 'white',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        {allCareers.map(c => <option key={c.id} value={c.id} style={{ background: '#0f172a' }}>{c.title}</option>)}
                    </select>
                </div>

                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', opacity: 0.5 }}>VS</div>

                <div className="glass-card" style={{ padding: '1rem' }}>
                    <select
                        value={careerB.id}
                        onChange={handleSelectB}
                        style={{
                            width: '100%',
                            background: 'transparent',
                            color: 'white',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        {allCareers.map(c => <option key={c.id} value={c.id} style={{ background: '#0f172a' }}>{c.title}</option>)}
                    </select>
                </div>
            </div>

            {/* Comparison Grid */}
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>

                {/* Header Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ fontWeight: 'bold' }}>Attribute</div>
                    <div style={{ textAlign: 'center', color: 'var(--primary)', fontWeight: 'bold' }}>{careerA.title}</div>
                    <div style={{ textAlign: 'center', color: 'var(--accent)', fontWeight: 'bold' }}>{careerB.title}</div>
                </div>

                {/* Data Rows */}
                {attributes.map((attr, idx) => (
                    <div key={idx} style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        padding: '1.5rem',
                        borderBottom: idx === attributes.length - 1 ? 'none' : '1px solid var(--glass-border)',
                        background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'
                    }}>
                        <div style={{ opacity: 0.7 }}>{attr.label}</div>
                        <div style={{ textAlign: 'center' }}>
                            {getValue(careerA, attr.key)}
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            {getValue(careerB, attr.key)}
                        </div>
                    </div>
                ))}

                {/* Skills Row */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '1.5rem',
                    borderTop: '1px solid var(--glass-border)'
                }}>
                    <div style={{ opacity: 0.7 }}>Core Skills</div>
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                        {careerA.skills?.slice(0, 3).map(s => (
                            <span key={s.name || s} className="badge" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#c4b5fd' }}>{s.name || s}</span>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                        {careerB.skills?.slice(0, 3).map(s => (
                            <span key={s.name || s} className="badge" style={{ background: 'rgba(244, 63, 94, 0.1)', color: '#fda4af' }}>{s.name || s}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Insight Summary */}
            <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="glass-card" style={{ borderTop: '4px solid var(--primary)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Why choose {careerA.title}?</h3>
                    <p style={{ opacity: 0.8, lineHeight: '1.6' }}>{careerA.description}</p>
                </div>
                <div className="glass-card" style={{ borderTop: '4px solid var(--accent)' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>Why choose {careerB.title}?</h3>
                    <p style={{ opacity: 0.8, lineHeight: '1.6' }}>{careerB.description}</p>
                </div>
            </div>

        </div>
    );
};

export default CareerComparison;
