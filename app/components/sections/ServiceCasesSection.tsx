import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/cards/ProjectCard'

type Props = {
  title?: string
  serviceKeys: string[]
}

export function ServiceCasesSection({ title = 'Релевантные кейсы', serviceKeys }: Props) {
  const filtered = projects.filter((project) =>
    project.serviceKeys.some((key) => serviceKeys.includes(key))
  )

  const visible = filtered.slice(0, 4)

  if (!visible.length) return null

  return (
    <section className="section">
      <div className="container">
        <div className="mb-4 flex items-center gap-2">
          <div className="button__dot fill" />
          <h2 className="heading-sm uppercase font-light">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
