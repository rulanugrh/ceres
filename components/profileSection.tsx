import React from "react";
import { HiArrowNarrowRight, HiChevronDoubleRight } from "react-icons/hi"
import CardProfile from "@/lib/forCard";

export default function ProfileSection() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 pt-8 pb-8 shadow-lg shadow-black/50">
                <div className="flex flex-wrap pb-8">
                    <div className="px-6">
                        <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                            <h1 className="pt-1 text-teal-500 invisible lg:visible"><HiArrowNarrowRight /></h1>
                            <h1 className="font-firaCode font-semibold lg:text-xl text-md"><span className="text-blue-300 inline">manager </span><span className="inline text-blue-800">git:(</span><span className="inline text-red-600">master</span><span className="text-blue-800">)</span> $ <span className="inline-block text-white">./print.o</span></h1>
                        </a>
                    </div>
                    <div className="px-6 grid grid-cols-1 gap-4 lg:grid-cols-3 pt-5">
                        
                        <CardProfile Name="Gilang Putra" Uname="@glngputra" Desc="Leader of IT Club and Networking Enginner. Heyy, welcome to itclub 👋" Color="danger" Image="https://media.discordapp.net/attachments/1125397316971528272/1140492754703614042/7ac1b4ed-125c-4e4b-9fd1-d9174b8e1808.png?width=255&height=453" Jobs="#TinjuDibalasTinju" LinkIG="https://instagram.com" TTL="03 Feb 2005" LinkProfile="https://chentaury-card.vercel.app"/>
                        <CardProfile Name="Fawaaz Nurul" Uname="@fwaziz" Desc="Vice Chairman of IT Club and MOBA Player. Heyy, welcome to itclub 👋" Color="primary" Image="https://media.discordapp.net/attachments/1125397316971528272/1150272589156077648/355104567_807159264035393_2635183912194957517_n.png?width=575&height=575" Jobs="#BusetKataGuaMah" LinkIG="https://instagram.com" TTL="31 Jun 2006" LinkProfile="https://chentaury-card.vercel.app"/>
                        <CardProfile Name="Andri Ghifari" Uname="@andrigfry" Desc="Treasurer of IT Club and Cloud Enthusiast. Heyy, welcome to itclub 👋" Color="warning" Image="https://media.discordapp.net/attachments/1125397316971528272/1140493758085988372/ec24ec0c-7c47-4844-8540-25b3abd65caf.png?width=255&height=454" Jobs="#Hah?" LinkIG="https://instagram.com" TTL="06 Jun 2006"LinkProfile="https://chentaury-card.vercel.app"/>
                        <CardProfile Name="Dina Amelia" Uname="@dinamelia" Desc="Secretary of IT Club and Brand Ambasador. Heyy, welcome to itclub 👋" Color="secondary" Image="https://media.discordapp.net/attachments/1125397316971528272/1150272922548711474/370458481_852775633134896_7515706922328557590_n.png?width=575&height=575" Jobs="#XoXoo" LinkIG="https://instagram.com" TTL="02 Mar 2007" LinkProfile="https://chentaury-card.vercel.app"/>
                        <CardProfile Name="Sukarno Adi" Uname="@kanon" Desc="Secretary of IT Club and MOBA Player. Heyy, welcome to itclub 👋" Color="primary" Image="https://media.discordapp.net/attachments/1125397316971528272/1140482923833864272/527bb113-4661-4aa8-92a2-572bb22fc68e.png?width=342&height=454" Jobs="#ApaCobaBang" LinkIG="https://instagram.com" TTL="22 Nov 2005" LinkProfile="https://chentaury-card.vercel.app"/>
                        <CardProfile Name="Shivan Putra" Uname="@vann" Desc="Treasurer of IT Club and MVP IT Club. Heyy, welcome to itclub 👋" Color="warning" Image="https://media.discordapp.net/attachments/1125397316971528272/1140500000900657233/9a4b29c5-0af3-4efa-ac5b-f44a3c6604f0.png?width=342&height=454" Jobs="#BangTarikinGak?" LinkIG="https://instagram.com" TTL="30 Jan 2007" LinkProfile="https://chentaury-card.vercel.app"/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
