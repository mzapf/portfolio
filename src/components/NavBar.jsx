import { useMemo } from "react"
import { Link, useLocation } from "react-router-dom"

const NavBar = () => {
    const location = useLocation()

    const showCurrent = (path) => {
        return `flex ${
            location.pathname === path
                ? "text-amber-400 border-t-2 border-red-400 bg-transparent"
                : "border-y-2 border-gray-800 bg-black"
        }`
    }

    const renderLink = (section) => {
        return (
            <Link
                key={section.name}
                to={section.path}
                className={showCurrent(section.path)}
            >
                <button className="px-10 py-2 border-r-2 border-gray-800">
                    _{section.name}
                </button>
            </Link>
        )
    }

    const sections = useMemo(
        () => [
            {
                name: "hello",
                path: "/",
            },
            {
                name: "about",
                path: "/about",
            },
            {
                name: "projects",
                path: "/projects",
            },
            {
                name: "contact",
                path: "/contact",
            },
        ],
        []
    )

    return (
        <header className="">
            <nav className="flex border-r-2 border-gray-800">
                {sections.map(renderLink)}
            </nav>
        </header>
    )
}

export { NavBar }
