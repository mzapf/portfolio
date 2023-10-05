import { CodeEditor } from "./CodeEditor"

const About = () => {
    const content = [
        "About me",
        "Learning to develop modern web applications that involve data analytics.",
        "I'm currently learning React, Node.js, and MongoDB.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Similique assumenda quis accusantium, vero labore dolore?",
    ]

    const commented_content = `/**
  * ${content.join("\n  * ")}
  */`

    return (
        <div className="flex justify-center items-center md:h-[85vh] p-4">
            <CodeEditor content={commented_content} />
        </div>
    )
}

export { About }
