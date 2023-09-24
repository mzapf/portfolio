import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

const Pages = () => {
    return (
        <>
            <NavBar />
            <main className="p-20">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export { Pages }
