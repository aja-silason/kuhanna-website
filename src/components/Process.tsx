import React from 'react';

const Process = () => {
  const steps = [
    { num: '01', title: 'Análise de Necessidade', desc: 'Mapeamento minucioso dos desafios operacionais e objetivos de negócio.' },
    { num: '02', title: 'Planejamento da Solução', desc: 'Modelagem da arquitetura, stack tecnológica ideal e prazos de entrega.' },
    { num: '03', title: 'Desenvolvimento Ágil', desc: 'Codificação sob padrões rígidos de qualidade, testes unitários e CI/CD.' },
    { num: '04', title: 'Implementação / Deploy', desc: 'Lançamento assistido em ambiente de produção com zero impacto operacional.' },
    { num: '05', title: 'Suporte e Evolução', desc: 'Monitoramento contínuo, otimizações de performance e atualizações de segurança.' },
  ];

  return (
    <section id="processo" className="py-24 bg-slate-900/20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-3">Ciclo de Desenvolvimento</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Metodologia focada em previsibilidade e velocidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-start">
              <div className="text-4xl font-black bg-gradient-to-b from-blue-500/30 to-transparent bg-clip-text text-transparent font-mono mb-2">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;