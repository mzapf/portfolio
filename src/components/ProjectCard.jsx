const ProjectCard = (props) => {
    const { title, commits, url, content } = props.project

    const commented_content = `/**\n  * ${content.join("\n  * ")}\n  */`

    return (
        <>
            <div className="border-2 border-gray-800 rounded-xl p-4 shadow-lg shadow-gray-800">
                <div className="flex justify-between">
                    <p className="text-amber-400 pb-4 font-bold">{title}</p>
                    <p className="text-gray-700 pb-4">{commits} commits</p>
                </div>
                <div className="flex flex-col gap-4 bg-custom-gray-2 border-2 border-black rounded-xl py-4">
                    <pre className="flex text-gray-400 justify-start px-4">
                        {commented_content}
                    </pre>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-custom-gold text-custom-gray-2 hover:bg-amber-400"
                    >
                        <button className="px-4">see the project</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export { ProjectCard }
