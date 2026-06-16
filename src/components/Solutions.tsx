import React from 'react';

const Solutions = () => {
  const solutions = [
    { title: 'Plataformas Digitais FinTech', tag: 'Fintech' },
    { title: 'Sistemas ERP Customizados', tag: 'Corporativo' },
    { title: 'Aplicações Mobile de Alta Performance', tag: 'Web & Mobile' },
    { title: 'Integrações Complexas de APIs e Gateways', tag: 'Infraestrutura' }
  ];

  return (
    <section id="solucoes" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-3">Soluções Ativas</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engenharia de software aplicada a problemas reais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((sol, index) => (
            <div key={index} className="group relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between h-64 hover:border-slate-700 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-32 h-32 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {sol.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 max-w-sm leading-snug">
                  {sol.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                Ver arquitetura do caso
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;