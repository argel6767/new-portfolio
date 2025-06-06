'use client'


import {usePathname} from "next/navigation";
import Link from "next/link";

export const NavBar = () => {
    const pathName = usePathname();

    const isCurrentPage = (path: string) => {
        return path === pathName;
    }

    return (
        <nav className={"flex justify-between items-stretch w-4/5 md:3/5 lg:w-1/3 bg-white shadow-xl rounded-3xl px-6 p-3 fixed top-4 font-semibold z-50 "}>
            <Link className={`${isCurrentPage("/")? "text-teal-400" : ""} hover:text-teal-400`} href="/">Home</Link>
            <Link className={`${isCurrentPage("/about")? "text-teal-400" : ""} hover:text-teal-400`} href="/about">About</Link>
            <Link className={`${isCurrentPage("/projects")? "text-teal-400" : ""} hover:text-teal-400`} href="/projects">Projects</Link>
            <Link className={`${isCurrentPage("/contact")? "text-teal-400" : ""} hover:text-teal-400` } href="/contact">Contact</Link>
        </nav>
    )

}