import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

const Pages = () => {
    return (
        <>
            <NavBar />
            <main className="px-52 py-36">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export { Pages }
