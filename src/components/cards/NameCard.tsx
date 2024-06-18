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
        <div className="rounded-sm bg-white shadow-md">
            <h2 className="font-bold text-[13px]">Bio Data</h2>
            <div className="p-4 flex items-center gap-3">
                <div className="w-[150px] h-[150px] rounded-full bg-cover bg-center shadow-sm shadow-[#e0e0e0]]" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div>
                    <h2 className="text-[#142d4c] font-extrabold text-[30px]">{firstName} ({middleName}) {lastName}</h2>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col items-center">
                            <p>0</p>
                            <p className="font-bold">posts</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>200</p>
                            <p className="font-bold">followers</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>300</p>
                            <p className="font-bold">following</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}