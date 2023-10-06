import { Link } from "react-router-dom"
import { useState } from "react"

import react_icon from "../assets/icons/react.svg"
import html_icon from "../assets/icons/html.svg"
import css_icon from "../assets/icons/css.svg"
import js_icon from "../assets/icons/js.svg"

const FileExplorer = () => {
    const items = [
        {
            name: "hello.jsx",
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
        <div className="hidden md:flex flex-col gap-4 border border-gray-800 rounded-lg p-4">
            <p className="text-lg font-bold">File Explorer</p>
            <div>
                {items.map((item) => (
                    <Link
                        to={`${item.path}`}
                        key={item.name}
                        className={`flex gap-x-1 ${
                            item.path === "/about"
                                ? "bg-gray-800 text-white"
                                : "bg-transparent text-gray-500"
                        }`}
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            height={20}
                            width={20}
                        />
                        <p className="text-lg font-medium hover:text-white">
                            {item.name}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export { FileExplorer }
