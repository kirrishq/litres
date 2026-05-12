'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NeuroBackground } from '../effects/NeuroBackground'
import { Tag } from '../ui/Tag'
import { Button } from '../ui/Button'

export function AboutSectionHome() {
  return (
    <div className='section w-full'>
      <div className='container inverted flex flex-col justify-end'>
          <div className="flex flex-col gap-2">
            <div className='flex items-center gap-2 mt-2'>
              <div className='button__dot fill'></div>
              <h2 className='heading-sm uppercase font-light'>О нас</h2>
            </div>
            <div className="flex flex-col gap-4 max-w-2xl">
              <p className='heading'>Мы не стараемся впечатлить — мы стараемся решить. Впечатление приходит с результатом.</p>
              <p className='paragraph inverted'>Небольшое агентство с большим вниманием к деталям. Без лишнего шума — только точность, прозрачность и комфортное партнерство.</p>
              <p className='paragraph inverted'>Вкладываемся в каждый проект полностью — и всегда делаем чуть больше, чем обещали.</p>
            </div>
          </div>
      </div>
    </div>
  )
}