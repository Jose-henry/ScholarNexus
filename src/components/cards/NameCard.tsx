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
    email: string;
}

export default function NameCard({userName, firstName, lastName, middleName, image, email}: Props) {
    return (
        <div className="rounded-sm bg-white shadow-md p-4 flex flex-col gap-2">
            <h2 className="text-[14px] font-bold">Profile</h2>
            <div className="flex items-center gap-3">
                <div className="w-[130px] h-[130px] rounded-full bg-cover bg-center shadow-sm shadow-[#e0e0e0]]" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <div>
                    <h2 className="text-[#142d4c] font-extrabold text-[30px] text-wrap">{firstName} ({middleName}) {lastName}</h2>
                    <div className="flex text-center gap-3">
                        <h2 className="font-semibold text-[13px]">Username: @<span className="text-[13px] font-semibold text-[#385170]">{userName}</span></h2>
                        <div className="flex gap-2 items-center">
                            <Image src="/assets/email-icon.svg" alt="" height={15} width={15}></Image>
                            <p className="text-[13px] font-semibold">{email}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t-[1px] border-t-black mt-2">
                        <div className="flex flex-col items-center">
                            <p>0</p>
                            <p className="font-bold">uploads</p>
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