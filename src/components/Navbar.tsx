import { Terminal } from 'lucide-react';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#10141a]/90 backdrop-blur-md border-b border-[#262a31]">
      <div className="max-w-[1024px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded bg-[#181c22] border border-[#31353c] flex items-center justify-center text-[#acc7ff] group-hover:border-[#acc7ff] transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-bold text-lg text-[#dfe2eb] tracking-tight group-hover:text-white transition-colors">
            DevProfile
          </span>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium text-[#c1c6d6] hover:text-[#acc7ff] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-sm font-medium text-[#c1c6d6] hover:text-[#acc7ff] transition-colors cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-[#c1c6d6] hover:text-[#acc7ff] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
