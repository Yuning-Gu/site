import { notFound } from 'next/navigation';
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { createPageMetadata } from '@/lib/metadata';
import { education, pageLabels } from '@/lib/site-content';

export function generateMetadata({ params }: { params: { lang: string } }) {
  return createPageMetadata(params.lang, 'education', {
    en: {
      title: 'Education',
      description: 'Education and interdisciplinary training in pharmaceutical sciences and technology.',
    },
    zh: {
      title: '教育背景',
      description: '谷昱宁在药物科学、药剂学与技术领域的教育及跨学科学习经历。',
    },
  });
}

export default function EducationPage({ params }: { params: { lang: Locale } }) {
  if (!isValidLocale(params.lang)) notFound();
  const label = pageLabels[params.lang];

  return (
    <div className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">{params.lang === 'zh' ? '学习路径' : 'Academic path'}</p>
        <h1>{label.education}</h1>
        <p>
          {params.lang === 'zh'
            ? '从药物制剂本科训练，到全英文国际药物科学项目，逐步拓展至药物研发与健康产品开发。'
            : 'A path from undergraduate pharmaceutics training to international, interdisciplinary study in drug development and health products.'}
        </p>
      </header>

      <div className="stack-list">
        {education[params.lang].map((item) => (
          <article className="content-card" key={`${item.degree}-${item.period}`}>
            <time>{item.period}</time>
            <h2>{item.degree}</h2>
            <p className="organization">{item.school}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
