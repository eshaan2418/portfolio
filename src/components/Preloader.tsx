import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'show' | 'expand' | 'complete'>('show');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    const audio = new Audio('/sound.mp3');
    audio.play();
    // When audio ends, proceed to landing page
    audio.onended = () => {
      setPhase('complete');
      setTimeout(onComplete, 500);
    };
    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.onended = null;
    };
  }, [hasStarted, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      <img 
        src="/lovable-uploads/52334684-075b-46ae-9b83-739685e4681b.png"
        alt="Eshaan Oozher Kapooswalla"
        className={`transition-all duration-500 ease-out ${
          phase === 'show' 
            ? 'opacity-100 scale-100 blur-0' 
            : phase === 'expand'
            ? 'opacity-0 scale-150 blur-lg'
            : 'opacity-0'
        }`}
        style={{
          maxWidth: '80vw',
          height: 'auto'
        }}
      />
      {!hasStarted && (
        <button
          onClick={() => setHasStarted(true)}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded font-medium"
        >
          click to enter <span style={{ color: 'red' }}>👋</span>
        </button>
      )}
    </div>
  );
};

export default Preloader;
