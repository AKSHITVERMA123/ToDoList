// import About from "./pages/Components/About";
// import HomePage from "./pages/Components/HomePage";
// import ReactLogo from "./pages/Components/ReactLogo";
'use client';
// import Link from "next/link";
import '../app/pages/Components/style/style.css';
// import DataFetcherLoading from "./pages/Components/DataFetcherLoading";
// import HomePage from "./pages/Components/HomePage";
// import ErrorHandling from "./pages/Components/ErrorHandling";
import Router from './pages/Components/Routes/Router';
// import ResizeWidthComponent from "./pages/Components/ResizeWidthComponent";

export default function Home() {
  // const arr = [0];
  // const func = (profession: string) => {
  // return profession;
  // };
  // const obj = func.bind(arr);

  // function animatedButton() {
  //   const btn = document.getElementById("clickBtn");
  //   if (btn) btn.style.animation = "colorFulBtn 2s ease-out 2";
  // }

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* <Link legacyBehavior href="/About">
        <a className="text-blue-500">Go to About Page</a>
      </Link>
      {/* <About /> */}
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Router />
          {/* <HomePage />  */}
          {/* <Navbar />  */}
          {/* <ErrorHandling/> */}
          {/* <DataFetcherLoading /> */}
          {/* <ReactLogo/> */}
          {/*
        <span className="flex flex-col">
          <strong>Welcome to Akshit Verma</strong>
          <span>
            I am a {obj("Software Engineer")} and <br></br>
            {obj("Software Developer")}
          </span>
        </span>
        <span className="p-2 text-pink-600">
          Here I want to teach you methods of JavaScript.
        </span>
        <Router/>
        {/* </div>
        {/* <ResizeWidthComponent/>
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={280}
          height={48}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a> 
        </div> */}
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
        </footer>
      </div>
    </>
  );
}
