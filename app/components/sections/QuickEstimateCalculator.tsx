'use client'

import { useMemo, useState } from 'react'

type QuestionKey = 'projectType' | 'goal' | 'scope' | 'readiness' | 'timeline'

type Option = {
  value: string
  label: string
  hint: string
}

type Question = {
  key: QuestionKey
  title: string
  options: Option[]
}

type AnswerMap = Partial<Record<QuestionKey, string>>

const QUESTIONS: Question[] = [
  {
    key: 'projectType',
    title: 'Что нужно запустить?',
    options: [
      { value: 'landing', label: 'Лендинг', hint: 'Быстрый запуск под оффер' },
      { value: 'corporate', label: 'Корпоративный сайт', hint: 'С разделами и структурой' },
      { value: 'store', label: 'Интернет-магазин', hint: 'Каталог и оформление заказов' },
      { value: 'webapp', label: 'Веб-сервис', hint: 'Логика, роли и сценарии' },
      { value: 'unsure', label: 'Пока не уверен(а)', hint: 'Поможем выбрать формат' },
    ],
  },
  {
    key: 'goal',
    title: 'Какая основная задача?',
    options: [
      { value: 'leads', label: 'Лиды и заявки', hint: 'Конверсия и поток обращений' },
      { value: 'sales', label: 'Продажи', hint: 'Продуктовый фокус и воронка' },
      { value: 'brand', label: 'Имидж и презентация', hint: 'Доверие и позиционирование' },
      { value: 'ops', label: 'Автоматизация процессов', hint: 'Экономия времени команды' },
    ],
  },
  {
    key: 'scope',
    title: 'Оцените объём проекта',
    options: [
      { value: 'small', label: '1–3 страницы', hint: 'Компактный MVP' },
      { value: 'medium', label: '4–8 страниц', hint: 'Типовой корпоративный объём' },
      { value: 'large', label: '9+ страниц', hint: 'Расширенная структура' },
      { value: 'account', label: 'Нужен личный кабинет', hint: 'Роли, доступы, сценарии' },
    ],
  },
  {
    key: 'readiness',
    title: 'Что уже готово?',
    options: [
      { value: 'full', label: 'Есть структура и тексты', hint: 'Можно стартовать сразу' },
      { value: 'texts', label: 'Есть только тексты', hint: 'Поможем собрать структуру' },
      { value: 'idea', label: 'Есть только идея', hint: 'Нужен полный цикл' },
      { value: 'turnkey', label: 'Нужно под ключ', hint: 'От стратегии до релиза' },
    ],
  },
  {
    key: 'timeline',
    title: 'Когда нужен запуск?',
    options: [
      { value: 'urgent', label: 'Срочно (до 2 недель)', hint: 'Приоритетное производство' },
      { value: 'month', label: 'В течение месяца', hint: 'Стандартный быстрый слот' },
      { value: 'quarter', label: '1–2 месяца', hint: 'Комфортный ритм и итерации' },
      { value: 'flex', label: 'Без жёсткого дедлайна', hint: 'Можно оптимизировать бюджет' },
    ],
  },
]

const BASE_BY_PROJECT = {
  landing: { min: 140000, max: 260000, weeksMin: 2, weeksMax: 4 },
  corporate: { min: 260000, max: 480000, weeksMin: 4, weeksMax: 8 },
  store: { min: 380000, max: 760000, weeksMin: 6, weeksMax: 12 },
  webapp: { min: 650000, max: 1400000, weeksMin: 8, weeksMax: 18 },
  unsure: { min: 220000, max: 440000, weeksMin: 3, weeksMax: 7 },
} as const

const GOAL_ADD = {
  leads: { min: 0, max: 40000, weeksMin: 0, weeksMax: 1 },
  sales: { min: 70000, max: 180000, weeksMin: 1, weeksMax: 2 },
  brand: { min: 30000, max: 120000, weeksMin: 1, weeksMax: 2 },
  ops: { min: 120000, max: 300000, weeksMin: 2, weeksMax: 4 },
} as const

const SCOPE_ADD = {
  small: { min: 0, max: 0, weeksMin: 0, weeksMax: 0 },
  medium: { min: 60000, max: 140000, weeksMin: 1, weeksMax: 2 },
  large: { min: 140000, max: 320000, weeksMin: 2, weeksMax: 5 },
  account: { min: 240000, max: 600000, weeksMin: 3, weeksMax: 7 },
} as const

const READINESS_ADD = {
  full: { min: 0, max: 0, weeksMin: 0, weeksMax: 0 },
  texts: { min: 25000, max: 90000, weeksMin: 1, weeksMax: 2 },
  idea: { min: 90000, max: 240000, weeksMin: 2, weeksMax: 4 },
  turnkey: { min: 120000, max: 320000, weeksMin: 2, weeksMax: 5 },
} as const

const TIMELINE_MULTIPLIER = {
  urgent: { cost: 1.25, weeksShift: -1 },
  month: { cost: 1.08, weeksShift: 0 },
  quarter: { cost: 1, weeksShift: 0 },
  flex: { cost: 0.93, weeksShift: 1 },
} as const

const numberFmt = new Intl.NumberFormat('ru-RU')

const toReadableMoney = (value: number) => `${numberFmt.format(value)} ₽`
const roundTo10k = (value: number) => Math.max(50000, Math.round(value / 10000) * 10000)
const clampWeeks = (value: number) => Math.max(1, value)

type Estimate = {
  min: number
  max: number
  weeksMin: number
  weeksMax: number
}

function getEstimate(answers: AnswerMap): Estimate | null {
  const projectType = answers.projectType as keyof typeof BASE_BY_PROJECT | undefined
  const goal = answers.goal as keyof typeof GOAL_ADD | undefined
  const scope = answers.scope as keyof typeof SCOPE_ADD | undefined
  const readiness = answers.readiness as keyof typeof READINESS_ADD | undefined
  const timeline = answers.timeline as keyof typeof TIMELINE_MULTIPLIER | undefined

  if (!projectType || !goal || !scope || !readiness || !timeline) {
    return null
  }

  const base = BASE_BY_PROJECT[projectType]
  const goalAdd = GOAL_ADD[goal]
  const scopeAdd = SCOPE_ADD[scope]
  const readinessAdd = READINESS_ADD[readiness]
  const timelineMul = TIMELINE_MULTIPLIER[timeline]

  const rawMin = base.min + goalAdd.min + scopeAdd.min + readinessAdd.min
  const rawMax = base.max + goalAdd.max + scopeAdd.max + readinessAdd.max

  return {
    min: roundTo10k(rawMin * timelineMul.cost),
    max: roundTo10k(rawMax * timelineMul.cost),
    weeksMin: clampWeeks(base.weeksMin + goalAdd.weeksMin + scopeAdd.weeksMin + readinessAdd.weeksMin + timelineMul.weeksShift),
    weeksMax: clampWeeks(base.weeksMax + goalAdd.weeksMax + scopeAdd.weeksMax + readinessAdd.weeksMax + timelineMul.weeksShift),
  }
}

type Props = {
  telegramUrl?: string
  email?: string
}

export function QuickEstimateCalculator({
  telegramUrl = 'https://t.me/afterflow_studio',
  email = 'hello@afterflow.studio',
}: Props) {
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<AnswerMap>({})

  const isResultStep = stepIndex >= QUESTIONS.length
  const progress = Math.min(100, Math.round((stepIndex / QUESTIONS.length) * 100))
  const current = QUESTIONS[stepIndex]
  const estimate = useMemo(() => getEstimate(answers), [answers])

  const summaryLines = useMemo(() => {
    return QUESTIONS.map((question) => {
      const selected = question.options.find((option) => option.value === answers[question.key])
      return selected ? `${question.title}: ${selected.label}` : null
    }).filter(Boolean) as string[]
  }, [answers])

  const messageForContact = useMemo(() => {
    if (!estimate) return ''
    const lines = [
      'Хочу обсудить проект.',
      `Оценка: ${toReadableMoney(estimate.min)} - ${toReadableMoney(estimate.max)}`,
      `Срок: ${estimate.weeksMin}-${estimate.weeksMax} недель`,
      ...summaryLines,
    ]
    return lines.join('\n')
  }, [estimate, summaryLines])

  const mailHref = `mailto:${email}?subject=${encodeURIComponent('Запрос по проекту')}&body=${encodeURIComponent(messageForContact)}`

  const selectOption = (questionKey: QuestionKey, optionValue: string) => {
    setAnswers((prev) => ({ ...prev, [questionKey]: optionValue }))
    setStepIndex((prev) => prev + 1)
  }

  const goBack = () => {
    setStepIndex((prev) => Math.max(0, prev - 1))
  }

  const restart = () => {
    setAnswers({})
    setStepIndex(0)
  }

  return (
    <section className="section">
      <div className="container inverted quick-calc">
        <div className="flex items-center gap-2 mb-2">
          <div className="button__dot fill" />
          <h2 className="heading-sm uppercase font-light quick-calc__title">Калькулятор проекта</h2>
        </div>
        <p className="heading quick-calc__subtitle">Без формы и заявок: сразу покажем ориентир</p>
        <div className="quick-calc__line" aria-hidden="true" />

        {!isResultStep && current && (
          <div className="quick-calc__content">
            <div className="quick-calc__progress-wrap">
              <p className="quick-calc__step-label">Шаг {stepIndex + 1} из {QUESTIONS.length}</p>
              <div className="quick-calc__progress-track">
                <div className="quick-calc__progress-fill transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <h3 className="heading-lg quick-calc__question">{current.title}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 quick-calc__options">
              {current.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectOption(current.key, option.value)}
                  className="quick-calc__option"
                >
                  <p className="quick-calc__option-title">{option.label}</p>
                  <p className="quick-calc__option-hint">{option.hint}</p>
                </button>
              ))}
            </div>

            {stepIndex > 0 && (
              <button type="button" onClick={goBack} className="quick-calc__back">
                <span aria-hidden="true">←</span>
                <span>Назад</span>
              </button>
            )}
          </div>
        )}

        {isResultStep && estimate && (
          <div className="quick-calc__result">
            <p className="quick-calc__result-eyebrow">Предварительная оценка</p>
            <h3 className="heading-2xl quick-calc__result-price">
              {toReadableMoney(estimate.min)} - {toReadableMoney(estimate.max)}
            </h3>
            <p className="heading quick-calc__result-time">Срок: {estimate.weeksMin}-{estimate.weeksMax} недель</p>

            <div className="quick-calc__result-grid">
              <div className="quick-calc__result-card">
                <p className="quick-calc__result-card-title">Что учтено</p>
                <div className="quick-calc__result-list">
                  {summaryLines.map((line) => (
                    <p key={line} className="quick-calc__result-line">{line}</p>
                  ))}
                </div>
              </div>

              <div className="quick-calc__result-card">
                <p className="quick-calc__result-card-title">Что дальше</p>
                <div className="quick-calc__result-list">
                  <p className="quick-calc__result-line">1. Пишешь нам в Telegram</p>
                  <p className="quick-calc__result-line">2. Уточняем 3 ключевых вопроса</p>
                  <p className="quick-calc__result-line">3. Даём точную смету и этапы</p>
                </div>
              </div>
            </div>

            <div className="quick-calc__cta-row">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--secondary quick-calc__cta"
              >
                <span>Написать в Telegram</span>
                <span className="button__dot" aria-hidden="true" />
              </a>
              <a href={mailHref} className="button button--secondary quick-calc__cta">
                <span>Написать на почту</span>
              </a>
              <button type="button" onClick={restart} className="quick-calc__back quick-calc__restart">
                <span>Пройти заново</span>
                <span className="quick-calc__restart-icon" aria-hidden="true">↻</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
