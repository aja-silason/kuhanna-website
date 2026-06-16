const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              KUHANNA<span className="text-blue-500"></span>
            </span>
            <p className="text-xs text-slate-500 mt-1">Na vanguarda do desenvolvimento de sistemas robustos.</p>
          </div>

          {/* Social Icons Placeholder */}
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter / X</a>
          </div>

          <div className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} KUHANNA. Todos os direitos reservados.
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;