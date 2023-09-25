import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

const Pages = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export { Pages }
