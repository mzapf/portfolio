import { FaGithub, FaLinkedin } from "react-icons/fa"

const links = [
    {
        href: "https://github.com/mzapf",
        logo: <FaGithub />,
    },
    {
        href: "https://www.linkedin.com/in/zapf",
        logo: <FaLinkedin />,
    },
]

const Footer = () => {
    return (
        <footer className="flex absolute bottom-0">
            <p className="border-2 border-gray-800">find me in:</p>
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-amber-400 border-2 border-gray-800"
                >
                    {link.logo}
                </a>
            ))}
        </footer>
    )
}

export { Footer }
