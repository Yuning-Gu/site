import { notFound } from 'next/navigation';
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { createPageMetadata } from '@/lib/metadata';
import { pageLabels, profile } from '@/lib/site-content';

export function generateMetadata({ params }: { params: { lang: string } }) {
  return createPageMetadata(params.lang, 'contact', {
    en: {
      title: 'Contact',
      description: 'Contact Yuning Gu for academic exchange and research collaboration.',
    },
    zh: {
      title: '联系方式',
      description: '联系谷昱宁，进行学术交流或探讨科研合作。',
    },
  });
}

export default function ContactPage({ params }: { params: { lang: Locale } }) {
  if (!isValidLocale(params.lang)) notFound();
  const label = pageLabels[params.lang];

  return (
    <div className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">{params.lang === 'zh' ? '交流与合作' : 'Exchange and collaboration'}</p>
        <h1>{label.contact}</h1>
        <p>{label.contactIntro}</p>
      </header>

      <div className="contact-grid">
        <section className="contact-card">
          <h2>{params.lang === 'zh' ? '学术联系' : 'Academic contact'}</h2>
          <div className="contact-detail">
            <span>{label.email}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-detail">
            <span>{label.affiliation}</span>
            <strong>
              {params.lang === 'zh'
                ? '巴黎萨克雷大学药学院'
                : 'Faculty of Pharmacy, Université Paris-Saclay'}
            </strong>
          </div>
          <div className="contact-detail">
            <span>{label.programme}</span>
            <strong>M1 Development of Drugs and Health Products (D2HP)</strong>
          </div>
        </section>

        <section className="contact-card">
          <h2>{label.profiles}</h2>
          <div className="contact-detail">
            <span>ORCID</span>
            <a href={profile.orcid} target="_blank" rel="noreferrer">
              0009-0003-2561-8122 ↗
            </a>
          </div>
          <div className="contact-detail">
            <span>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              yuninggu2002 ↗
            </a>
          </div>
          <div className="contact-detail">
            <span>ResearchGate</span>
            <a href={profile.researchGate} target="_blank" rel="noreferrer">
              Yuning Gu ↗
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
