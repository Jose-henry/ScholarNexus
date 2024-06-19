"use client";

import { useState } from 'react'; // Import useState hook
import Image from "next/image"

interface Props {
    firstName: string;
}

export default function JobCard({firstName}: Props) {
    const [showTooltip, setShowTooltip] = useState(false); // State to manage tooltip visibility

    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3"> 
            <div className="flex items-center gap-0 relative">
                <Image 
                    width="17" 
                    height="17" 
                    className="mr-2 cursor-pointer" 
                    src="/assets/info.svg" 
                    alt="info"
                    onMouseEnter={() => setShowTooltip(true)} // Show tooltip on mouse enter
                    onMouseLeave={() => setShowTooltip(false)} // Hide tooltip on mouse leave
                />
                {showTooltip && (
                    <p className="bg-[#eeeeee] p-0.5 px-1 rounded-sm text-[12px] font-semibold absolute top-[-20px] left-[-5px] w-fit">
                        Explore services offered and requested by {firstName}.
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
                <div className='border border-black h-[260px] mt-3'>

                </div>
            </div>
        </div>
    );
}
