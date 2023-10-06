import { ProjectCard } from "./ProjectCard"
import projectsData from "../data/projects.json"

const Projects = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-10 items-center justify-evenly">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </>
    )
}

export { Projects }
