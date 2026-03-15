const features = [
  {
    title: "Retro Graphics",
    description: "Experience the golden age of arcade gaming with authentic pixel-perfect graphics and neon aesthetics that bring back the 80s.",
    icon: "🎮",
    color: "neon-yellow",
  },
  {
    title: "Particle Effects",
    description: "Stunning neon particle explosions and visual effects that create an immersive gaming experience with modern flair.",
    icon: "✨",
    color: "neon-pink",
  },
  {
    title: "Endless Action",
    description: "Battle through infinite waves of enemies with increasing difficulty. Test your skills and climb the global leaderboard.",
    icon: "🚀",
    color: "neon-blue",
  },
  {
    title: "Multiple Controls",
    description: "Play your way with keyboard, mouse, or touch controls. Optimized for both desktop and mobile gaming experiences.",
    icon: "⚡",
    color: "neon-green",
  },
  {
    title: "Classic Sound",
    description: "Immerse yourself in authentic retro sound effects and chiptune music that perfectly complement the arcade atmosphere.",
    icon: "🔊",
    color: "neon-orange",
  },
  {
    title: "No Download",
    description: "Play instantly in your browser without any downloads or installations. Cross-platform compatibility guaranteed.",
    icon: "🌐",
    color: "neon-blue",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-neon-dark-purple via-black to-neon-purple relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bangers text-4xl sm:text-6xl text-neon-yellow mb-6 animate-neon-pulse">
            GAME FEATURES
          </h2>
          <div className="font-pixel text-neon-blue text-sm mb-4 tracking-widest">
            [POWERED BY MODERN WEB TECHNOLOGY]
          </div>
          <p className="font-outfit text-lg text-cream/80 max-w-3xl mx-auto leading-relaxed">
            Built with cutting-edge browser technology to deliver smooth 60fps gameplay 
            with the authentic feel of classic arcade machines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group bg-black/50 neon-border border-${feature.color}/30 rounded-lg p-6 hover:border-${feature.color} transition-all duration-500 hover:bg-${feature.color}/5 animate-float`}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 retro-shadow">{feature.icon}</div>
                <h3 className={`font-pixel text-xl text-${feature.color} mb-3 group-hover:animate-neon-pulse`}>
                  {feature.title}
                </h3>
                <p className="font-outfit text-cream/70 leading-relaxed group-hover:text-cream/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative Corner Elements */}
              <div className={`absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-${feature.color}/50 group-hover:border-${feature.color} transition-colors duration-300`} />
              <div className={`absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-${feature.color}/50 group-hover:border-${feature.color} transition-colors duration-300`} />
            </div>
          ))}
        </div>
        
        {/* Tech Stack Info */}
        <div className="mt-16 text-center">
          <div className="font-pixel text-neon-green text-lg mb-4">
            TECHNOLOGY STACK
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-neon-blue/20 text-neon-blue neon-border border-neon-blue/50 rounded font-outfit">
              HTML5 Canvas
            </span>
            <span className="px-3 py-1 bg-neon-pink/20 text-neon-pink neon-border border-neon-pink/50 rounded font-outfit">
              JavaScript ES6+
            </span>
            <span className="px-3 py-1 bg-neon-yellow/20 text-neon-yellow neon-border border-neon-yellow/50 rounded font-outfit">
              Web Audio API
            </span>
            <span className="px-3 py-1 bg-neon-green/20 text-neon-green neon-border border-neon-green/50 rounded font-outfit">
              RequestAnimationFrame
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}