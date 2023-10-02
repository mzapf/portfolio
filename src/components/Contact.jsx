import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const form = useRef()
    const [showThankYou, setShowThankYou] = useState(true)

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
        return <h1 className="text-4xl">Thank you for contacting me!</h1>
    }

    const ContactForm = () => {
        return (
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
