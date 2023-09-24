import { useMemo } from "react"
import { Link, useLocation } from "react-router-dom"

const NavBar = () => {
    const location = useLocation()
    const showCurrent = (path) => {
        return `flex ${location.pathname === path ? "text-red-500" : ""}`
    }
    const renderLink = (section) => {
        return (
            <Link
                key={section.name}
                to={section.path}
                className={showCurrent(section.path)}
            >
                <button className="px-10 text-2xl">_{section.name}</button>
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
        <header>
            <nav className="flex">{sections.map(renderLink)}</nav>
        </header>
    )
}

export { NavBar }
