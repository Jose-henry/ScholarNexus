"use client"

import {Avatar} from 
"@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Image from "next/image";

interface Props {
    task: string;
}

export default function TaskDashboard({task}: Props) {
    return (
        <div className=""> 
            <Image width="20" height="20" src="/assets/completed.svg" alt="tikcet"/>
            <p>{task}</p>
        </div>
    );
}