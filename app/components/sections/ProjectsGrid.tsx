'use client'

import { ProjectCard } from '@/components/cards/ProjectCard'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import type { Project } from '@/types/project'

type Props = {
  projects: Project[]
  limit?: number
}

gsap.registerPlugin(ScrollTrigger)

export function ProjectsGrid({ projects, limit }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const visible = limit ? projects.slice(0, limit) : projects

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-project-card]')

      cards.forEach((card) => {
        const imageLayer = card.querySelector<HTMLElement>('[data-project-parallax]')
        if (!imageLayer) return

        gsap.fromTo(
          imageLayer,
          { yPercent: -7, scale: 1.12 },
          {
            yPercent: 7,
            scale: 1.14,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-8">
          {visible.map((project) => (
            <div
              key={project.href}
              className={project.colSpan === 2 ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
