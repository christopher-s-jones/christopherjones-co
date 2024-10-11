export default function MoonIcon({ visible }: { visible: boolean }) {

    return (
        <span className={visible ? "w-full dark:inline" : "hidden"}>
            {/* <!-- Moon Icon--> */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-6 3xl:size-10 dark:hover:fill-amber-400 dark:fill-white"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                ></path>
            </svg>
        </span>
    )
}