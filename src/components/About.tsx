import React from 'react';

const About = () => {
  const stats = [
    { label: 'Missão', title: 'Impulsionar negócios através de software confiável e inovação de ponta.' },
    { label: 'Visão', title: 'Ser referência global em desenvolvimento ágil e fintech ecossistemas.' },
    { label: 'Valores', title: 'Segurança irrestrita, transparência técnica e excelência no código.' }
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-900/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-3">Quem Somos</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
              Uma equipe obstinada pela perfeição digital
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Nascemos com o propósito de suprir a alta demanda do mercado por softwares corporativos que não apenas funcionam, mas performam com excelência e segurança máxima. 
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Nossos engenheiros dominam arquiteturas de microsserviços, criptografia financeira e ecossistemas Cloud. Combinamos inteligência de negócios com práticas avançadas de engenharia para criar vantagens competitivas reais aos nossos parceiros.
            </p>
            
            <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
              <div>
                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                <div className="text-xs text-slate-400 mt-1">Uptime em Sistemas Implementados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Soluções Customizadas e Escaláveis</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((item, idx) => (
              <div key={idx} className="bg-slate-950 p-6 rounded-xl border border-slate-800/70">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{item.label}</span>
                <p className="text-slate-200 mt-2 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;