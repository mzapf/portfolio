import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const links = [
    {
        href: "https://www.linkedin.com/in/zapf",
        logo: <FaLinkedin />,
    },
    {
        href: "https://github.com/mzapf",
        logo: <FaGithub />,
    },
]

const Footer = () => {
    const [fechaHora, setFechaHora] = useState("")

    useEffect(() => {
        const now = new Date()
        const date = now.getDate()
        const month = now.getMonth() + 1
        const year = now.getFullYear()
        const hour = String(now.getHours()).padStart(2, "0")
        const minute = String(now.getMinutes()).padStart(2, "0")

        setFechaHora(`${hour}:${minute} ${date}/${month}/${year}`)
    }, [])

    return (
        <div className="w-full flex items-center absolute bottom-0 border-2 border-gray-800">
            <p className="flex p-2 border-r-2 border-gray-800">find me in:</p>
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 text-2xl p-2 border-r-2 border-gray-800"
                >
                    {link.logo}
                </a>
            ))}
            <p className="flex grow justify-end pr-3">{fechaHora}</p>
        </div>
    )
}

export { Footer }
