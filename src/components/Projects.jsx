import { ProjectCard } from "./ProjectCard"
import projectsData from "../projects.json"

const Projects = () => {
    return (
        <>
            <div className="md:h-[85vh] flex flex-col md:flex-row gap-6 items-center justify-evenly p-4">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </>
    )
}

export { Projects }
