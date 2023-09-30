import { ProjectCard } from "./ProjectCard"
import projectsData from "../projects.json"

const Projects = () => {
    return (
        <>
            <div className="h-[85vh] flex items-center justify-around">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </>
    )
}

export { Projects }
