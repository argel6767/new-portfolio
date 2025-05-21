'use client'
import INFO from "@/data/user";
import {ReactNode, useEffect, useRef, useState} from "react";
import {Modal} from "@/components/modal";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Microlink from '@microlink/react'

interface Project {
    logos: string[];
    title: string;
    description: string;
    linkText: string;
    gitHubLink: string;
    webLink: string | null;
}

interface ProjectProps {
    project: Project;
    displayText?: string;
    children?: ReactNode
}


const Project = ({project, displayText, children}: ProjectProps) => {


    return (
        <>
            <header className={"flex justify-start items-center gap-1"}>
                {project.logos.map((logo, i) => (
                    <img key={i} src={logo} alt={"Tool image"} width={50}/>
                ))}
            </header>
            <main className={"flex flex-col gap-2 py-2"}>
                <h3 className={"text-3xl text-left border-b-1 font-semibold"}>{project.title}</h3>
                <p className={"text-gray-400 font-semibold"}>{displayText}</p>
                <article className={"flex justify-center items-center gap-2 py-4"}>
                    {children}
                </article>
            </main>
        </>
    )
}

interface ProjectPreviewProps {
    project: Project;
    displayText?: string;
}

const ProjectPreview = ({project}: ProjectPreviewProps) => {
    const displayText = project.description.substring(0, 150) + "...";
    const [isHovering, setHovering] = useState(false);

    return (
        <div
            className={"flex flex-col items-center justify-start rounded-lg shadow-lg p-2 hover:bg-slate-50 hover:scale-105 hover:cursor-pointer transition-transform duration-300 relative w-full"}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            {isHovering && <Modal>
                <Link className={"btn btn-outline animate-pulse"} href={`/projects/#${project.title.replaceAll(" ", "")}`}>Read More</Link>
            </Modal>}
            <Project project={project} displayText={displayText} />
        </div>
    )
}

export const ProjectPreviewContainer = () => {
    const projects = INFO.projects

    return (
        <main className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2"}>
            {projects.map((project, i) => (
                <ProjectPreview key={i} project={project} />
            ))}
        </main>
    )
}

interface ProjectDropDownContainerProps {
    project: Project;
}

// In your ProjectDropDown component
export const ProjectDropDown = ({project}:ProjectDropDownContainerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [displayText, setDisplayText] = useState(project.description.substring(0, 150));
    const anchor = project.title.replaceAll(" ", "");
    const [hasMounted, setHasMounted] = useState(false);
    const link = project.webLink? project.webLink : project.gitHubLink;

    // Add this effect to track when component has mounted
    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Check URL hash only after component has mounted on client
    useEffect(() => {
        if (!hasMounted) return;

        const checkHash = () => {
            if (window.location.hash === `#${anchor}`) {
                setIsOpen(true);
            }
        };

        // Check on initial load
        checkHash();

        // Add listener for hash changes
        window.addEventListener("hashchange", checkHash);

        // Cleanup
        return () => window.removeEventListener("hashchange", checkHash);
    }, [anchor, hasMounted]);

    useEffect(() => {
        if (!hasMounted) return;

        if (isOpen) {
            setDisplayText(project.description);
        }
        else {
            setDisplayText(project.description.substring(0, 150));
        }
    }, [isOpen, project.description, hasMounted]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="relative w-full mt-8 px-4">
            <div className={"flex justify-center items-center w-full"}>
                <button id="dropdown" onClick={toggleDropdown}
                        className=" w-full flex items-center justify-center px-6 py-2 bg-slate-200 rounded-md hover:bg-slate-50 hover:scale-105 hover:cursor-pointer transition-transform duration-300 transition-colors duration-300  gap-2 shadow-lg rounded-2xl">
                    <span className={"text-2xl md:text-3xl font-semibold"}>{project.title}</span>
                    <svg className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
                         fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                </button>
            </div>

            <div ref={dropdownRef}
                 className={`absolute  left-1/2 transform -translate-x-1/2 w-full mt-2 rounded-md shadow-lg bg-slate-100 transition-all duration-300 origin-top z-10 p-4 ${isOpen ? "opacity-100 transform scale-y-100 max-h-96" : "opacity-0 transform scale-y-0 max-h-0"} overflow-y-scroll`}>
                <article className="py-2">
                    <Project displayText={displayText} project={project}>
                        <Microlink url={link} lazy size={'large'} media={"iframe"}/>
                    </Project>
                </article>
            </div>
        </main>
    );
};

export const ProjectDropDownContainer = () => {
    const projects = INFO.projects
    return (
        <main className={"grid grid-cols-1 md:grid-cols-2"}>
            {projects.map((project, i) => (
                <ProjectDropDown project={project} key={i}/>
            ))}
        </main>
    )
}
