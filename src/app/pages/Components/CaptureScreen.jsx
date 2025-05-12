"use client";
import { useNavigate } from 'react-router-dom';
// import Link from "next/link";
import React, { useRef, useState } from 'react';

const CaptureScreen = () => {

    const navigate = useNavigate('');
    const btnRef = useRef(0);
    const secbtnRef = useRef(0);
    const [toggleDiv, settoggleDiv] = useState(false);

    const changeScreen = () => {
        // if(toggleDiv){
        // btnRef.current.className = "big h-60 w-90 p-40 border border-2 border-red-500";
        // }else{
        // secbtnRef.current.className = "small p-10 h-20 w-50 border border-2 border-blue-500 mt-6";
        // }
        settoggleDiv(!toggleDiv);
    }

    // const router = useRouter();

    const handleNavigation = () => {
        navigate("/about");
    };

    return (

        <div>
            {toggleDiv ? (
                <div className="screen">
                    <div className="small h-50 w-100 p-20 border border-2 border-blue-500 bg-blue-300" ref={btnRef}>

                    </div>
                    <button className="click m-3 w-20 h-10 border border-2 rounded-2xl border-green-600 hover:bg-slate-800 hover:text-slate-100 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-30" onClick={changeScreen}>
                        ToggleDiv
                    </button>
                </div>)
                :
                (
                    <div className="screen">
                        <div className="big h-60 w-100 p-40 border border-2 border-red-500 mt-6 bg-red-300" ref={secbtnRef}>

                        </div>
                        <button className="click m-3 w-20 h-10 border border-2 rounded-2xl border-green-600 hover:bg-slate-800 hover:text-slate-100 active:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-30" onClick={changeScreen}>
                            ToggleDiv
                        </button>
                    </div>
                )
            }
            <ul role="list" className="p-6 divide-y divide-slate-200">
                {/* {#each people as person} */}

                {/* <!-- Remove top/bottom padding when first/last child --> */}
                <li className="flex py-4 first:pt-0 last:pb-0">
                    {/* <img className="h-10 w-10 rounded-full" src="#" alt="hello" /> */}
                    <div className="ml-3 overflow-hidden">
                        {/* <p class="text-sm font-medium text-slate-900">{person.name}</p> */}
                        {/* <p class="text-sm text-slate-500 truncate">{person.email}</p> */}
                    </div>
                </li>
                {/* {/each} */}
            </ul>
            <button
                id="clickBtn"
                className="text-slate-300 bg-rose-500 border border-double border-4 px-10 py-2 w-300 h-100 relative rounded-lg group"
                onClick={handleNavigation}
            >
                <span className="absolute inset-0 w-0 h-full transition-all duration-500 ease-out border-2 border-blue-600 group-hover:w-full"></span>
                <span className="absolute inset-0 h-0 w-full transition-all duration-500 ease-out border-2 border-green-700 group-hover:h-full group-hover:top-auto group-hover:bottom-0"></span>
                Click
            </button>
            {/* <Link to="/about" onClick={handleNavigation}>About</Link> */}
        </div>
    )
}

export default CaptureScreen;