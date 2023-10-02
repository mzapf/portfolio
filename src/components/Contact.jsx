import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    return (
        <>
            <div className="h-[85vh] flex items-center justify-evenly">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col">
                    <label>Name</label>
                    <input
                        type="text"
                        name="user_name"
                        required
                        placeholder="Your name"
                        className="text-black"
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="user_email"
                        required
                        placeholder="Your email"
                        className="text-black"
                    />
                    <label>Message</label>
                    <textarea
                        name="message"
                        required
                        placeholder="Your message"
                        className="text-black"
                    />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </>
    )
}

export { Contact }
