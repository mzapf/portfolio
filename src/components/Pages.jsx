import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

const Pages = () => {
    return (
        <div className="h-screen flex flex-col">
            <header className="fixed top-0 left-0 right-0">
                <NavBar />
            </header>
            <main className="flex-1 flex justify-center items-center mt-16 mb-16">
                <Outlet />
            </main>
            <footer className="fixed bottom-0 left-0 right-0">
                <Footer />
            </footer>
        </div>
    )
}

export { Pages }
