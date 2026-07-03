import React, { useState, useEffect } from 'react';
import './Loading.css';

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [phase, setPhase] = useState<'enter' | 'visible' | 'exit' | 'done'>('enter');
  const text = 'Olive';
  const characters = text.split('');

  useEffect(() => {
    // Phase 1: Enter animation (slide in from bottom)
    const enterTimer = setTimeout(() => {
      setPhase('visible');
    }, 100);

    // Phase 2: Stay visible
    const visibleTimer = setTimeout(() => {
      setPhase('exit');
    }, 1500); // 100ms + ~1000ms for enter animation + 400ms visible

    // Phase 3: Exit animation (slide up)
    const exitTimer = setTimeout(() => {
      setPhase('done');
    }, 2800); // After exit animation completes

    // Phase 4: Complete (with 0.5s余韻)
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3300); // 2800ms + 500ms余韻

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(visibleTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  if (phase === 'done') {
    return null;
  }

  return (
    <div className={`loading ${phase === 'exit' ? 'loading--exit' : ''}`}>
      <div className={`loading__text ${phase === 'visible' || phase === 'exit' ? 'loading__text--visible' : ''} ${phase === 'exit' ? 'loading__text--exit' : ''}`}>
        {characters.map((char, index) => (
          <span
            key={index}
            className="loading__char"
            style={{
              transitionDelay: phase === 'exit'
                ? `${index * 0.08}s`
                : `${index * 0.1}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
