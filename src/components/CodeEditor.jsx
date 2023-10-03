const CodeEditor = ({ content }) => {
    const lines = content.split("\n")

    return (
        <div className="border rounded p-2 bg-gray-800 text-white relative overflow-x-scroll">
            <div className="absolute top-0 left-0 p-2">
                {lines.map((_, index) => (
                    <div key={index} className="text-gray-500">
                        {index + 1}
                    </div>
                ))}
            </div>

            <div className="pl-8 whitespace-pre-wrap">{content}</div>
        </div>
    )
}

export { CodeEditor }
