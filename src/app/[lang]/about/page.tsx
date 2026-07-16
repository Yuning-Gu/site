import { notFound } from 'next/navigation';
import Image from 'next/image';
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { createPageMetadata } from '@/lib/metadata';
import { profile } from '@/lib/site-content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return createPageMetadata(lang, 'about', {
    en: {
      title: 'About',
      description: 'Background, interests, and academic journey of Yuning Gu.',
    },
    zh: {
      title: '关于我',
      description: '谷昱宁的学术背景、研究兴趣与个人经历。',
    },
  });
}

const copy = {
  en: {
    title: 'About me',
    intro:
      'I am an M1 student in Development of Drugs and Health Products (D2HP) at the Faculty of Pharmacy, Université Paris-Saclay.',
    paragraphs: [
      'My academic path began in pharmaceutic preparations and natural-product research. It now spans pharmaceutical technology, experimental pharmacology, drug delivery, and clinical data analysis.',
      'In 2026, I undertook a research internship at the University of Szeged with Dr. habil. Tamás Sovány, investigating hot-melt extrusion of HPMC-based filaments for potential FDM tablet printing.',
    ],
    beyondEyebrow: 'Beyond research',
    beyondTitle: 'A few things that keep me curious.',
    beyondIntro:
      'Outside the laboratory, I value activities that create space for observation, movement, imagination, and new perspectives.',
    interests: [
      {
        title: 'Fishing',
        label: 'Outdoors',
        text: 'Fishing gives me a slower rhythm outside the laboratory and a quiet way to observe changing natural environments.',
      },
      {
        title: 'Badminton & swimming',
        label: 'Movement',
        text: 'Both help me reset, stay consistent, and return to research with a clearer mind.',
      },
      {
        title: 'Travel',
        label: 'Perspective',
        text: 'I enjoy discovering cities through their everyday spaces, food, museums, and local ways of life.',
      },
      {
        title: 'Games & alternative history',
        label: 'Systems & stories',
        text: 'Strategy games and alternative-history fiction let me explore complex systems and imagine how small choices reshape larger outcomes.',
      },
      {
        title: 'Electronic music & J-pop',
        label: 'Listening',
        text: 'Music is part of my daily rhythm, from focused study sessions to long journeys between cities.',
      },
    ],
  },
  zh: {
    title: '关于我',
    intro:
      '我现就读于巴黎萨克雷大学药学院 M1 Development of Drugs and Health Products（D2HP）项目。',
    paragraphs: [
      '我的学术经历始于药物制剂与天然产物研究，目前逐步拓展至药物制剂技术、实验药理、药物递送和临床数据分析。',
      '2026 年，我在 Dr. habil. Tamás Sovány 指导下，于塞格德大学开展科研实习，研究 HPMC 基丝材热熔挤出及其用于 FDM 片剂打印的潜力。',
    ],
    beyondEyebrow: '研究之外',
    beyondTitle: '让我保持好奇的日常。',
    beyondIntro:
      '离开实验室后，我喜欢通过观察、运动、想象和旅行，为日常生活保留不同的节奏与视角。',
    interests: [
      {
        title: '钓鱼',
        label: '户外',
        text: '钓鱼让我放慢节奏，也让我在安静的等待中观察水域、天气与自然环境的细微变化。',
      },
      {
        title: '羽毛球与游泳',
        label: '运动',
        text: '规律的运动帮助我恢复专注、保持状态，并以更清晰的思路回到学习与研究中。',
      },
      {
        title: '旅行',
        label: '视角',
        text: '我喜欢通过城市空间、食物、博物馆和当地人的日常生活认识一个新的地方。',
      },
      {
        title: '电子游戏与架空历史',
        label: '系统与故事',
        text: '策略游戏和架空历史小说让我探索复杂系统，也让我思考微小选择如何改变更大的历史走向。',
      },
      {
        title: '电子音乐与 J-pop',
        label: '聆听',
        text: '音乐构成了我的日常节奏，无论是专注学习，还是在不同城市之间旅行。',
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    title: string;
    intro: string;
    paragraphs: string[];
    beyondEyebrow: string;
    beyondTitle: string;
    beyondIntro: string;
    interests: Array<{ title: string; label: string; text: string }>;
  }
>;

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const content = copy[lang];

  return (
    <div className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">{profile.name}</p>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
      </header>

      <div className="contact-grid">
        <div className="profile-card">
          <div className="portrait-wrap">
            <Image
              src="/images/avatar.webp"
              width="416"
              height="416"
              alt={`${profile.name} portrait`}
              sizes="(max-width: 720px) 72vw, 416px"
            />
          </div>
          <div className="profile-card-copy">
            <p className="card-label">Yuning Gu · 谷昱宁</p>
            <p>{lang === 'zh' ? '药物科学 · 制剂技术 · 临床研究' : 'Pharmaceutical sciences · Formulation · Clinical research'}</p>
          </div>
        </div>
        <article className="contact-card">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>

      <section className="interests-section" aria-labelledby="interests-title">
        <div className="section-heading interests-heading">
          <div>
            <p className="eyebrow">{content.beyondEyebrow}</p>
            <h2 id="interests-title">{content.beyondTitle}</h2>
          </div>
          <p>{content.beyondIntro}</p>
        </div>

        <div className="interests-grid">
          {content.interests.map((interest, index) => (
            <article
              className={`interest-card ${index === 0 ? 'interest-card-featured' : ''}`}
              key={interest.title}
            >
              <div className="interest-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{interest.label}</span>
              </div>
              <h3>{interest.title}</h3>
              <p>{interest.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
