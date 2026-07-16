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
      'Outside research, I enjoy fishing, badminton, swimming, games, alternative-history fiction, electronic music, J-pop, and travelling.',
    ],
  },
  zh: {
    title: '关于我',
    intro:
      '我现就读于巴黎萨克雷大学药学院 M1 Development of Drugs and Health Products（D2HP）项目。',
    paragraphs: [
      '我的学术经历始于药物制剂与天然产物研究，目前逐步拓展至药物制剂技术、实验药理、药物递送和临床数据分析。',
      '2026 年，我在 Dr. habil. Tamás Sovány 指导下，于塞格德大学开展科研实习，研究 HPMC 基丝材热熔挤出及其用于 FDM 片剂打印的潜力。',
      '科研之外，我喜欢钓鱼、羽毛球、游泳、电子游戏、架空历史小说、电子音乐、J-pop 和旅行。',
    ],
  },
} satisfies Record<Locale, { title: string; intro: string; paragraphs: string[] }>;

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
    </div>
  );
}
