
import React, { useRef, useEffect } from 'react';

const FractalTree: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Responsive canvas sizing
    const updateCanvasSize = () => {
      const isMobile = window.innerWidth < 768;
      const size = isMobile ? 250 : 300;
      canvas.width = size;
      canvas.height = size;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    let animationFrame: number;
    let frameCount = 0;

    const drawBranch = (
      length: number,
      angle: number
    ) => {
      if (length < 3) return;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -length);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = Math.max(1, length / 15);
      ctx.stroke();

      ctx.translate(0, -length);

      ctx.save();
      ctx.rotate(angle);
      drawBranch(length * 0.67, angle);
      ctx.restore();

      ctx.save();
      ctx.rotate(-angle);
      drawBranch(length * 0.67, angle);
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height - 20);
      
      // Vary the angle using sin for smooth animation
      const currentAngle = Math.sin(frameCount * 0.01) * (Math.PI / 8) + (Math.PI / 6);
      
      const initialLength = canvas.width < 300 ? 65 : 80;
      drawBranch(initialLength, currentAngle);
      
      ctx.restore();
      
      frameCount++;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default FractalTree;
