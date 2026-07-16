import { notFound } from 'next/navigation';
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return createPageMetadata(lang, 'skills', {
    en: {
      title: 'Skills',
      description: 'Laboratory, research, analytical, and digital skills of Yuning Gu.',
    },
    zh: {
      title: '技能专长',
      description: '谷昱宁的实验、科研、分析与数字工具技能。',
    },
  });
}

const skills = {
  en: [
    {
      title: 'Pharmaceutical technology',
      items: ['Hot-melt extrusion', 'HPMC filament preparation', 'FDM tablet-printing research', 'Drug formulation'],
    },
    {
      title: 'Laboratory and analysis',
      items: ['HPLC', 'GC–MS', 'Spectrophotometry', 'Enzyme-inhibition assays', 'Cell culture', 'Western blot'],
    },
    {
      title: 'Research methods',
      items: ['Experimental design', 'Clinical data analysis', 'Network pharmacology', 'Molecular docking', 'Scientific writing'],
    },
    {
      title: 'Data and software',
      items: ['GraphPad Prism', 'SPSS', 'R', 'Excel', 'ChemDraw', 'Python'],
    },
  ],
  zh: [
    {
      title: '药物制剂技术',
      items: ['热熔挤出', 'HPMC 丝材制备', 'FDM 片剂打印研究', '药物制剂设计'],
    },
    {
      title: '实验与分析',
      items: ['HPLC', 'GC–MS', '分光光度法', '酶抑制实验', '细胞培养', 'Western blot'],
    },
    {
      title: '科研方法',
      items: ['实验设计', '临床数据分析', '网络药理', '分子对接', '科研写作'],
    },
    {
      title: '数据与软件',
      items: ['GraphPad Prism', 'SPSS', 'R', 'Excel', 'ChemDraw', 'Python'],
    },
  ],
} satisfies Record<Locale, Array<{ title: string; items: string[] }>>;

export default async function SkillsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <div className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">{lang === 'zh' ? '方法与工具' : 'Methods and tools'}</p>
        <h1>{lang === 'zh' ? '技能专长' : 'Skills'}</h1>
      </header>
      <div className="content-grid">
        {skills[lang].map((category) => (
          <article className="content-card" key={category.title}>
            <h2>{category.title}</h2>
            <div className="tag-list">
              {category.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
