"use client";
import { useState } from "react";
import RetroGame from "@/components/RetroGame";

export default function GameSection() {
  const [isGameActive, setIsGameActive] = useState(false);
  
  return (
    <section id="game-section" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-pink to-transparent" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-bangers text-4xl sm:text-6xl text-neon-yellow mb-4 animate-neon-pulse">
            GAME ZONE
          </h2>
          <p className="font-outfit text-lg text-cream/80 max-w-2xl mx-auto">
            Experience classic arcade action right in your browser. No downloads required!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Game Container */}
          <div className="bg-neon-purple/20 neon-border border-neon-blue rounded-lg p-6 mb-8">
            <div className="bg-black rounded-lg overflow-hidden">
              {!isGameActive ? (
                /* Game Preview/Start Screen */
                <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-neon-dark-purple to-black text-center p-8">
                  <div className="font-pixel text-neon-yellow text-2xl mb-4 animate-neon-pulse">
                    NEONBLAST
                  </div>
                  <div className="font-outfit text-cream/70 mb-8 text-lg">
                    Classic space shooter action
                  </div>
                  <button
                    onClick={() => setIsGameActive(true)}
                    className="px-8 py-3 font-pixel text-black bg-neon-yellow neon-border border-neon-yellow hover:bg-black hover:text-neon-yellow transition-all duration-300"
                  >
                    START GAME
                  </button>
                  
                  <div className="mt-8 grid grid-cols-2 gap-8 text-sm">
                    <div className="text-center">
                      <div className="font-pixel text-neon-pink mb-2">CONTROLS</div>
                      <div className="font-outfit text-cream/60 space-y-1">
                        <div>WASD / Arrow Keys - Move</div>
                        <div>Space - Shoot</div>
                        <div>Mouse - Aim & Shoot</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-pixel text-neon-green mb-2">FEATURES</div>
                      <div className="font-outfit text-cream/60 space-y-1">
                        <div>Retro pixel graphics</div>
                        <div>Neon particle effects</div>
                        <div>Endless waves</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Actual Game */
                <RetroGame onClose={() => setIsGameActive(false)} />
              )}
            </div>
          </div>
          
          {/* Game Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neon-purple/10 neon-border border-neon-pink/50 rounded-lg p-4 text-center">
              <div className="font-pixel text-neon-pink text-xl mb-2">HIGH SCORE</div>
              <div className="font-outfit text-2xl text-cream">999,999</div>
            </div>
            <div className="bg-neon-purple/10 neon-border border-neon-blue/50 rounded-lg p-4 text-center">
              <div className="font-pixel text-neon-blue text-xl mb-2">PLAYERS</div>
              <div className="font-outfit text-2xl text-cream">1,337</div>
            </div>
            <div className="bg-neon-purple/10 neon-border border-neon-green/50 rounded-lg p-4 text-center">
              <div className="font-pixel text-neon-green text-xl mb-2">DIFFICULTY</div>
              <div className="font-outfit text-2xl text-cream">INSANE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}