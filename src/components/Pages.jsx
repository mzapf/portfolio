import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

const Pages = () => {
    return (
        <>
            <NavBar />
            <main>
                <div className="h-[90vh] flex items-center justify-evenly">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    )
}

export { Pages }
