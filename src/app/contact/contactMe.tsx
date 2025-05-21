'use client'
import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import INFO from "@/data/user";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const ContactMe = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    // Add state for form values
    const [formData, setFormData] = useState({
        name: "",
        return_email: "",
        message: ""
    });

    // Check if all fields are filled
    const isFormValid = formData.name.trim() !== "" &&
        formData.return_email.trim() !== "" &&
        formData.message.trim() !== "";

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();

        try {
            await emailjs.sendForm(SERVICE_ID!, TEMPLATE_ID!, form.current!, {publicKey: PUBLIC_KEY!,})
            console.log('Email sent successfully!')
            setIsSuccess(true);
            await sleep(2000);
            setIsSuccess(false);
            // Reset form after successful submission
            setFormData({ name: "", return_email: "", message: "" });
        }
        catch (error) {
            setIsError(true);
            console.error(error);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setErrorMessage(error.message);
            await sleep(1700);
            setIsError(false);
        }
        setIsLoading(false);
    };

    return (
        <main className={"shadow-xl rounded-xl p-6"}>
            <h2 className={"text-3xl font-semibold py-6"}>Or Better Yet, Email Me Here!</h2>
            <form className={"grid grid-cols-2 gap-4 w-full"} ref={form} onSubmit={sendEmail}>
                <label className={"text-lg"}>Name</label>
                <input
                    disabled={isLoading}
                    className={"input bg-white border-2 border-slate-200 rounded-lg disabled:bg-white disabled:border-2 disabled:border-slate-200 text-sm"}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                <label className={"text-lg"}>Email</label>
                <input
                    disabled={isLoading}
                    className={"input bg-white border-2 border-slate-200 rounded-lg disabled:bg-white disabled:border-2 disabled:border-slate-200 text-sm"}
                    type="text"
                    name="return_email"
                    value={formData.return_email}
                    onChange={handleInputChange}
                />
                <label className={"text-lg"}>Message</label>
                <textarea
                    disabled={isLoading}
                    className={"textarea w-full lg:w-3/5 bg-white border-2 border-slate-200 rounded-lg disabled:bg-white disabled:border-2 disabled:border-slate-200 text-sm"}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                />
                <div className={"flex flex-col justify-end items-end w-full py-3 gap-4"}>
                    <button
                        disabled={isLoading || !isFormValid}
                        className={`btn btn-primary flex w-3/4 md:w-1/3 disabled:bg-primary disabled:border-2 disabled:border-slate-200 disabled:text-black  ${isSuccess ? "motion-bg-in-success motion-delay-200" : ""}`}
                        type="submit"
                        value="Send"
                    >
                        {isLoading ?
                            <span className="loading loading-spinner loading-md bg-primary"></span> :
                            <p>Send</p>}
                    </button>
                    <p className={`text-red-400 w-3/4 md:w-2/5 text-sm font-semibold ${isError ? "visible motion-preset-fade transition-opacity  motion-delay-400" : "invisible"}`}>Error sending
                        email: {errorMessage}</p>
                </div>
            </form>
            <p className={"text-gray-400 text-xs md:text-sm py-2"}>I will get back to you as soon as I can &#128522;.</p>
        </main>
    );
};

export const Socials = () => {
    return (
        <main className={"flex justify-between px-4 text-xs md:text-lg"}>
            <Link className={"flex gap-4 items-center hover:underline hover:underline-offset-4"} href={INFO.socials.github}><FontAwesomeIcon icon={faGithub}/>Follow Me on GitHub</Link>
            <Link className={"flex gap-4 items-center hover:underline hover:underline-offset-4"} href={INFO.socials.linkedin}><FontAwesomeIcon icon={faLinkedin}/> Follow me on LinkedIn</Link>
            <Link className={"flex gap-4 items-center hover:underline hover:underline-offset-4"} href={`mailto:${INFO.main}`}><FontAwesomeIcon icon={faEnvelope}/>Email Me</Link>
        </main>
    )

}