
import Link from "next/link";

export default async function NotFound ()  {

    return (
        <main className={"flex justify-center items-center h-screen motion-preset-fade transition-opacity  motion-delay-200"}>
            <div className={"flex flex-col items-center justify-center gap-9 rounded-xl shadow-xl p-6 bg-slate-50"}>
                <h1 className={"text-5xl font-semibold"}>This page does not exist!</h1>
                <Link className={"btn btn-primary"} href="/">Go Back Home </Link>
            </div>
        </main>
    )
}