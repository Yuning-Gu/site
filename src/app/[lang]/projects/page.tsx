import { notFound } from 'next/navigation';
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { createPageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return createPageMetadata(lang, 'projects', {
    en: {
      title: 'Projects',
      description: 'Selected pharmaceutical research and innovation projects by Yuning Gu.',
    },
    zh: {
      title: '项目经历',
      description: '谷昱宁参与的药物研究与创新项目。',
    },
  });
}

const projects = {
  en: [
    {
      period: '2026',
      title: 'HPMC-Based Filaments for Potential FDM Tablet Printing',
      role: 'Research Intern · University of Szeged',
      description:
        'Research on the hot-melt extrusion of HPMC-based filaments and their potential suitability for fused deposition modeling of tablets.',
      tags: ['Hot-melt extrusion', 'HPMC', 'FDM'],
    },
    {
      period: '2023–2024',
      title: 'Peony Bark–Dang Gui Formula Microparticles',
      role: 'Research team member',
      description:
        'Development of sustained-release microparticles combining peony bark extract and a traditional formula, supported by HPLC and GC–MS analysis.',
      tags: ['Drug delivery', 'HPLC', 'Natural products'],
    },
    {
      period: '2022–2023',
      title: 'Herbal Health Beverage Innovation',
      role: 'Project lead',
      description:
        'Product and brand development for food-grade herbal beverages combining traditional ingredients with contemporary health communication.',
      tags: ['Product design', 'TCM', 'Entrepreneurship'],
    },
  ],
  zh: [
    {
      period: '2026',
      title: '用于潜在 FDM 片剂打印的 HPMC 基丝材',
      role: '科研实习生 · 塞格德大学',
      description: '研究 HPMC 基丝材的热熔挤出工艺及其用于熔融沉积成型片剂打印的潜力。',
      tags: ['热熔挤出', 'HPMC', 'FDM'],
    },
    {
      period: '2023–2024',
      title: '复方丹皮当归缓释微粒',
      role: '研究团队成员',
      description: '结合牡丹皮提取物与传统方剂开发缓释微粒，并运用 HPLC 与 GC–MS 开展分析。',
      tags: ['药物递送', 'HPLC', '天然产物'],
    },
    {
      period: '2022–2023',
      title: '中药健康饮品创新',
      role: '项目负责人',
      description: '围绕药食同源原料开展产品与品牌设计，将传统成分与现代健康传播相结合。',
      tags: ['产品设计', '中医药', '创新创业'],
    },
  ],
} satisfies Record<
  Locale,
  Array<{ period: string; title: string; role: string; description: string; tags: string[] }>
>;

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  return (
    <div className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">{lang === 'zh' ? '研究与创新' : 'Research and innovation'}</p>
        <h1>{lang === 'zh' ? '项目经历' : 'Projects'}</h1>
      </header>
      <div className="stack-list">
        {projects[lang].map((project) => (
          <article className="content-card" key={project.title}>
            <time>{project.period}</time>
            <h2>{project.title}</h2>
            <p className="organization">{project.role}</p>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
