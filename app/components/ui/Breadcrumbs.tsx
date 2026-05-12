'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const labels: Record<string, string> = {
  about: 'О нас',
  services: 'Услуги',
  development: 'Разработка',
  nocode: 'Конструкторы',
  code: 'Код',
  design: 'Дизайн',
  websites: 'Сайты',
  apps: 'Приложения',
  print: 'Полиграфия',
  books: 'Книги и гайды',
  automation: 'Автоматизация',
  contact: 'Контакты',
  work: 'Работы',
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const crumbs = [
    { label: 'Главная', href: '/' },
    ...segments.map((seg, i) => ({
      label: labels[seg] ?? seg,
      href: '/' + segments.slice(0, i + 1).join('/'),
    })),
  ]

  return (
    <nav aria-label="breadcrumb" className="mb-3 flex items-center gap-2">
      <div className="button__dot" />
      <ol className="heading-xs uppercase flex items-center gap-2">
        {crumbs.map((crumb, i) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {i !== 0 && <span className="opacity-40">/</span>}
            {i === crumbs.length - 1 ? (
              <span className="opacity-50">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:opacity-70 transition-opacity">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}