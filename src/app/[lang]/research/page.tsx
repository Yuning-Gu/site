import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n/config';
import { createPageMetadata } from '@/lib/metadata';
import { homeContent, pageLabels } from '@/lib/site-content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return createPageMetadata(lang, 'research', {
    en: {
      title: 'Research',
      description:
        'Research interests in pharmaceutical technology, metabolic and cardiovascular health, natural products, and drug delivery.',
    },
    zh: {
      title: '研究方向',
      description: '谷昱宁在药物制剂技术、代谢与心血管健康、天然产物和药物递送方面的研究。',
    },
  });
}

export default async function ResearchPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const content = homeContent[lang];
  const label = pageLabels[lang];

  return (
    <div className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">{lang === 'zh' ? '交叉药物科学' : 'Interdisciplinary pharmaceutical science'}</p>
        <h1>{label.research}</h1>
        <p>{content.focusIntro}</p>
      </header>

      <div className="content-grid">
        {content.focusAreas.map((area) => (
          <article className="content-card" key={area.number}>
            <span className="meta">{area.number}</span>
            <h2>{area.title}</h2>
            <p>{area.text}</p>
          </article>
        ))}
        <article className="content-card">
          <span className="meta">2026 · University of Szeged</span>
          <h2>
            {lang === 'zh'
              ? 'HPMC 基丝材热熔挤出与 FDM 片剂打印'
              : 'Hot-melt extrusion of HPMC filaments for FDM tablet printing'}
          </h2>
          <p>
            {lang === 'zh'
              ? '在 Dr. habil. Tamás Sovány 指导下，于塞格德大学药学院药物制剂技术与药事管理研究所开展科研实习。'
              : 'Research internship at the Institute of Pharmaceutical Technology and Regulatory Affairs under the supervision of Dr. habil. Tamás Sovány.'}
          </p>
          <div className="tag-list">
            {['HPMC', 'Hot-melt extrusion', 'FDM'].map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
