'use client'

import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Button } from '../ui/Button'

type FundCardProps = {
  fundName: string
  fundDescription: string
  imageSrc?: string
  imageAlt?: string
  badgeText?: string
  href?: string
  className?: string
}

gsap.registerPlugin(ScrollTrigger)

export function FundCard({
  fundName,
  fundDescription,
  imageSrc = '/assets/projects/ultracore/ultracore-thumbnail.png',
  imageAlt = 'Фото фонда',
  badgeText = '5%',
  href,
  className = '',
}: FundCardProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      const imageLayer = rootRef.current?.querySelector<HTMLElement>('[data-fund-parallax]')
      if (!imageLayer || !rootRef.current) return

      gsap.fromTo(
        imageLayer,
        { yPercent: -10, scale: 1.12 },
        {
          yPercent: 8,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    },
    { scope: rootRef }
  )

  const containerClassName = className ? `container fund fund-card ${className}` : 'container fund fund-card'

  return (
    <article className='section'>
      <div ref={rootRef} className={containerClassName}>
        <div className="fund-card__bg" data-fund-parallax>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="fund-card__bg-image"
          />
        </div>
        <div className="fund-card__overlay" aria-hidden="true" />

        <div className="fund-card__content">
          <div className="fund-card__content-left">
            <div className='flex items-center gap-2'>
              <div className='button__dot fill'></div>
              <h2 className='heading-sm uppercase font-light'>12 мая 2026</h2>
            </div>
            <h3 className="heading-lg fund-card__title">{fundName}</h3>
            <p className="paragraph fund-card__text">{fundDescription}</p>
          </div>

          <div className="fund-card__content-right">
            {/* <div className="fund-card__badge">
              <span>{badgeText}</span>
            </div> */}
            <Button variant="secondary" withDot href={href} className="fund-card__button" target="_blank">
              Обсудить проект
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
