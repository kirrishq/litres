import Link from 'next/link'
import type { Project } from '@/types/project'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <Link
      href={project.href}
      className="group block relative project"
      data-project-card
    >
      <div className="mb-4 overflow-hidden rounded-[1rem]">
        <div className="relative aspect-[695/480] bg-black">
          <div className="project-card__soon-badge">
            Кейс скоро
          </div>
          <div
            className="absolute inset-0 will-change-transform"
            data-project-parallax
          >
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="heading underline-left self-start">
          <span>{project.title}</span>
        </h3>

        <p className="mb-0 text-xs">
          {project.services.join(', ')}
        </p>

        {/* <p className="mb-0 text-xs text-[var(--color-text-muted)]">
          ({project.year})
        </p> */}
      </div>
    </Link>
  )
}
