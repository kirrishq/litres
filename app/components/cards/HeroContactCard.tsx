'use client'

import Image from 'next/image'

type HeroContactCardProps = {
  className?: string
}

export function HeroContactCard({ className = '' }: HeroContactCardProps) {
  return (
    <div className={`home-header_contact-card ${className}`.trim()}>
      {/* <div className="home-header_contact-media">
        <Image
          src="/assets/projects/ultracore/ultracore-thumbnail.png"
          alt="Команда Afterflow"
          fill
          sizes="(max-width: 768px) 64px, 96px"
          className="home-header_contact-pic"
        />
      </div> */}

      <div className="home-header_contact-info">
        <div className="home-header_contact-heading">
          <span className="button__dot fill" aria-hidden="true" />
          <div className="home-header_contact-cta">Связаться с командой</div>
        </div>

        <p className="home-header_contact-text">Обсудим проект, подготовим предложение</p>

        <div className="home-header_contact-links">
          <a href="https://t.me/afterflow_studio" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href="mailto:hello@afterflow.studio">hello@afterflow.studio</a>
        </div>
      </div>
    </div>
  )
}
