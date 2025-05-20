import {NavBar} from "@/components/navbar";
import INFO from "@/data/user";
import homepage from "../../public/homepage.jpg"
import Image from "next/image";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {ProjectPreviewContainer} from "@/components/project-display";

export default function Home() {
  return (
      <div className={"flex justify-center items-center w-full"}>
          <main className={"pt-32 px-3 w-full lg:w-2/4 bg-slate- rounded-3xl shadow-2xl"}>
              <nav className={"flex justify-center items-center w-full "}>
                  <NavBar/>
              </nav>
              <div className={"md:pl-20 py-20"}>
                  <Image className={"rounded-4xl shadow-2xl rotate-2"} src={homepage} alt={"Argel Hernandez Amaya wearing sombraro, smiling"} width={400}/>
              </div>
              <header className={"flex flex-col justify-start w-full gap-5 py-6"}>
                  <h1 className={"font-bold text-5xl"}>{INFO.homepage.title}</h1>
                  <p className={"text-xl text-gray-400 font-semibold"}>{INFO.homepage.description}</p>
                  <label>Connect With Me!
                      <ul className={"flex justify-start w-full gap-3 items-center pt-2"}>
                          <li><Link href={"https://github.com/argel6767"}><FontAwesomeIcon className={"w-10"}
                                                                                           icon={faGithub}/></Link></li>
                          <li><Link href={"https://www.linkedin.com/in/argel-hernandez-amaya/"}><FontAwesomeIcon
                              className={"w-10"}
                              icon={faLinkedin} size={"2xs"}/></Link></li>
                          <li><Link href={"mailto:argel6767@gmail.com"}><FontAwesomeIcon className={"w-14"}
                                                                                         icon={faMailBulk}/></Link></li>
                      </ul>
                  </label>
                  <section className={"flex flex-col justify-start w-full gap-8 py-6"}>
                      <h2 className={"text-4xl font-semibold"}>Some of My Projects</h2>
                      <ProjectPreviewContainer/>
                  </section>
              </header>
          </main>
      </div>
  )
}