import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { locales, isValidLocale, Locale } from '@/lib/i18n/config'
import { notFound } from 'next/navigation'
// import dynamic from 'next/dynamic' // 不再需要
import NavigationBar from '@/components/common/NavigationBar' // 恢复路径别名
import ClientOnlyWrapper from '@/components/common/ClientOnlyWrapper' // 导入包装器

// const NavigationBar = dynamic(() => import('@/components/common/NavigationBar'), {
//   ssr: false,
// })

// Force static generation for this segment
export const dynamic = 'force-static';

const inter = Inter({ subsets: ['latin'] })

// Function to generate static paths for supported locales
export async function generateStaticParams() {
  return locales.map((locale: Locale) => ({
    lang: locale,
  }));
}

// Metadata can still be defined here if needed for specific language routes
// export const metadata: Metadata = { ... }

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  if (!isValidLocale(params.lang)) {
    notFound()
  }

  return (
    <div className="relative flex flex-col flex-grow">
      <ClientOnlyWrapper>
        <NavigationBar lang={params.lang} />
      </ClientOnlyWrapper>
      <main className="mt-28 p-4 md:p-6 lg:p-8 flex-grow">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg p-5 md:p-7 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
} 