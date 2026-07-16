import type { Locale } from '@/lib/i18n/config';
import { profile } from '@/lib/site-content';
import SiteHeader from './SiteHeader';

export default function SiteFrame({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <div className="site-frame">
      <SiteHeader lang={lang} />
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div>
          <strong>{profile.name}</strong>
          <span>
            {lang === 'zh'
              ? '药物科学 · 制剂技术 · 临床研究'
              : 'Pharmaceutical sciences · Drug delivery · Clinical research'}
          </span>
        </div>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <small>© {new Date().getFullYear()} Yuning Gu</small>
      </footer>
    </div>
  );
}
