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
    return (
        <footer className="w-full flex items-center absolute bottom-0 border-2 border-gray-800">
            <p className="p-2">find me in:</p>
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 text-4xl p-2"
                >
                    {link.logo}
                </a>
            ))}
        </footer>
    )
}

export { Footer }
