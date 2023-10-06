import { Link } from "react-router-dom"
import { useState } from "react"

import react_icon from "../assets/icons/react.svg"
import html_icon from "../assets/icons/html.svg"
import css_icon from "../assets/icons/css.svg"
import js_icon from "../assets/icons/js.svg"

const FileExplorer = () => {
    const items = [
        {
            name: "index.jsx",
            path: "/",
            icon: `${react_icon}`,
        },
        {
            name: "about.html",
            path: "/about",
            icon: `${html_icon}`,
        },
        {
            name: "projects.css",
            path: "/projects",
            icon: `${css_icon}`,
        },
        {
            name: "contact.js",
            path: "/contact",
            icon: `${js_icon}`,
        },
    ]

    return (
        <div>
            {items.map((item) => (
                <Link
                    to={`${item.path}`}
                    key={item.name}
                    className={`flex gap-x-1 ${
                        item.path === "/about"
                            ? "bg-gray-800"
                            : "bg-transparent"
                    }`}
                >
                    <img
                        src={item.icon}
                        alt={item.name}
                        height={20}
                        width={20}
                    />
                    <p className="text-lg font-medium text-gray-500 hover:text-amber-400">
                        {item.name}
                    </p>
                </Link>
            ))}
        </div>
    )
}

export { FileExplorer }
