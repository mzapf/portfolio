import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Hello } from "./components/Hello"
import { Projects } from "./components/Projects"
import { Pages } from "./components/Pages"

const router = createBrowserRouter([
    {
        element: <Pages />,
        errorElement: <Pages />,
        children: [
            {
                path: "/",
                element: <Hello />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
