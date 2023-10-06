const CodeEditor = ({ content }) => {
    const lines = content.split("\n")

    const extraLines = 3
    const totalLineCount = lines.length + 2 * extraLines
    const startLineNumber = 35

    const lineNumbers = [...Array(totalLineCount)].map((_, index) => (
        <div key={index} className="text-white">
            {index + startLineNumber}
        </div>
    ))

    const blankLines = [...Array(extraLines)].map((_, index) => (
        <div key={`blank-${index}`}> </div>
    ))

    return (
        <div className="p-2 text-gray-500 relative">
            <div className="absolute top-0 left-0 p-2 z-10">{lineNumbers}</div>
            <div className="pl-8 whitespace-pre-wrap relative z-10">
                {blankLines}
                {lines.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
                {blankLines}
            </div>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-custom-gray to-transparent pointer-events-none z-20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-custom-gray to-transparent pointer-events-none z-20"></div>
        </div>
    )
}

export { CodeEditor }
