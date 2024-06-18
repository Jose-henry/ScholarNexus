"use client"

import {Avatar} from 
"@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";

interface Props {
    image: Url;
    userName: string;
    firstName: string;
    lastName: string;
    middleName: string;
}

export default function NameCard({userName, firstName, lastName, middleName, image}: Props) {
    return (
        <div className="border border-black w-full"> 
            <Avatar showFallback isBordered radius="full" src="{image}" size="sm" className='cursor-pointer bg-slate-300 h-[25px] w-[25px]'>
            </Avatar>
            <div>
                <h2>First Name: {firstName}</h2>
                <h2>Middle Name: {middleName}</h2>
                <h2>Last Name: {lastName}</h2>
                <h2>Username: {userName}</h2>
            </div>
        </div>
    );
}