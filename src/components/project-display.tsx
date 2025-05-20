'use client'
import INFO from "@/data/user";
import {useState} from "react";
import {Modal} from "@/components/modal";
import Link from "next/link";

interface Project {
    logos: string[];
    title: string;
    description: string;
    linkText: string;
    link: string;
}
interface ProjectPreviewProps {
    project: Project;
}

const ProjectPreview = ({project}:ProjectPreviewProps) => {
    const displayText = project.description.substring(0, 150);
    const [isHovering, setHovering] = useState(false);

    return (
        <div className={"flex flex-col items-center justify-start rounded-lg shadow-lg p-2 hover:bg-slate-50 hover:scale-105 hover:cursor-pointer transition-transform duration-300 relative w-full"} onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}>
            {isHovering && <Modal>
                <Link className={"btn btn-outline animate-pulse"} href={`/projects/#${project.title.replaceAll(" ", "")}`}>Read More</Link>
            </Modal>}
            <header className={"flex justify-start items-center gap-1"}>
                {project.logos.map((logo, i) => (
                    <img key={i} src={logo} alt={"Tool image"} width={50}/>
                ))}
            </header>
            <main className={"flex flex-col gap-2 py-2"}>
                <h3 className={"text-3xl text-left border-b-1 font-semibold"}>{project.title}</h3>
                <p className={"text-gray-400 font-semibold"}>{displayText}...</p>
            </main>
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
