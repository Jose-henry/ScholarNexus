"use client";

import { useState } from 'react'; // Import useState hook
import Image from "next/image";

interface Props {
    firstName: string;
}

export default function JobCard({firstName}: Props) {
    const [showTooltip, setShowTooltip] = useState(false); // State to manage tooltip visibility

    return (
        <div className="rounded-sm bg-white shadow-sm border-[1.5px] border-[#d3d6db] p-3"> 
            <div className="flex items-center gap-0 relative">
                <div className="relative">
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
                        <p className="bg-[#eeeeee] p-0.5 px-1 rounded-sm text-[12px] font-semibold absolute top-[-20px] w-fit">
                            Explore services offered and requested by {firstName}.
                        </p>
                    )}
                </div>
                <h2 className="text-[14px] font-bold">Job</h2>
            </div>
            <div>
                {/* Additional content here */}
            </div>
        </div>
    );
}
