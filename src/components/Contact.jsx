import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const form = useRef()
    const [showThankYou, setShowThankYou] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                (result) => {
                    e.target.reset()
                    setShowThankYou(true)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    const ThankYou = () => {
        return (
            <h1 className="text-6xl text-amber-400 animate-pulse">
                Thank you for contacting me!
            </h1>
        )
    }

    const ContactForm = () => {
        return (
            <div className="w-80 border-2 border-gray-800 rounded-xl p-4 shadow-lg shadow- shadow-gray-800">
                <div className="flex justify-center">
                    <h1 className="text-amber-400 pb-4 font-bold text-2xl">
                        Contact Me
                    </h1>
                </div>
                <div className="flex flex-col gap-4 bg-custom-gray-2 border-2 border-black rounded-xl py-4">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col gap-2 px-4"
                    >
                        <label>Name</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            placeholder="Your name"
                            className="rounded py-2 px-3 text-gray-700"
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            placeholder="Your email"
                            className="rounded py-2 px-3 text-gray-700"
                        />
                        <label>Message</label>
                        <textarea
                            name="message"
                            required
                            placeholder="Your message"
                            className="rounded py-2 px-3 text-gray-700"
                        />
                        <input
                            type="submit"
                            value="Send"
                            className="mt-2 py-2 rounded bg-custom-gold text-custom-gray-2 hover:bg-amber-400"
                        />
                    </form>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="h-[85vh] flex items-center justify-evenly">
                {showThankYou ? <ThankYou /> : <ContactForm />}
            </div>
        </>
    )
}

export { Contact }
