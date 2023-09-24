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
        <footer className="flex">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-300"
                >
                    {link.logo}
                </a>
            ))}
        </footer>
    )
}

export { Footer }
