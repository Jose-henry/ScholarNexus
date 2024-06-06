"use client"

interface Props {
    videoUrl:string;

};

export default function ThreadCard({videoUrl}:Props) {
    return (
        <div className="bg-gray-400 rounded-[3px] relative overflow-hidden">
            <video src={videoUrl} controls  className="absolute w-full h-full object-cover top-0 left-0"></video>
            
        </div>
    );
}