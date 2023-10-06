import { motion } from "framer-motion"

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8,
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2,
    },
}

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
}

const pageStyle = {
    position: "absolute",
}

const Transition = ({ children }) => {
    return (
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    )
}

export { Transition }
