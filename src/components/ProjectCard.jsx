const ProjectCard = () => {
    return (
        <>
            <div className="w-96 border-2 border-gray-800 rounded-xl p-4 shadow-xl shadow-gray-800">
                <p className="text-amber-400 pb-4 font-bold">Dimensión C-137</p>
                <div className="flex flex-col gap-4 bg-custom-gray-2 border-2 border-black rounded-xl py-4">
                    <p className="px-4">
                        Proyecto del Bootcamp Front-End (Silicon Misiones - UTN)
                    </p>
                    <a
                        href="https://github.com/mzapf/c-137"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-400 text-custom-gray-2"
                    >
                        <button className="px-4">see the project</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export { ProjectCard }
