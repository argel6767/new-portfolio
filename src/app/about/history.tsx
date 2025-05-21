import INFO from "@/data/user";

interface Education {
    school: string;
    major: string;
    dates: string
}

interface SchoolInfoProps {
    education: Education;
}

const SchoolInfo = ({education}: SchoolInfoProps) => {
    return (
        <span className={"flex flex-col justify-start text-gray-400 gap-2 font-bold"}>
            <h3 className={"text-md"}>{education.school}</h3>
            <div className={"flex text-xs font-semibold  justify-start gap-10"}>
                <p>{education.major}</p>
                <p>{education.dates}</p>
            </div>
        </span>
    )
}

export const SchoolInfoContainer = () => {
    return (
        <main className={"flex flex-col justify-start gap-6"}>
            {INFO.educationHistory.map((education,i) => (
                <SchoolInfo education={education} key={i} />))}
        </main>
    )
}

interface Job {
    employer: string,
    position: string,
    dates: string,
    accomplishments: string[],
}

interface WorkInfoProps {
    job: Job;
}

const JobInfo = ({job}: WorkInfoProps) => {
    return (
        <span className={"flex flex-col justify-start text-gray-400 gap-2"}>
            <h3 className={"text-md font-bold"}>{job.position}</h3>
            <div className={"flex text-xs font-semibold  justify-start gap-10"}>
                <p>{job.employer}</p>
                <p>{job.dates}</p>
            </div>
            <p className={"text-xs"}>Accomplishments</p>
            <u className={"flex flex-col justify-start gap-2 text-xs no-underline"}>
                {job.accomplishments.map((accomplishment,i) => (
                    <li key={i}>{accomplishment}</li>
                ))}
            </u>
        </span>
    )
}

export const JobInfoContainer = () => {
    return (
        <main className={"flex flex-col justify-start gap-6"}>
            {INFO.workHistory.map((workInfo, i) => (
                <JobInfo job={workInfo} key={i} />
            ))}
        </main>
    )
}