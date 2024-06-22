"use client";

import { useState } from 'react';
import Image from "next/image";
import ServiceOffered from './serviceOffered';

interface Props {
    firstName: string;
    isCurrentUser: boolean; 
}

export default function JobCard({ firstName, isCurrentUser }: Props) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3"> 
            <div className="flex items-center gap-0 relative">
                <Image 
                    width="17" 
                    height="17" 
                    className="mr-2 cursor-pointer" 
                    src="/assets/info.svg" 
                    alt="info"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                />
                {showTooltip && (
                    <p className="bg-[#eeeeee] p-0.5 px-1 rounded-sm text-[12px] font-semibold absolute top-[-20px] left-[-5px] w-fit">
                        {isCurrentUser 
                            ? "Others can see the services you offered and requested."
                            : `Explore services offered and requested by ${firstName}.`
                        }
                    </p>
                )}
                <h2 className="text-[14px] font-bold">Jobs</h2>
            </div>
            <div>
                <div className='flex items-center gap-2 mt-2'>
                    <div className="flex gap-1 items-center">
                        <Image src="/assets/filter.svg" alt="folder" width={14} height={14} />
                        <p className="text-[13.5px] font-bold text-[#132743]">Filter by: </p>
                    </div>
                    <button className="text-[12.5px] underline font-semibold hover:no-underline">Services offered</button>
                    <button className="text-[12.5px] underline font-semibold hover:no-underline">Services requested</button>
                </div>
                <div className='h-[260px] mt-3 overflow-y-scroll flex flex-col gap-3'>
                    <ServiceOffered jobTitle='Math Tutorial' jobNote='Are you struggling with math concepts and equations? Let me help you conquer those challenges! I offer personalized math tutorials!'
                    creationDate="23/04/2024" deadline="none"/>
                    <ServiceOffered jobTitle='Laundry Services' jobNote="Let me take the load off your shoulders with my reliable laundry services. Whether you need a weekly wash or a one-time deep clean, your clothes will come back fresh and crisp every time! Contact me today and say goodbye to laundry day stress!"
                    creationDate="12/05/2024" deadline="none"/>
                    <ServiceOffered jobTitle='DSA Tuotor needed' jobNote="I'm seeking a data structures and algorithms tutor who can provide personalized guidance to help me grasp key concepts and excel in coding challenges. Preferably someone with a strong background in computer science and a knack for explaining complex ideas clearly."
                    creationDate="17/05/2024" deadline="22/05/2024"/>
                </div>
            </div>
        </div>
    );
}
