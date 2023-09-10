import React from "react";
import { Avatar, Link } from '@nextui-org/react'
import Image from "next/image";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Organizer",
        "Player",
      ];
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-25 pt-5 pb-5 shadow-lg shadow-black/40">
                
                <div className="flex flex-wrap">
                    <div className="px-6 lg:w-3/4 w-1/2 self-center">
                        <Link href="/" className="text-white font-bold font-firaCode lg:text-xl text-sm">
                            <img color="primary"  alt="profile itc" src={"https://media.discordapp.net/attachments/1125700600387084318/1137618207851675648/slime.jpg?width=359&height=359"} className="inline rounded-full lg:w-[50px] w-[30px] border-2 border-boxColor" />
                            <span className="ml-2">IT Club</span>
                        </Link>
                    </div>
                    <div className="lg:px-20 px-4 lg:w-1/4 w-1/2 space-x-2 lg:space-x-8 lg:self-center">
                        <Link href={"/profile"} className="text-white font-bold font-firaCode lg:text-xl text-sm">
                            Hello
                        </Link>
                        <Link href={"/player"} className="text-white font-bold font-firaCode lg:text-xl text-sm">
                            Player
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
