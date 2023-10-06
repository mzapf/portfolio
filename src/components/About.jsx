import { CodeEditor } from "./CodeEditor"
import { FileExplorer } from "./FileExplorer"

const About = () => {
    const content = [
        "I am currently diving into the world of modern web",
        "application development with a focus on data analytics.",
        "My studies are centered around React for the frontend,",
        "Node.js for the backend, and MongoDB for database management.",
    ]

    const commented_content = `/**\n  * ${content.join("\n  * ")}\n  */`

    return (
        <div className="flex gap-20 items-center">
            <CodeEditor content={commented_content} />
            <FileExplorer />
        </div>
    )
}

export { About }
