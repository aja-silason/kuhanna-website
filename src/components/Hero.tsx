
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/40 via-slate-950 to-slate-950">
      {/* Decorative Grid/Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          Liderando a Transformação Digital
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          Construímos o futuro através de{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            soluções digitais de elite
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          Desenvolvimento de software sob medida, arquiteturas financeiras seguras e consultoria estratégica para acelerar o crescimento do seu negócio.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contato" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/20 hover:scale-[1.02]">
            Fale Conosco
          </a>
          <a href="#servicos" className="w-full sm:w-auto bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:border-slate-700 text-slate-300 font-medium px-8 py-4 rounded-xl transition-all duration-300">
            Conhecer Serviços
          </a>
        </div>

        {/* Floating tech element dashboard placeholder for visual premium look */}
        <div className="mt-16 relative mx-auto max-w-5xl rounded-xl border border-slate-800 bg-slate-900/50 p-2 backdrop-blur-sm shadow-2xl shadow-indigo-500/5">
          <div className="rounded-lg bg-slate-950 p-4 sm:p-8 border border-slate-900 aspect-[16/9] flex items-center justify-center text-slate-700">
            {/* Visual tech art representation */}
            <div className="space-y-4 w-full max-w-md">
              <div className="h-2 bg-slate-800 rounded w-3/4 mx-auto animate-pulse"></div>
              <div className="h-2 bg-slate-800 rounded w-1/2 mx-auto animate-pulse"></div>
              <div className="grid grid-cols-3 gap-2 pt-4">
                <div className="h-12 bg-slate-900 border border-slate-800/80 rounded-lg flex items-center justify-center text-blue-500/50 font-mono text-xs">API_OK</div>
                <div className="h-12 bg-slate-900 border border-slate-800/80 rounded-lg flex items-center justify-center text-indigo-500/50 font-mono text-xs">SEC_SECURE</div>
                <div className="h-12 bg-slate-900 border border-slate-800/80 rounded-lg flex items-center justify-center text-cyan-500/50 font-mono text-xs">CLOUD_UP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;