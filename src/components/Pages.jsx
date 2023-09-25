import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

const Pages = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export { Pages }
