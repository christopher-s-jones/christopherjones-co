export default function RepositoryCard({ repository, imageURL }) {

    return (
        <div className="flex flex-row gap-1 items-center
            bg-blue-200 dark:bg-blue-960
            rounded-lg p-2">
            <img
                className="size-8 mx-2 rounded-full 
                    border border-blue-300 dark:border-blue-975
                    bg-slate-100"
                src={imageURL}
            />
            <a
                target="offline"
                className="text-sky-500 text-underline"
                href={repository.url}
            >
                {repository.name}
            </a>
        </div>
    )
}