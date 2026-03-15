"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neon-dark-purple via-neon-purple to-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-yellow rounded-full animate-ping" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-neon-pink rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-neon-blue rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-green rounded-full animate-pulse" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-24 text-center z-10">
        <div className="mb-8">
          <h1 className="font-bangers text-6xl sm:text-8xl lg:text-9xl text-neon-yellow animate-neon-pulse tracking-wider mb-4">
            NEONBLAST
          </h1>
          <div className="font-pixel text-sm sm:text-base lg:text-lg text-neon-blue tracking-widest">
            [RETRO SPACE ARCADE]
          </div>
        </div>
        
        <p className="font-outfit text-xl sm:text-2xl text-cream/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Blast through waves of enemies in this classic arcade-style space shooter. 
          Experience the golden age of gaming with modern browser technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('game-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 font-pixel text-lg bg-neon-yellow text-black neon-border border-neon-yellow hover:bg-black hover:text-neon-yellow transition-all duration-300 animate-glow"
          >
            <span className="relative z-10">PLAY NOW</span>
            <div className="absolute inset-0 bg-neon-yellow/20 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 font-outfit text-lg text-neon-pink neon-border border-neon-pink hover:bg-neon-pink/10 transition-all duration-300"
          >
            Learn More
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
        
        {/* Retro Stats Display */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="font-pixel text-2xl text-neon-green">∞</div>
            <div className="font-outfit text-sm text-cream/70 mt-1">LIVES</div>
          </div>
          <div className="text-center">
            <div className="font-pixel text-2xl text-neon-blue">★★★</div>
            <div className="font-outfit text-sm text-cream/70 mt-1">DIFFICULTY</div>
          </div>
          <div className="text-center">
            <div className="font-pixel text-2xl text-neon-orange">1985</div>
            <div className="font-outfit text-sm text-cream/70 mt-1">RETRO</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}