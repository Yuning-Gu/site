import HomePage from '@/components/home/HomePage';
import { isValidLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  return <HomePage lang={lang} />;
}
