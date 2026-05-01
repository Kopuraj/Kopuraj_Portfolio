import { useEffect, useState } from 'react';

export default function TransportAnimation() {
  const [busPosition, setBusPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBusPosition(prev => (prev >= 100 ? 0 : prev + 0.5));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card" style={{ padding: '2rem', marginBottom: '4rem', overflow: 'hidden' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-cyan)' }}>
        <i className="fas fa-satellite-dish" style={{ marginRight: '0.5rem' }}></i> 
        Live Tracking Simulation
      </h2>
      
      <div style={{ position: 'relative', height: '150px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', padding: '2rem 1rem', display: 'flex', alignItems: 'center' }}>
        {/* Route Line */}
        <div style={{ width: '100%', height: '4px', background: 'var(--border-color)', position: 'relative', borderRadius: '2px' }}>
          
          {/* Stops */}
          {[0, 33, 66, 100].map(pos => (
            <div key={pos} style={{
              position: 'absolute', left: `${pos}%`, top: '50%', transform: 'translate(-50%, -50%)',
              width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-primary)',
              border: `3px solid ${busPosition >= pos ? 'var(--accent-cyan)' : 'var(--text-muted)'}`,
              transition: 'border-color 0.3s ease', zIndex: 1
            }}>
              <span style={{ position: 'absolute', top: '25px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                {pos === 0 ? 'Station A' : pos === 33 ? 'Stop 1' : pos === 66 ? 'Stop 2' : 'Station B'}
              </span>
            </div>
          ))}

          {/* Active Route Fill */}
          <div style={{
            position: 'absolute', left: 0, top: 0, height: '100%', background: 'var(--accent-cyan)',
            width: `${busPosition}%`, transition: 'width 0.1s linear', borderRadius: '2px'
          }}></div>

          {/* Moving Bus */}
          <div style={{
            position: 'absolute', left: `${busPosition}%`, top: '50%', transform: 'translate(-50%, -50%)',
            background: 'var(--accent-purple)', width: '40px', height: '40px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
            boxShadow: '0 0 15px var(--accent-purple)', zIndex: 2, transition: 'left 0.1s linear'
          }}>
            <i className="fas fa-bus"></i>
            {/* GPS Pulse */}
            <div style={{
              position: 'absolute', width: '100%', height: '100%', borderRadius: '50%',
              border: '2px solid var(--accent-purple)', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
