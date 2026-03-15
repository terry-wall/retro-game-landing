"use client";
import { useEffect, useRef } from "react";

interface RetroGameProps {
  onClose: () => void;
}

export default function RetroGame({ onClose }: RetroGameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Listen for escape key to close game
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  
  return (
    <div className="relative">
      {/* Game Header */}
      <div className="bg-neon-purple/20 border-b border-neon-blue/30 p-3 flex justify-between items-center">
        <div className="font-pixel text-neon-yellow text-sm">NEONBLAST v1.0</div>
        <div className="flex gap-2 items-center">
          <div className="font-outfit text-cream/60 text-xs">Press ESC to exit</div>
          <button
            onClick={onClose}
            className="w-6 h-6 bg-neon-pink/20 text-neon-pink border border-neon-pink/50 rounded hover:bg-neon-pink/30 transition-colors text-xs font-bold"
          >
            ×
          </button>
        </div>
      </div>
      
      {/* Game Content */}
      <div className="aspect-video bg-black">
        <iframe
          ref={iframeRef}
          src="/game.html"
          className="w-full h-full border-0"
          title="NeonBlast Game"
        />
      </div>
      
      {/* Game Footer */}
      <div className="bg-neon-purple/20 border-t border-neon-blue/30 p-2">
        <div className="flex justify-between items-center text-xs font-outfit text-cream/60">
          <div>Use WASD or arrow keys to move • Space or click to shoot</div>
          <div className="flex gap-4">
            <span>Score: <span className="text-neon-yellow">0</span></span>
            <span>Lives: <span className="text-neon-green">3</span></span>
            <span>Wave: <span className="text-neon-blue">1</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}