import dataoneLogo from "../../../public/img/dataone-org-logo.png";
import nceasLogo from "../../../public/img/nceas-org-logo.png";
import csjLogo from "../../../public/img/csjx-logo.jpeg";
import csjxLogo from "../../../public/img/csj-logo.png";
import RepositoryCard from "./RepositoryCard";

const logos = [
    { name: "https://github.com/DataONEorg", logo: dataoneLogo },
    { name: "https://github.com/NCEAS", logo: nceasLogo },
    { name: "https://github.com/christopher-s-jones", logo: csjLogo },
    { name: "https://github.com/csjx", logo: csjxLogo },
]

let summary: Summary = {} as Summary;
let commits: number = 0;
let repos: number = 0;
let otherContribs: number = 0;
let repositories: Repository[] = [] as Repository[];

export default function GithubSummary({ data }) {

    summary = data as Summary;
    commits = summary.totalCommitContributions;
    repos = summary.totalRepositories;
    otherContribs = summary.totalOtherContributions;
    repositories = summary.repositories;


    return (
        <>
            <div
                className="flex flex-col md:flex-row gap-20 items-center justify-between w-full"
            >
                <div
                    className="w-2/3 md:w-full rounded-lg
                    bg-blue-100 dark:bg-blue-950 border-slate-300 dark:border-slate-800
                    lg:min-h-[200px] min-w-1/4 lg:min-w-40"
                >
                    <p
                        id="commits"
                        className="text-center items-center px-30 pt-10
                text-3xl md:text-5xl font-extrabold font-sans text-sky-600"
                    >
                        {commits}
                    </p>
                    <p
                        className="font-sans text-md 2xl:text-xl 3xl:text-2xl py-5 lg:py-10
                text-slate-600 dark:text-slate-400"
                    >
                        repository commits
                    </p>
                </div>
                <div
                    className="w-2/3 md:w-full rounded-lg
            bg-blue-100 dark:bg-blue-950 border-slate-300 dark:border-slate-800
            lg:min-h-[200px] min-w-1/4 lg:min-w-40"
                >
                    <p
                        id="repos"
                        className="text-center items-center px-30 pt-10
                text-3xl md:text-5xl font-extrabold font-sans text-sky-600"
                    >
                        {repos}
                    </p>
                    <p
                        className="font-sans text-md 2xl:text-xl 3xl:text-2xl py-5 lg:py-10
                text-slate-600 dark:text-slate-400"
                    >
                        repository count
                    </p>
                </div>
                <div
                    className="w-2/3 md:w-full rounded-lg
            bg-blue-100 dark:bg-blue-950 border-slate-300 dark:border-slate-800
            lg:min-h-[200px] min-w-1/4 lg:min-w-40"
                >
                    <p
                        id="othercontribs"
                        className="text-center items-center px-30 pt-10
                text-3xl md:text-5xl font-extrabold font-sans text-sky-600"
                    >
                        {otherContribs}
                    </p>
                    <p
                        className="font-sans text-md 2xl:text-xl 3xl:text-2xl py-5 lg:py-10
                text-slate-600 dark:text-slate-400"
                    >
                        other contributions
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4 w-full">
                {/* Use an immediately invoked function expression for the switch */}
                {(() => {
                    return repositories.map((repository: Repository, index) => {
                        // Extract the organization (or user) name from the repo URL
                        let organization = (repository.url.split("/")[3]).toLowerCase();
                        switch (organization) {
                            case "dataoneorg":
                                return (
                                    <RepositoryCard repository={repository} imageURL="/img/dataone-org-logo.png" />
                                );
                            case "nceas":
                                return (
                                    <RepositoryCard repository={repository} imageURL="/img/nceas-org-logo.png"/>
                                );
                            case "christopher-s-jones":
                                return (
                                    <RepositoryCard repository={repository} imageURL="/img/csj-logo.png"/>
                                );
                            case "csjx":
                                return (
                                    <RepositoryCard repository={repository} imageURL="/img/csjx-logo.jpeg"/>
                                );
                            default:
                                return null;
                        }
                    });
                })()}
            </div>
        </>
    )
}