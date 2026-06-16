import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div>
            <h2 className="text-sm font-semibold tracking-wider text-blue-500 uppercase mb-3">Contato</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
              Pronto para transformar sua infraestrutura digital?
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
              Entre em contato direto com nosso time de engenharia. Responderemos em até 24 horas úteis com uma análise preliminar.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <span className="text-slate-300 font-medium">contato@nexus.tech</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <span className="text-slate-300 font-medium">+55 (11) 99999-9999</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Nome Completo</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Ex: João Silva" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">E-mail Corporativo</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Ex: joao@empresa.com" required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Mensagem / Escopo Breve</label>
                <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Fale um pouco sobre a solução que deseja desenvolver..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-3.5 rounded-lg transition-colors shadow-lg shadow-blue-500/10">
                Enviar Solicitação
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;