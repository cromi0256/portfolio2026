import BrainLogo from './BrainLogo';

interface HeroSectionProps {
  onDownloadPdf: () => void;
  isDownloading?: boolean;
}

export default function HeroSection({ onDownloadPdf, isDownloading }: HeroSectionProps) {
  const GITHUB_PROJECT_URL = "https://github.com/cromi0256/cromi0256";

  return (
    <section id="home" className="pt-8 pb-12">
      <div className="bg-[#181c22] border border-[#262a31] rounded-2xl p-8 md:p-10 shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: Graphic Card */}
          <div className="flex-shrink-0 w-full md:w-72 flex justify-center">
            <BrainLogo className="w-52 h-52 md:w-56 md:h-56" />
          </div>

          {/* Right: Content */}
          <div className="flex-1 space-y-6 text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[#dfe2eb] tracking-tight leading-tight">
              AI 시대에서의 데이터과학자
            </h1>
            
            <p className="text-[#c1c6d6] text-base md:text-[17px] leading-relaxed font-normal">
              AI 코딩 도구의 도입으로 개발자들은 새로운 국면을 맞이하고 있습니다. 몇 줄의 프롬프트로 사람을 능가하는 생산성을 가져오지만, 궁극적론 과정의 불투명성을 초래합니다. 이에 실용적인 접근방식으로 데이터 과학이 지닌 잠재력을 깨웁니다.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onDownloadPdf}
                disabled={isDownloading}
                className="px-6 py-3 rounded-lg bg-[#acc7ff] hover:bg-[#c4d8ff] text-[#00285b] font-semibold text-sm transition-all duration-200 cursor-pointer shadow-md disabled:opacity-60 flex items-center gap-2"
              >
                {isDownloading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#00285b] border-t-transparent rounded-full animate-spin"></span>
                    <span>PDF 생성 중...</span>
                  </>
                ) : (
                  <span>페이지 다운로드</span>
                )}
              </button>

              <a
                href={GITHUB_PROJECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-transparent border border-[#414754] hover:border-[#acc7ff] hover:bg-white/5 text-[#dfe2eb] hover:text-white font-semibold text-sm transition-all duration-200 cursor-pointer inline-flex items-center justify-center"
              >
                프로젝트 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
