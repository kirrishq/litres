'use client'

import { useEffect, useMemo, useState } from 'react'
import { NeuroBackground } from '../effects/NeuroBackground'
import { Tag } from '../ui/Tag'
import { HeroContactCard } from '../cards/HeroContactCard'
import { Button } from '../ui/Button'

const words = ['Афтэрфлоу эдженси', 'Afterflow agency']

export function HeroSectionHome() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const currentWord = useMemo(() => words[wordIndex], [wordIndex])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (media.matches) {
      setDisplayedText('Афтэрфлоу эдженси / Afterflow agency')
      return
    }

    const typingSpeed = isDeleting ? 45 : 85
    const pauseBeforeDelete = 1400
    const pauseBeforeNextWord = 250

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
    } else if (isDeleting && displayedText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }, pauseBeforeNextWord)
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.slice(0, displayedText.length - 1)
          : currentWord.slice(0, displayedText.length + 1)

        setDisplayedText(nextText)
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [currentWord, displayedText, isDeleting])

  return (
    <section className='section'>
      <div className='container flex flex-col justify-end mb-4 mt-[-12px]'>
        <div className='home-header_card'>
          <div className='overlay-neuro'></div>
          <NeuroBackground />

          <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 md:gap-4 z-2'>
            <Tag label='Дизайн' variant='dark' />
            <Tag label='Разработка' variant='dark' />
            <Tag label='Сайты' variant='dark' />
            <Tag label='Приложения' variant='dark' />
            <Tag label='Автоматизация' variant='dark' />
            <Tag label='Чат-боты' variant='dark' />
          </div>

          <div className='flex flex-col flex-1 md:flex-row justify-between items-start md:items-end gap-4 z-2'>
            <div>
              <p className='heading-lg max-w-xl md:mb-4 mb-6 text-white'>
                Благодарим за&nbsp;интерес к&nbsp;нашим услугам!
              </p>
              <p className='max-w-sm md:mb-0 mb-6 text-white'>
                Мы готовы обсудить детали вашего проекта и&nbsp;начать сотрудничество
              </p>
            </div>
            <Button variant="secondary" withDot href="https://t.me/kirrish" className="fund-card__button" target="_blank">
                          Обсудить детали
              </Button>
          </div>
        </div>
      </div>
    </section>
  )
}