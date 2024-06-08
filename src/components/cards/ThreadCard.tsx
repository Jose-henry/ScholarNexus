"use server"

interface Props {
    videoUrl:string;

};

export default  async function ThreadCard({videoUrl}:Props) {
    return (
        <div className="bg-gray-400 rounded-[10px] relative overflow-hidden cursor-pointer">
            <video src={videoUrl} controls autoPlay loop muted className="absolute w-full h-full object-cover top-0 left-0"></video>
            
        </div>
    );
}




