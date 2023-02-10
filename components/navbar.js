
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { MenuIcon } from "./icons";
import { useEffect, useState } from "react";

const buttonData = {
    "/": {
        "name": "home",
        "x": 0,
        "width": '59px'
    },
    "/about": {
        "name": "about",
        "x": 60,
        "width": "61px"
    },
    "/projects": {
        "name": "projects",
        "x": 120,
        "width": "77px"
    },
    "/posts": {
        "name": "posts",
        "x": 198,
        "width": "58px"
    }
}

export default function Navbar() {


    let pathName = usePathname();
    return <>
        <aside>
            <nav className="w-full h-16">
                <div className="flex items-center px-6 h-full">
                    <div className="grow">
                        <Link href="/"><h2 className="m-0 hover:cursor-pointer">{"<db>"}</h2></Link>
                    </div>
                    <div className="flex flex-row items-start relative pb-0 fade ">
                        <div className="flex relative w-[256px] flex-row items-center space-x-0 mb-2 mt-2">
                            <div key="back-slider" className={`absolute h-[30px] transition-all bg-neutral-800 z-[-1] rounded-md left-0`} style={{width: buttonData[pathName].width, left: buttonData[pathName].x}}></div>
                            {Object.entries(buttonData).map(([path, { name }]) => {
                                const isActive = path === pathName;
                                return <div className={`${isActive ? "text-green-400" : ""} rounded-md py-[10px] px-[10px] `}>
                                    <Link key={path} href={path}> <h4>{name}</h4> </Link>

                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </nav >
        </aside >
    </>
}