import React from 'react';
import Image from "next/image";
// import myPhoto from "../images/Banner.png";

const HomePage = () => {
    return (
        <div>
            <h1 className="bg-white-200">
                Welcome you to my {" "}
                <Image
                    className=":invert bg-orange-500"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={200}
                    height={50}
                    priority
                />
                Tutorials
            </h1>
            <h1 className="text-sky-500 underline hover:decoration-red-500 w-50 h-30 bg-emerald-200">
                My Next App
            </h1>
            <p className="text-red-600 font-bold">
                This is my First Next APP Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Obcaecati magni, numquam deserunt error quia iusto
                ducimus, odit quam aspernatur quos nemo et dolorem distinctio maiores
                ipsam voluptatum dolor corporis facilis saepe, culpa illum alias
                cupiditate. In corporis sint enim repudiandae, ipsum, unde sit magnam
                temporibus, perspiciatis itaque vitae quo? vkrekrk<br></br>
                Hello welcome to all, I am your Programming Teacher. You will teach by
                me from tody onwards.
            </p>
            {/* <Image
                className="dark:invert"
                src={myPhoto}
                alt="Akshit Verma logo"
                width={280}
                height={48}
                priority
            /> */}
        </div>
    )
}

export default HomePage;