import React, { useState } from 'react';
import { BarChart2, Check, ArrowRight, Activity, TrendingUp } from 'lucide-react';
import { SIMULATION_SCENARIO } from '../data';

const Simulation = ({ onComplete }) => {
    const [step, setStep] = useState(0); // 0 = Intro/Chart, 1..N = Questions
    const [answers, setAnswers] = useState({});
    const [isFinished, setIsFinished] = useState(false);

    const totalQuestions = SIMULATION_SCENARIO.questions.length;

    const handleStart = () => {
        setStep(1);
    };

    const handleAnswer = (questionId, optionId) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    };

    const handleNext = () => {
        if (step < totalQuestions) {
            setStep(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    // Simple CSS Bar Chart Component
    const Chart = () => {
        const maxVal = Math.max(...SIMULATION_SCENARIO.dataset.values);

        return (
            <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-around',
                height: '220px',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '1rem',
                padding: '2rem 1rem 1rem 1rem', /* paddingTop to allow space */
                marginBottom: '2rem'
            }}>
                {SIMULATION_SCENARIO.dataset.values.map((val, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        height: '100%',
                        gap: '0.5rem'
                    }}>
                        <div style={{
                            width: '40px',
                            height: `${(val / maxVal) * 80}%`, /* Use 80% to leave room for label */
                            background: 'linear-gradient(to top, var(--primary), var(--secondary))',
                            borderRadius: '4px 4px 0 0',
                            transition: 'height 1s ease-out'
                        }}></div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                            {SIMULATION_SCENARIO.dataset.labels[idx]}
                        </span>
                    </div>
                ))}
            </div>
        );
    };

    if (isFinished) {
        return (
            <div className="container animate-slide-up">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <div style={{
                        background: 'rgba(16, 185, 129, 0.2)',
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem auto',
                        boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
                    }}>
                        <Check size={40} color="#34d399" />
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Analysis Complete</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Here's how you performed as a Data Analyst.</p>
                </div>

                <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        {SIMULATION_SCENARIO.results.feedback.map((item, idx) => (
                            <div key={idx} className="badge" style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2.5rem' }}>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Enjoyment</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#f472b6' }}>{SIMULATION_SCENARIO.results.metrics.enjoyment}</div>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Aptitude</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa' }}>{SIMULATION_SCENARIO.results.metrics.aptitude}</div>
                        </div>
                        <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem' }}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Career Match</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>{SIMULATION_SCENARIO.results.metrics.matchImpact}</div>
                        </div>
                    </div>

                    <button className="btn-primary" onClick={onComplete}>
                        View Your Career Matches
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container animate-fade-in">
            <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    background: 'rgba(59, 130, 246, 0.2)',
                    borderRadius: '2rem',
                    color: '#60a5fa',
                    marginBottom: '1rem',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                }}>
                    Simulated Role: {SIMULATION_SCENARIO.role}
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{SIMULATION_SCENARIO.title}</h2>
            </header>

            <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', minHeight: '500px' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <Activity color="var(--accent)" /> Sales Data Visualization
                    </h3>
                    <Chart />
                </div>

                {step === 0 && (
                    <div className="animate-slide-up">
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                            {SIMULATION_SCENARIO.description} <br />
                            Look at the chart above. You will need to answer {totalQuestions} questions based on this data.
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <button className="btn-primary" onClick={handleStart}>
                                Start Analysis <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                )}

                {step > 0 && (
                    <div className="animate-slide-up">
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <span>Question {step} of {totalQuestions}</span>
                            <span>{Math.round((step / totalQuestions) * 100)}% Complete</span>
                        </div>

                        <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', marginBottom: '2rem' }}>
                            <div style={{ width: `${(step / totalQuestions) * 100}%`, height: '100%', background: 'var(--primary)' }}></div>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                            {SIMULATION_SCENARIO.questions[step - 1].text}
                        </h3>

                        <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                            {SIMULATION_SCENARIO.questions[step - 1].options.map(opt => (
                                <button
                                    key={opt.id}
                                    onClick={() => handleAnswer(step, opt.id)}
                                    style={{
                                        textAlign: 'left',
                                        padding: '1.25rem',
                                        borderRadius: '1rem',
                                        background: answers[step] === opt.id ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                        border: answers[step] === opt.id ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                                        color: 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <span style={{ fontWeight: 'bold', marginRight: '0.75rem', opacity: 0.7 }}>{opt.id}.</span>
                                    {opt.text}
                                </button>
                            ))}
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <button
                                className="btn-primary"
                                onClick={handleNext}
                                disabled={!answers[step]}
                                style={{ opacity: !answers[step] ? 0.5 : 1 }}
                            >
                                {step === totalQuestions ? 'Finish Simulation' : 'Next Question'}
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Simulation;
