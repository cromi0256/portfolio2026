import { SkillCard } from '../types';

const skillCards: SkillCard[] = [
  {
    id: 'transparent-explanation',
    title: '신뢰할 수 있는 투명한 설명',
    description:
      '모델이 어떻게 작동하는지 이해할 수 없으면 개선할 수 없고 신뢰를 잃습니다. 신뢰는 결정에 확신을 주며, 결과에 책임감을 부여합니다. 모델이 결과에 미치는 과정을 밝힘으로써 비즈니스 가치를 발굴해 나갑니다.',
    tags: ['#데이터 분석', '#시각화', '#SHAP'],
  },
  {
    id: 'cutting-edge-tech',
    title: '최전선의 기술과 안정적인 적용',
    description:
      'AI 기술은 날마다 발전하고 있으며 정보는 빠르게 바뀌어가고 있습니다. 책과 LLM 모델이 제안하는 코드는 현재와 맞지 않을 수 있으며, 노후화된 코드는 기술 부채를 초래할 수 있습니다. 최신의 변화에 유연하게 대처하여 전략적 우위를 점합니다.',
    tags: ['#버전관리', '#CI/CD', '#TabFM'],
  },
  {
    id: 'field-reflected-solution',
    title: '현장을 반영한 최적의 솔루션',
    description:
      '먼저, 가설을 통한 실험 추적으로 과학적인 검증을 거칩니다. 문제가 정의되면 모델 성능, 추론 속도, 서빙 환경을 고려한 합리적인 모델을 제안합니다. 데이터의 특성을 반영한 설계로 타당성과 효율성을 가져옵니다.',
    tags: ['#특성공학', '#실험 추적', '#모델 튜닝'],
  },
  {
    id: 'integrated-knowledge',
    title: '통합적인 관리와 계승되는 지식',
    description:
      '오직 한번만 쓰일듯이 코드를 설계하지 않습니다. 배포 이후에도 기능 개선과 오류 해결은 간편해야 하며, 다른 업무중에도 흐름이 끊겨서는 안됩니다. 사람이 떠나면 코드도 떠나는 것은 아니며, 경험의 축적으로 추후 투자의 손실을 줄입니다.',
    tags: ['#MLOps', '#문서화', '#거버넌스'],
  },
];

export default function ExpertiseSection() {
  return (
    <section id="skills" className="py-12 border-t border-[#262a31]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#dfe2eb] tracking-tight">
            AI가 대체할 수 없는 스킬
          </h2>
          <p className="text-sm md:text-base text-[#8b909f] mt-1">
            토큰이 확실시하는 것은 비용 청구서뿐
          </p>
        </div>
        <div className="text-xs font-mono font-semibold tracking-wider text-[#acc7ff] uppercase">
          02 / EXPERTISE
        </div>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCards.map((card) => (
          <div
            key={card.id}
            className="bg-[#181c22] border border-[#262a31] rounded-xl p-6 md:p-7 flex flex-col justify-between hover:border-[#414754] transition-colors duration-200"
          >
            <div className="space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-[#dfe2eb]">
                {card.title}
              </h3>
              <p className="text-[#c1c6d6] text-sm md:text-[15px] leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-6 mt-auto">
              {card.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-bold text-xs md:text-sm text-[#dfe2eb]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
