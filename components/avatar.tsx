
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/fotoAboutMe.png" width="380" height="380" className="w-full h-full " alt="Particles " />
        </MotionTransition>
    )
}