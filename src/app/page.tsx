import {NavBar} from "@/components/navbar";
import INFO from "@/data/user";
import homepage from "../../public/homepage.jpg"
import Image from "next/image";
import {ProjectPreviewContainer} from "@/components/project-display";
import {Footer} from "@/components/footer";

export default function Home() {
  return (
      <div className={"flex justify-center items-center w-full"}>
          <main className={"pt-32 px-3 w-full lg:w-3/4 rounded-3xl shadow-2xl"}>
              <nav className={"flex justify-center items-center w-full "}>
                  <NavBar/>
              </nav>
              <header className={"flex flex-col justify-start w-full gap-6 py-6"}>
                  <div className={"md:flex justify-center items-center w-full px-3 gap-4"}>
                      <Image className={"rounded-4xl shadow-2xl rotate-2 block md:hidden"} src={homepage}
                             alt={"Argel Hernandez Amaya wearing sombraro, smiling"} width={400}/>
                      <article className={"flex flex-col items-center w-full gap-4 py-4"}>
                          <h1 className={"font-bold text-5xl"}>{INFO.homepage.title}</h1>
                          <p className={"text-xl text-gray-400 font-semibold text-center"}>{INFO.homepage.description}</p>
                      </article>
                      <Image className={"rounded-4xl shadow-2xl rotate-2 hidden md:block"} src={homepage}
                             alt={"Argel Hernandez Amaya wearing sombraro, smiling"} width={400}/>
                  </div>
                  <section className={"flex flex-col justify-start w-full gap-10 py-6"}>
                      <h2 className={"text-4xl font-semibold"}>Some of My Projects</h2>
                      <ProjectPreviewContainer/>
                  </section>
              </header>
              <footer>
                  <Footer/>
              </footer>
          </main>
      </div>
  )
}