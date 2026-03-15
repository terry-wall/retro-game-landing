export default function Footer() {
  return (
    <footer className="bg-black border-t border-neon-blue/30 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
        <div className="absolute top-4 left-10 w-1 h-1 bg-neon-yellow rounded-full animate-pulse" />
        <div className="absolute bottom-8 right-16 w-1 h-1 bg-neon-pink rounded-full animate-ping" />
        <div className="absolute top-8 right-32 w-0.5 h-0.5 bg-neon-green rounded-full animate-bounce" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-bangers text-3xl text-neon-yellow mb-4 animate-neon-pulse">
              NEONBLAST
            </div>
            <p className="font-outfit text-cream/70 max-w-md leading-relaxed">
              Bringing classic arcade gaming to the modern web. Experience the golden age 
              of gaming with cutting-edge browser technology.
            </p>
            
            <div className="mt-6 flex gap-4">
              <div className="w-8 h-8 bg-neon-blue/20 neon-border border-neon-blue rounded flex items-center justify-center hover:bg-neon-blue/30 transition-colors cursor-pointer">
                <span className="text-neon-blue text-sm">🎮</span>
              </div>
              <div className="w-8 h-8 bg-neon-pink/20 neon-border border-neon-pink rounded flex items-center justify-center hover:bg-neon-pink/30 transition-colors cursor-pointer">
                <span className="text-neon-pink text-sm">🚀</span>
              </div>
              <div className="w-8 h-8 bg-neon-green/20 neon-border border-neon-green rounded flex items-center justify-center hover:bg-neon-green/30 transition-colors cursor-pointer">
                <span className="text-neon-green text-sm">⭐</span>
              </div>
            </div>
          </div>
          
          {/* Game Info */}
          <div>
            <h4 className="font-pixel text-neon-blue text-sm mb-4">GAME</h4>
            <div className="space-y-2 font-outfit text-cream/60 text-sm">
              <div className="hover:text-neon-blue transition-colors cursor-pointer">How to Play</div>
              <div className="hover:text-neon-blue transition-colors cursor-pointer">High Scores</div>
              <div className="hover:text-neon-blue transition-colors cursor-pointer">Controls</div>
              <div className="hover:text-neon-blue transition-colors cursor-pointer">Tips & Tricks</div>
            </div>
          </div>
          
          {/* About */}
          <div>
            <h4 className="font-pixel text-neon-pink text-sm mb-4">ARCADE</h4>
            <div className="space-y-2 font-outfit text-cream/60 text-sm">
              <div className="hover:text-neon-pink transition-colors cursor-pointer">About Us</div>
              <div className="hover:text-neon-pink transition-colors cursor-pointer">Technology</div>
              <div className="hover:text-neon-pink transition-colors cursor-pointer">Contact</div>
              <div className="hover:text-neon-pink transition-colors cursor-pointer">Support</div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-neon-purple/10 neon-border border-neon-green/30 rounded-lg p-4 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="font-pixel text-neon-yellow text-lg">999,999</div>
              <div className="font-outfit text-cream/60 text-xs">HIGH SCORE</div>
            </div>
            <div>
              <div className="font-pixel text-neon-blue text-lg">1,337</div>
              <div className="font-outfit text-cream/60 text-xs">PLAYERS TODAY</div>
            </div>
            <div>
              <div className="font-pixel text-neon-pink text-lg">42</div>
              <div className="font-outfit text-cream/60 text-xs">WAVES CLEARED</div>
            </div>
            <div>
              <div className="font-pixel text-neon-green text-lg">60</div>
              <div className="font-outfit text-cream/60 text-xs">FPS LOCKED</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-neon-blue/20">
          <div className="font-outfit text-cream/60 text-sm">
            &copy; {new Date().getFullYear()} NeonBlast Arcade. Crafted with 💜 for retro gaming fans.
          </div>
          <div className="flex gap-6 text-sm font-outfit">
            <span className="text-neon-green cursor-pointer hover:text-glow transition-all">Privacy</span>
            <span className="text-neon-blue cursor-pointer hover:text-glow transition-all">Terms</span>
            <span className="text-neon-pink cursor-pointer hover:text-glow transition-all">Cookies</span>
          </div>
        </div>
        
        {/* Retro Credit */}
        <div className="text-center mt-8">
          <div className="font-pixel text-neon-orange text-xs animate-neon-pulse">
            [PRESS ANY KEY TO CONTINUE]
          </div>
        </div>
      </div>
    </footer>
  );
}