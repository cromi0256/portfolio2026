import { Mail, Link2, Code } from 'lucide-react';

export default function ContactSection() {
  const EMAIL = 'cromi0256@gmail.com';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/%EA%B9%80-%EC%98%81%ED%99%98-444721165/';
  const GITHUB_URL = 'https://github.com/cromi0256';

  return (
    <section id="contact" className="py-16 border-t border-[#262a31] text-center">
      <div className="max-w-2xl mx-auto space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#dfe2eb] tracking-tight">
          언제든지 연락주세요
        </h2>
        
        <p className="text-[#c1c6d6] text-sm md:text-base leading-relaxed px-4">
          현재 새로운 기회와 협업 관계를 모색하고 있습니다. 아래 플랫폼 중 어느 곳을 통해서든 부담 없이 연락 주시기 바랍니다.
        </p>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-[#dfe2eb] hover:text-[#acc7ff] transition-colors font-medium text-base group cursor-pointer"
          >
            <Mail className="w-5 h-5 text-[#c1c6d6] group-hover:text-[#acc7ff] transition-colors" />
            <span>Email</span>
          </a>

          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#dfe2eb] hover:text-[#acc7ff] transition-colors font-medium text-base group cursor-pointer"
          >
            <Link2 className="w-5 h-5 text-[#c1c6d6] group-hover:text-[#acc7ff] transition-colors" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#dfe2eb] hover:text-[#acc7ff] transition-colors font-medium text-base group cursor-pointer"
          >
            <Code className="w-5 h-5 text-[#c1c6d6] group-hover:text-[#acc7ff] transition-colors" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
