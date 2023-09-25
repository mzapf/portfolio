import { ProjectCard } from "./ProjectCard"

const Hello = () => {
    return (
        <>
            <div className="h-[90vh] flex items-center justify-evenly">
                <div className="flex flex-col gap-20">
                    <div>
                        <h2 className="text-2xl">Hello! I am</h2>
                        <h1 className="text-8xl">Matias Zapf</h1>
                        <h3 className="text-5xl text-sky-400">
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
                    <ProjectCard />
                </div>
            </div>
        </>
    )
}

export { Hello }
