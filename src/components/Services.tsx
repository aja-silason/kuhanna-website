import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Criação de Carteira Digital',
      description: 'Sistemas de pagamento altamente protegidos, transações instantâneas, armazenamento de saldo em tempo real e integração simplificada com gateways financeiros globais.',
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      title: 'Software Sob Medida',
      description: 'Sistemas empresariais robustos e escaláveis. Desenvolvemos aplicações web e mobile otimizadas com foco em segurança, integradas via APIs de alta performance.',
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Consultoria Técnica em TI',
      description: 'Evolução da arquitetura de software, planejamento de migração para nuvem, auditoria de código e infraestrutura para garantir a correta transformação digital.',
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-3">Nossas Especialidades</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Soluções completas desenhadas para a era moderna da tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="w-14 h-14 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 mb-6 group-hover:border-blue-500/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;