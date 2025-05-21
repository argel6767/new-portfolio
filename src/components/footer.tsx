import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "../../public/logo.png"

export const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal  text-gray-400 p-10 border-t-2">
            <aside>
                <Image className={"rounded-4xl shadow-2xl"} src={logo} alt={"logo"} width={90}/>
            </aside>
            <nav>
                <h6 className="footer-title text-lg">Connect With Me!</h6>
                <div className="grid grid-flow-col gap-4">
                        <ul className={"flex justify-start w-full gap-3 items-center pt-2"}>
                            <li className={"hover:scale-110 hover:cursor-pointer transition-transform duration-300"}>
                                <Link href={"https://github.com/argel6767"}><FontAwesomeIcon className={"w-9"}
                                                                                             icon={faGithub}/></Link>
                            </li>
                            <li className={"hover:scale-110 hover:cursor-pointer transition-transform duration-300"}>
                                <Link href={"https://www.linkedin.com/in/argel-hernandez-amaya/"}><FontAwesomeIcon
                                    className={"w-9"} icon={faLinkedin}/></Link>
                            </li>
                            <li className={"hover:scale-110 hover:cursor-pointer transition-transform duration-300"}>
                                <Link href={"mailto:argel6767@gmail.com"}><FontAwesomeIcon className={"w-13"}
                                                                                           icon={faMailBulk}/></Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </footer>
    )
}