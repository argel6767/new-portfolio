import SEO from "@/data/seo";
import type {Metadata} from "next";
import {NavBar} from "@/components/navbar";
import INFO from "@/data/user";
import {ClientAnchorProjectDropDown} from "@/app/projects/clientProjectDropdown";

const seo = SEO.projects;

export const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
};


export default function Projects() {
    return (
        <div
            className={"flex justify-center items-center w-full motion-preset-fade transition-opacity  motion-delay-200"}>
            <main className={"pt-36 px-3 w-full lg:w-3/4 rounded-3xl shadow-2xl"}>
                <nav className={"flex justify-center items-center w-full"}>
                    <NavBar/>
                </nav>
                <article className={"flex flex-col items-center w-full gap-6 py-4 px-2"}>
                    <h1 className={"font-bold text-5xl"}>{INFO.project.title}</h1>
                    <p className={"text-xl text-gray-400 font-semibold text-left"}>{INFO.project.description}</p>
                </article>
                <ClientAnchorProjectDropDown/>
            </main>
        </div>
    )
}