import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ onBack }) => {
    return (
        <button
            onClick={onBack}
            className="animate-fade-in"
            style={{
                position: 'fixed',
                top: '1.5rem',
                left: '2rem',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.6rem 1.2rem',
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '2rem',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateX(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.6)';
                e.currentTarget.style.transform = 'translate(0)';
            }}
        >
            <ArrowLeft size={18} />
            <span>Back</span>
        </button>
    );
};

export default BackButton;
