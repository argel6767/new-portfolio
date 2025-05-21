import {NavBar} from "@/components/navbar";
import {Footer} from "@/components/footer";
import Image from "next/image";
import about from "../../../public/about.jpeg";
import INFO from "@/data/user";
import {JobInfoContainer, SchoolInfoContainer} from "@/app/about/history";
import {faUniversity, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function About() {
    return (
        <div className={"flex justify-center items-center w-full"}>
            <main className={"pt-32 px-3 w-full lg:w-3/4 rounded-3xl shadow-2xl"}>
                <nav className={"flex justify-center items-center w-full "}>
                    <NavBar/>
                </nav>
                <header className={"flex justify-center items-center w-full"}>
                    <div className={"md:flex justify-center items-center w-full px-6 gap-4"}>
                        <article className={"flex flex-col items-center w-full gap-6 py-4 px-2"}>
                            <h1 className={"font-bold text-5xl"}>{INFO.about.title}</h1>
                            <p className={"text-xl text-gray-400 font-semibold text-left"}>{INFO.about.description}</p>
                        </article>
                        <Image className={"hidden md:block rounded-4xl shadow-2xl rotate-2"} src={about}
                               alt={"Argel Hernandez Amaya wearing sombraro, smiling"} width={250} height={400}/>
                    </div>
                </header>
                <span className={"flex flex-col items-center w-full gap-6 py-6 px-4"}>
                    <article className={"flex flex-col w-4/5 gap-6 shadow-xl rounded-3xl bg-white hover:scale-105 transition-transform duration-300 p-6"}>
                        <h2 className={"text-2xl flex items-center gap-3 font-bold"}>
                            My Education <FontAwesomeIcon className={"w-7"} icon={faUniversity}/>
                        </h2>
                        <SchoolInfoContainer/>
                    </article>
                    <article
                        className={"flex flex-col w-4/5 gap-6  shadow-xl rounded-3xl bg-white hover:scale-105 transition-transform duration-300 p-6"}>
                        <h2 className={"text-2xl flex items-center gap-3 font-bold"}>
                            My Work Experience <FontAwesomeIcon className={"w-7"} icon={faBriefcase}/>
                        </h2>
                        <JobInfoContainer/>
                    </article>
                </span>
                <footer>
                    <Footer/>
                </footer>
            </main>
        </div>
    )
}