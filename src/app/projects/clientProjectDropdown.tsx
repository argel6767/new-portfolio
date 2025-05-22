'use client'
import {useEffect, useState} from "react";
import {ProjectDropDownContainer} from "@/components/project-display";
import {LanguageStats} from "@/components/github";
import {Footer} from "@/components/footer";

export const ClientAnchorProjectDropDown = () => {
    const [hasHash, setHasHash] = useState(false);


    useEffect(() => {
        setHasHash(!!window.location.hash);
    }, []);

    return (
        <div className={`${hasHash ? "" : "motion-translate-y-in-100 motion-ease-spring-smooth motion-delay-300"}`}>
                    <span className={"w-full pt-44 px-2 lg:w-3/4 rounded-3xl shadow-2xl"}>
                        <ProjectDropDownContainer/>
                    </span>
            <LanguageStats/>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}