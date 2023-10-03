import { CodeEditor } from "./CodeEditor"

const About = () => {
    const content = [
        "About me",
        "Learning to develop modern web applications that involve data analytics.",
        "I'm currently learning React, Node.js, and MongoDB.",
        "I'm looking to collaborate on projects that involve data analytics.",
    ]

    const commented_content = `/**
  * ${content.join("\n  * ")}
  */`

    return (
        <div className="p-4">
            <CodeEditor content={commented_content} />
        </div>
    )
}

export { About }
