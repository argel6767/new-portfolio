export const LanguageStats = () => {
    return (
        <main className={"py-4"}>
            <div className={"text-center"}>
                <img
                    className="mx-auto"
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=argel6767&show_icons=true&locale=en&layout=compact"
                    alt="argel6767 most used languages"
                />
            </div>
            <div className={"text-center"}>
                ⚡️ by <a className={"text-gray-500 hover:underline hover:underline-offset-4"} target="_blank" href="https://git.io/readme-stats"
                         rel="noopener noreferrer">git.io/readme-stats</a>
            </div>
        </main>

    )
}