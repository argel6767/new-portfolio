import {NavBar} from "@/components/navbar";
import {ProjectDropDownContainer} from "@/components/project-display";
import {Footer} from "@/components/footer";
import INFO from "@/data/user";
import {LanguageStats} from "@/components/github";

export default function Projects() {
    return (
        <div className={"flex justify-center items-center w-full"}>
            <main className={"pt-36 px-3 w-full lg:w-3/4 rounded-3xl shadow-2xl"}>
                <nav className={"flex justify-center items-center w-full"}>
                    <NavBar/>
                </nav>
                <article className={"flex flex-col items-center w-full gap-4 py-4"}>
                    <h1 className={"font-bold text-5xl"}>{INFO.project.title}</h1>
                    <p className={"text-xl text-gray-400 font-semibold text-center"}>{INFO.project.description}</p>
                </article>
                <span className={"w-full pt-44 px-2 lg:w-3/4 rounded-3xl shadow-2xl"}>
            <ProjectDropDownContainer/>
            </span>
                <LanguageStats/>
                <footer>
                    <Footer/>
                </footer>
            </main>
        </div>)
}