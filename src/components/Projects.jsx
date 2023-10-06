import { Transition } from "./Transition"
import { ProjectCard } from "./ProjectCard"
import projectsData from "../data/projects.json"

const Projects = () => {
    return (
        <Transition>
            <div className="flex flex-wrap gap-10 items-center justify-evenly">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </Transition>
    )
}

export { Projects }
