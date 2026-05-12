'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NeuroBackground } from '../effects/NeuroBackground'
import { Tag } from '../ui/Tag'
import { Button } from '../ui/Button'

export function HeroTest() {
  return (
    <div className='section w-full h-screen'>
      <div className='container flex flex-col justify-end'>
        <div className='flex justify-between items-center'>
          <h1 className='heading-hero uppercase'>Веб-студия полного цикла</h1>
        </div>

        <div className='home-header_card'>
          <NeuroBackground />

          <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-2 md:gap-4 z-1'>
            <Tag label='Веб-дизайн' variant='dark'/>
            <Tag label='Разработка' variant='dark'/>
            <Tag label='Сайты' variant='dark'/>
            <Tag label='Приложения' variant='dark'/>
            <Tag label='Автоматизация' variant='dark'/>
            <Tag label='Чат-боты' variant='dark'/>
          </div>

          <div className='flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end gap-4 z-1'>
            <div>
              <p className='heading-lg max-w-xl mb-6'>
                Создаем эффективные сайты
                — инструмент роста бизнеса, который работает 24/7
              </p>
              <Button children='Связаться' variant='secondary' withDot />
            </div>
            <div>Hello</div>
          </div>
        </div>
      </div>
    </div>
  )
}