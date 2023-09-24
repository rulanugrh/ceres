import React from "react";
import Image from "next/image";

export default function Contact() {
    return (
        <>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 px-4 lg:px-6">
                <Image src={'/assets/contact.png'} width={500} height={500} alt="Home" className="self-center"/>
            </div>
        </div>
        </>
    )
}