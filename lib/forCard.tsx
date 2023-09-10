import React from "react";
import {Card, CardHeader, CardBody, Avatar, Button, CardFooter} from "@nextui-org/react";

interface Props {
    Name: string
    Uname: string
    Desc: string
    Image: string
    LinkIG: string
    Jobs: string
    TTL: string
    LinkProfile: string
    Color: "primary" | "success" | "default" | "secondary" | "warning" | "danger"
}

export default function CardProfile(props: Props) {
    return (
        <div className="shadow-md shadow-shadowBox">
            <Card radius="sm" className="max-w-[500px] pt-5 pb-5 px-4 backdrop-filter backdrop-blur-lg bg-opacity-25 bg-bgColor ">
                <CardHeader className="justify-between mb-2">
                    <div className="flex gap-5 ">
                        <Avatar isBordered size="md" radius="full" color={`${props.Color}`} src={`${props.Image}`} className="self-center"/>
                        
                        <div className="px-4 flex flex-col items-start justify-center">
                            <h3 className="font-firaCode text-sm lg:text-xl font-bold leading-none text-shadowBox">{props.Name}</h3>
                            <h4 className="font-firaCode text-sm lg:text-lg tracking-tight text-white">{props.TTL}</h4>
                        </div>
                    </div>
                    <Button className="text-foreground font-firaCode" color={`${props.Color}`} radius="full" size="md"> 
                        <a href={`${props.LinkProfile}`}  className="text-white font-firaCode">Ikuti</a>
                    </Button>
                    
                </CardHeader>
                <CardBody className="px-3 py-0 text-sm lg:text-lg font-firaCode text-gray-400">
                    <p>{props.Desc}</p>
                    <span className="pt-2 pb-2">{props.Jobs}</span>
                </CardBody>
                <CardFooter> 
                    <div className="w-1/2">
                        <a href={`${props.LinkIG}`} className="hover:text-blue-500  text-white lg:text-lg text-sm font-firaCode font-thin">{props.Uname}</a>
                    </div> 
                </CardFooter>
            </Card>
        </div>
    )
}