import { Transition } from "./Transition"
import { ProjectCard } from "./ProjectCard"
import projectsData from "../data/projects.json"

const Project1 = projectsData[0]

const Hello = () => {
    return (
        <Transition>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                <div className="flex flex-col gap-5 md:gap-20">
                    <div>
                        <h2 className="text-lg md:text-xl lg:text-2xl">
                            Hello! I am
                        </h2>
                        <h1 className="text-5xl md:text-6xl lg:text-8xl">
                            Matias Zapf
                        </h1>
                        <h3 className="text-2xl md:text-4xl lg:text-5xl text-sky-400">
                            Software Developer
                        </h3>
                    </div>
                    <div>
                        <p>// write the code below to continue:</p>
                        <h4 className="text-4xl text-custom-purple">
                            <span className="text-purple-300">{"> "}</span>
                            <span className="border-b-2 border-purple-300">
                                w
                            </span>
                            hois
                        </h4>
                    </div>
                </div>
                <div>
                    <ProjectCard project={Project1} />
                </div>
            </div>
        </Transition>
    )
}

export { Hello }
