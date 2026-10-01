import type { GithubRepo } from '../types/Type'
import { projectMeta } from '../data/ProjectMeta'
import { HiArrowUpRight } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import '../css/Project.css'


function Project({ project }: { project: GithubRepo }) {
    const { name, html_url, description } = project

    const meta = projectMeta[name]

    const { category, image, liveUrl, technologies } = meta

    return (
        <article className="project-card">
            <div className="project-card__media">
                <span className="project-card__badge">
                    {category}
                </span>

                <img src={image} alt={name} />
            </div>

            <div className="project-card__body">
                <h2 className="project-card__title">{name}</h2>

                <p className="project-card__desc">
                    {description}
                </p>

                <ul className="project-card__tags">
                    {technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                <div className="project-card__links">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__demo"
                        >
                            Live Demo <HiArrowUpRight />
                        </a>
                    )}
                    <a href={html_url} target="_blank" rel="noreferrer" className="project-card__github" >
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Project