"use client"

import {Avatar} from 
"@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface Props {
    image: string;
    userName: string;
    firstName: string;
    lastName: string;
    middleName: string;
}

export default function NameCard({userName, firstName, lastName, middleName, image}: Props) {
    return (
        <div className="rounded-sm bg-white shadow-md p-3
        "> 
            <Avatar
                isBordered
                showFallback
                color="secondary"
                className="w-20 h-20 text-large mb-[10px] cursor-pointer"
                src={image}
            />
            <div>
                <h2>First Name: {firstName}</h2>
                <h2>Middle Name: {middleName}</h2>
                <h2>Last Name: {lastName}</h2>
                <h2>Username: {userName}</h2>
            </div>
        </div>
    );
}