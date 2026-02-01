import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const LandingPage = ({ onStart }) => {
    return (
        <div className="container" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div className="animate-fade-in">
                <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        background: 'rgba(139, 92, 246, 0.2)',
                        padding: '1rem',
                        borderRadius: '50%',
                        boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)'
                    }}>
                        <Sparkles size={64} color="#a78bfa" />
                    </div>
                </div>

                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: '800',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, #fff, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Guruji
                </h1>

                <p style={{
                    fontSize: '1.5rem',
                    color: 'var(--text-muted)',
                    maxWidth: '600px',
                    margin: '0 auto 3rem auto'
                }}>
                    Your career guide before you commit. <br />
                    <span style={{ fontSize: '1.2rem', opacity: 0.8 }}>Test drive your future with gamified simulations.</span>
                </p>

                <button className="btn-primary" onClick={onStart} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Get Started <ArrowRight size={20} />
                </button>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '2rem',
                color: 'rgba(255,255,255,0.2)',
                fontSize: '0.875rem'
            }}>
                © 2026 Guruji Platform. All rights reserved.
            </div>
        </div>
    );
};

export default LandingPage;
