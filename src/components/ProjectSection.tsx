import workflowImg from '../assets/workflow.png';
import { ExternalLink, Award, FileText, Github, ChevronRight } from 'lucide-react';

interface ProjectSectionProps {
  onDownloadPdf?: () => void;
  isDownloading?: boolean;
}

export default function ProjectSection({ onDownloadPdf, isDownloading }: ProjectSectionProps) {
  const DACON_URL = "https://dacon.io/competitions/official/236647/talkboard/416271";
  const COLAB_URL = "https://colab.research.google.com/drive/1TjVef2eBAwm1IYPtscHrDTvd56kJGmOI?usp=sharing";
  const GITHUB_URL = "https://github.com/cromi0256/core/tree/653c6c033abd7693e8d21af2a964bb0cd3c33da3/ML/[Project01]DaconCompetitionTop11";

  return (
    <section id="project" className="pt-4 pb-12 space-y-10">
      {/* Top Header Card */}
      <div className="bg-[#181c22] border border-[#262a31] rounded-2xl p-6 md:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#262a31]/80 pb-6 mb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#acc7ff]/10 border border-[#acc7ff]/20 text-[#acc7ff] text-xs font-semibold tracking-wide">
              <span>Project 01</span>
              <span>•</span>
              <span>Machine Learning Solution</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#dfe2eb] tracking-tight mt-2">
              K리그-서울시립대 공개 AI 경진대회
            </h1>
            <p className="text-base md:text-lg text-[#8b909f] font-medium">
              검증과 통찰로 만들어낸 최적의 전략
            </p>
          </div>

          {onDownloadPdf && (
            <div className="flex-shrink-0">
              <button
                onClick={onDownloadPdf}
                disabled={isDownloading}
                className="px-5 py-2.5 rounded-lg bg-[#acc7ff] hover:bg-[#c4d8ff] text-[#00285b] font-semibold text-sm transition-all duration-200 cursor-pointer shadow-md disabled:opacity-60 flex items-center gap-2"
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
            </div>
          )}
        </div>

        {/* Workflow Diagram */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#acc7ff] uppercase">
              WORKFLOW / 프로젝트 순서도
            </span>
          </div>
          <div className="w-full rounded-xl bg-[#10141a]/90 border border-[#262a31] p-3 md:p-4 overflow-hidden group hover:border-[#acc7ff]/40 transition-colors">
            <img
              src={workflowImg}
              alt="프로젝트 순서도"
              className="w-full h-auto object-contain rounded-lg max-h-[480px] mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Grid: PROBLEM & SOLUTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PROBLEM */}
        <div className="bg-[#181c22] border border-[#262a31] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg hover:border-[#414754] transition-colors">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#ffb4ab] uppercase mb-3">
              PROBLEM
            </div>
            <h3 className="text-xl font-bold text-[#dfe2eb] mb-5">
              도메인 이해 기반 고차원 예측 문제
            </h3>
            <ul className="space-y-4 text-sm md:text-[15px] text-[#c1c6d6] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] mt-2 flex-shrink-0" />
                <span>경기 상황을 ‘이해’하고 다음 수를 예측해야 하는 고차원적인 문제</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] mt-2 flex-shrink-0" />
                <span>마지막 패스 도착 좌표(X, Y)를 예측하는 2개의 회귀 추정기 필요</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab] mt-2 flex-shrink-0" />
                <span>제공한 데이터는 공의 좌표와 선수 행동에 치중됨</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="bg-[#181c22] border border-[#262a31] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg hover:border-[#414754] transition-colors">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#acc7ff] uppercase mb-3">
              SOLUTION
            </div>
            <h3 className="text-xl font-bold text-[#dfe2eb] mb-5">
              공간위상학적 해석 및 시계열 패턴 분석
            </h3>
            <ul className="space-y-4 text-sm md:text-[15px] text-[#c1c6d6] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#acc7ff] mt-2 flex-shrink-0" />
                <span>공은 2D 좌표를 공간위상학적으로 이동하므로 삼각함수를 도입</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#acc7ff] mt-2 flex-shrink-0" />
                <span>또한 공의 흐름은 최근의 움직임(전행동, 전전행동)에 의해 크게 좌우됨</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#acc7ff] mt-2 flex-shrink-0" />
                <span>오차분석 결과 완벽한 예측이 가능한 패턴이 존재함</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Grid: MY ROLE & RESULT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MY ROLE */}
        <div className="bg-[#181c22] border border-[#262a31] rounded-2xl p-6 md:p-8 shadow-lg hover:border-[#414754] transition-colors flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#acc7ff] uppercase mb-3">
              MY ROLE
            </div>
            <h3 className="text-xl font-bold text-[#dfe2eb] mb-4">
              1인 팀 엔드투엔드 주도
            </h3>
            <p className="text-[#c1c6d6] text-sm md:text-[15px] leading-relaxed mb-6">
              1인 팀으로 데이터 분석, 모델 개발, 모델 평가를 모두 담당
            </p>
          </div>

          <div className="pt-4 border-t border-[#262a31]">
            <span className="text-xs text-[#8b909f] font-mono uppercase block mb-2">Tech Stack Used</span>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Pandas', 'AutoML', 'Matplotlib'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[#10141a] border border-[#31353c] text-xs md:text-sm font-semibold text-[#dfe2eb]"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RESULT */}
        <div className="bg-[#181c22] border border-[#262a31] rounded-2xl p-6 md:p-8 shadow-lg hover:border-[#414754] transition-colors flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#acc7ff] uppercase mb-3">
              RESULT
            </div>
            <h3 className="text-xl font-bold text-[#dfe2eb] mb-4">
              성과와 결과물 링크
            </h3>

            {/* Award highlight */}
            <div className="bg-[#10141a]/80 border border-[#acc7ff]/30 rounded-xl p-4 mb-5 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#acc7ff]/10 flex items-center justify-center text-[#acc7ff] flex-shrink-0 mt-0.5">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#8b909f] uppercase tracking-wider block font-mono">
                  Final Achievement
                </span>
                <p className="text-sm md:text-base font-bold text-[#dfe2eb] mt-0.5">
                  Public 19등 &gt; Private 15등 &gt; 최종 11위 장려상
                </p>
                <span className="text-xs text-[#8b909f] block mt-0.5">
                  (총 참가팀 937팀)
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#262a31] flex flex-wrap gap-3">
            <a
              href={DACON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#10141a] hover:bg-[#acc7ff]/10 border border-[#31353c] hover:border-[#acc7ff] text-xs md:text-sm font-medium text-[#dfe2eb] hover:text-[#acc7ff] transition-all"
            >
              <ExternalLink className="w-4 h-4 text-[#acc7ff]" />
              <span>데이콘 링크</span>
            </a>

            <a
              href={COLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#10141a] hover:bg-[#acc7ff]/10 border border-[#31353c] hover:border-[#acc7ff] text-xs md:text-sm font-medium text-[#dfe2eb] hover:text-[#acc7ff] transition-all"
            >
              <FileText className="w-4 h-4 text-[#acc7ff]" />
              <span>시현 코드</span>
            </a>
          </div>
        </div>
      </div>

      {/* RETROSPECTIVE */}
      <div className="bg-[#181c22] border border-[#262a31] rounded-2xl p-6 md:p-8 shadow-lg hover:border-[#414754] transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#262a31] pb-4 mb-5">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#acc7ff] uppercase">
              RETROSPECTIVE
            </div>
            <h3 className="text-xl font-bold text-[#dfe2eb] mt-1">
              회고 및 발전 방향
            </h3>
          </div>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#acc7ff] hover:bg-[#c4d8ff] text-[#00285b] font-semibold text-xs md:text-sm transition-all shadow-md group cursor-pointer self-start md:self-auto"
          >
            <Github className="w-4 h-4" />
            <span>GitHub 링크</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="space-y-3 text-sm md:text-base text-[#c1c6d6] leading-relaxed">
          <p>
            최종 제출을 두고 버전관리가 제대로 되지않아 어려움을 겪게 됨
          </p>
          <p>
            이후 MLOps를 접하게 되며 단순 모델 개발뿐만이 아닌 모델 운영으로 관심을 가지며 성장하는 동력이 되었음
          </p>
        </div>
      </div>
    </section>
  );
}
