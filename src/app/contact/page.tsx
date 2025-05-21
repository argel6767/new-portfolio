import {NavBar} from "@/components/navbar";
import INFO from "@/data/user";
import {ContactMe, Socials} from "@/app/contact/contactMe";
import {Footer} from "@/components/footer";

export default function Contact() {
    return (
        <div className={"flex justify-center items-center w-full motion-preset-fade transition-opacity  motion-delay-200"}>
            <main className={"pt-32 px-3 w-full lg:w-3/4 rounded-3xl shadow-2xl"}>
                <nav className={"flex justify-center items-center w-full "}>
                    <NavBar/>
                </nav>
                <header className={"flex justify-center items-center w-full pb-4"}>
                    <div className={"md:flex justify-center items-center w-full px-6 gap-4"}>
                        <article className={"flex flex-col items-center w-full gap-6 py-4 px-2"}>
                            <h1 className={"font-bold text-5xl"}>{INFO.contact.title}</h1>
                            <p className={"text-xl text-gray-400 font-semibold text-left"}>{INFO.contact.description}</p>
                        </article>
                    </div>
                </header>
                <Socials/>
                <ContactMe/>
                <footer className={"py-4"}>
                    <Footer/>
                </footer>
                </main>
        </div>)
}