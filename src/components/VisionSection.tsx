import { ExternalLink, Layers, Server, ShieldCheck, Cpu } from 'lucide-react';

export default function VisionSection() {
  const MLOPS_LINK = "https://github.com/cromi0256/core/tree/main/Operations/MLOps";

  const corePillars = [
    {
      icon: Cpu,
      title: '모델 개발',
      desc: '실용적인 문제 해결과 검증된 모델링',
    },
    {
      icon: Layers,
      title: '데이터 엔지니어링',
      desc: '안정적인 파이프라인과 데이터 처리',
    },
    {
      icon: Server,
      title: '인프라 관리',
      desc: '확장 가능한 분산 환경 및 CI/CD 구축',
    },
    {
      icon: ShieldCheck,
      title: '데이터 거버넌스',
      desc: '데이터 표준화와 체계적인 지식 자산화',
    },
  ];

  return (
    <section id="vision" className="py-12 border-t border-[#262a31]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#dfe2eb] tracking-tight">
            모델이 아닌 시스템을 설계하는 엔지니어
          </h2>
          <p className="text-sm md:text-base text-[#8b909f] mt-1">
            엔드투엔드 AI/ML 시스템의 기본과 확장을 아우르는 엔지니어링 비전
          </p>
        </div>
        <div className="text-xs font-mono font-semibold tracking-wider text-[#acc7ff] uppercase">
          01 / VISION
        </div>
      </div>

      {/* Main Vision Card */}
      <div className="bg-[#181c22] border border-[#262a31] rounded-2xl p-8 md:p-10 space-y-8 shadow-xl">
        <p className="text-[#c1c6d6] text-base md:text-[17px] leading-relaxed font-normal">
          모델 개발은 물론 데이터 엔지니어링과 인프라 관리, 그리고 데이터 거버넌스 까지 기본 개념에 충실합니다. 이를 통해 조직 전반의 팀이 AI 솔루션을 사용할 수 있도록 지원합니다. 아래의 링크에 포함된 기술을 사용하여 확장성과 성능이 우수한 솔루션을 설계합니다.
        </p>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#10141a]/60 border border-[#262a31] rounded-xl p-5 hover:border-[#414754] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#181c22] border border-[#31353c] flex items-center justify-center text-[#acc7ff] mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-[#dfe2eb] text-sm md:text-base mb-1">
                  {pillar.title}
                </h4>
                <p className="text-xs md:text-sm text-[#8b909f] leading-snug">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Link Area */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#262a31]/70">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#8b909f] uppercase tracking-wider block">
              Reference Architecture & Stack
            </span>
            <span className="text-sm text-[#dfe2eb] font-medium">
              MLOps 운영 기술 및 아키텍처 스택
            </span>
          </div>

          <a
            href={MLOPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#acc7ff] hover:bg-[#c4d8ff] text-[#00285b] font-semibold text-sm transition-all duration-200 cursor-pointer shadow-md inline-flex items-center justify-center gap-2 group"
          >
            <span>MLOps 기술 스택 보기</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
