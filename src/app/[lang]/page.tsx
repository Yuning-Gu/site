import HomePage from '@/components/home/HomePage';
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';

export default function LocalizedHomePage({ params }: { params: { lang: Locale } }) {
  if (!isValidLocale(params.lang)) notFound();
  return <HomePage lang={params.lang} />;
}
