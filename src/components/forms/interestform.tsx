"use client"
import React, { useState } from "react";
import {usePathname, useRouter} from "next/navigation"
import { Button } from "@nextui-org/button";
import InterestBtn from "@/components/forms/InterestBtn";
import Image from "next/image";
import { updateInterests } from "@/lib/actions/user.action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import path from "path";




const interests = [
    {
        key:"Art and Design",
        value: ["Graphic Design", "Painting", "Photography", "Sculpture", "Drawing",
            "Illustration", "Animation", "Fashion Design", "Interior Design", "Architecture"]
        },

        {
            key: "Business and Entrepreneurship",
            value: ["Entrepreneurship", "Finance", "Marketing", "Management", "Consulting", "Finance", "Entrepreneurship"]
        }


]


interface props{
    clerkId: string
}

export default function InterestForm(   {clerkId}: props) {
    const router = useRouter();
    const pathname = usePathname();
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [count, setCount] = useState(0);



    
    const onSubmit = async () => {
        if (count < 1) {
          toast.error("Please select at least one");
          return;
        }
        if (count > 5) {
          toast.error("You can only select at most five interests");
          return;
        }
        await updateInterests(clerkId, selectedInterests,pathname);
        toast.success("Interests updated successfully!");
        router.push("/onboarding");
        if(pathname === '/profile/edit'){
            router.back();
        } else {
          router.push('/onboarding');
        }
      };
    


      const handleSelect = (text: string, selected: boolean) => {
        if (selected) {
          if (count < 5) {
            setSelectedInterests((prevInterests) => [...prevInterests, text]);
            setCount((prevCount) => prevCount + 1);
          } else {
            toast.error("You can only select at most five interests");
          }
        } else {
          setSelectedInterests((prevInterests) => prevInterests.filter((interest) => interest !== text));
          setCount((prevCount) => prevCount - 1);
        }
      };

  const deselectAll = () => {
    setSelectedInterests([]);
    setCount(0);
  };





    return (
        <>
            <div className="flex flex-col gap-10 h-[530px] pb-5 pt-5 align-middle overflow-scroll">
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Art and Design</h2>
                        <Image width="20" height="20" src="/assets/art-icon.svg" alt="art"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Graphic Design" selected={selectedInterests.includes("Graphic Design")} onSelect={handleSelect} />
                        <InterestBtn text="Painting" selected={selectedInterests.includes("Painting")} onSelect={handleSelect} />
                        <InterestBtn text="Photography" selected={selectedInterests.includes("Photography")} onSelect={handleSelect} />
                        <InterestBtn text="Scultpture" selected={selectedInterests.includes("Scultpture")} onSelect={handleSelect} />
                        <InterestBtn text="Drawing" selected={selectedInterests.includes("Drawing")} onSelect={handleSelect} />
                        <InterestBtn text="Illustration" selected={selectedInterests.includes("Illustration")} onSelect={handleSelect} />
                        <InterestBtn text="Animation"  selected={selectedInterests.includes("Animation")} onSelect={handleSelect}/>
                        <InterestBtn text="Fashion Design" selected={selectedInterests.includes("Fashion Design")} onSelect={handleSelect} />
                        <InterestBtn text="Interior Design" selected={selectedInterests.includes("Interior Design")} onSelect={handleSelect} />
                        <InterestBtn text="Architecture" selected ={selectedInterests.includes("Architecture")} onSelect={handleSelect}/>
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Business and Entrepreneurship</h2>
                        <Image width="20" height="20" src="/assets/business-icon.svg" alt="business"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Marketing" selected={selectedInterests.includes("Marketing")} onSelect={handleSelect}/>
                        <InterestBtn text="Finance" selected={selectedInterests.includes("Finance")} onSelect={handleSelect} />
                        <InterestBtn text="Management" selected={selectedInterests.includes("Management")} onSelect={handleSelect} />
                        <InterestBtn text="Entrepreneurship" selected={selectedInterests.includes("Entrepreneurship")} onSelect={handleSelect} />
                        <InterestBtn text="Leadership"  selected={selectedInterests.includes("Leadership")} onSelect={handleSelect} />
                        <InterestBtn text="Human Resoources" selected={selectedInterests.includes("Human Resoources")} onSelect={handleSelect} />
                        <InterestBtn text="International Business" selected={selectedInterests.includes("International Business")} onSelect={handleSelect} />
                        <InterestBtn text="E-Commerce" selected={selectedInterests.includes("E-Commerce")} onSelect={handleSelect} />
                        <InterestBtn text="Supply Chain" selected={selectedInterests.includes("Supply Chain")} onSelect={handleSelect} />
                        <InterestBtn text="Business Analytics" selected={selectedInterests.includes("Business Analytics")} onSelect={handleSelect} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Computer Science and Technology</h2>
                        <Image width="20" height="20" src="/assets/tech-icon.svg" alt="tech"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Programming" selected={selectedInterests.includes("Programming")} onSelect={handleSelect} />
                        <InterestBtn text="Web Development" selected={selectedInterests.includes("Web Development")} onSelect={handleSelect} />
                        <InterestBtn text="Mobile App Development" selected={selectedInterests.includes("Mobile App Development")} onSelect={handleSelect} />
                        <InterestBtn text="Artificial Intelligence" selected={selectedInterests.includes("Artificial Intelligence")} onSelect={handleSelect} />
                        <InterestBtn text="Machine Learning" selected={selectedInterests.includes("Machine Learning")} onSelect={handleSelect} />
                        <InterestBtn text="Data Science" selected={selectedInterests.includes("Data Science")} onSelect={handleSelect} />
                        <InterestBtn text="Cybersecurity" selected={selectedInterests.includes("Cybersecurity")} onSelect={handleSelect} />
                        <InterestBtn text="Networking" selected={selectedInterests.includes("Networking")} onSelect={handleSelect} />
                        <InterestBtn text="Data Management" selected={selectedInterests.includes("Data Management")} onSelect={handleSelect} />
                        <InterestBtn text="Software Engineering" selected={selectedInterests.includes("Software Engineering")} onSelect={handleSelect} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Engineering</h2>
                        <Image width="20" height="20" src="/assets/eng-icon.svg" alt="enginering"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Mechanical Engineering" selected={selectedInterests.includes("Mechanical Engineering")} onSelect={handleSelect} />
                        <InterestBtn text="Electrical Engineering" selected={selectedInterests.includes("Electrical Engineering")} onSelect={handleSelect} />
                        <InterestBtn text="Civil Engineering" selected={selectedInterests.includes("Civil Engineering")} onSelect={handleSelect} />
                        <InterestBtn text="Chemical Engineering" selected={selectedInterests.includes("Chemical Engineering")} onSelect={handleSelect} />
                        <InterestBtn text="Aerospace Engineering" selected={selectedInterests.includes("Aerospace Engineering")} onSelect={handleSelect} />
                        <InterestBtn text="Biomedical Engineering" selected={selectedInterests.includes("Biomedical Engineering")} onSelect={handleSelect} />
                        <InterestBtn text="Computer Engineering" selected={selectedInterests.includes("Computer Engineering")} onSelect={handleSelect} />
                        <InterestBtn text="Industrial Engineering" selected={selectedInterests.includes("Industrial Engineering")} onSelect={handleSelect} />
                        <InterestBtn text="Material Science" selected={selectedInterests.includes("Material Science")} onSelect={handleSelect} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Creative Writing and Journalism</h2>
                        <Image width="20" height="20" src="/assets/writing-icon.svg" alt="writing"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Fiction Writing" selected={selectedInterests.includes("Fiction Writing")} onSelect={handleSelect} />
                        <InterestBtn text="Poetry" selected={selectedInterests.includes("Poetry")} onSelect={handleSelect} />
                        <InterestBtn text="Playwriting" selected={selectedInterests.includes("Playwriting")} onSelect={handleSelect} />
                        <InterestBtn text="Screenwriting" selected={selectedInterests.includes("Screenwriting")} onSelect={handleSelect} />
                        <InterestBtn text="Journalism" selected={selectedInterests.includes("Journalism")} onSelect={handleSelect} />
                        <InterestBtn text="Editing" selected={selectedInterests.includes("Editing")} onSelect={handleSelect} />
                        <InterestBtn text="Publishing" selected={selectedInterests.includes("Publishing")} onSelect={handleSelect} />
                        <InterestBtn text="Nonfiction Writing" selected={selectedInterests.includes("Nonfiction Writing")} onSelect={handleSelect} />
                        <InterestBtn text="Blogging" selected={selectedInterests.includes("Blogging")} onSelect={handleSelect} />
                        <InterestBtn text="Copywriting" selected={selectedInterests.includes("Copywriting")} onSelect={handleSelect} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-sm rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Environmental Science and Sustainability</h2>
                        <Image width="20" height="20" src="/assets/sustainability-icon.svg" alt="sustainability"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Conservation" selected={selectedInterests.includes("Conservation")} onSelect={handleSelect} />
                        <InterestBtn text="Ecology" selected={selectedInterests.includes("Ecology")} onSelect={handleSelect} />
                        <InterestBtn text="Environmental Policy" selected={selectedInterests.includes("Environmental Policy")} onSelect={handleSelect} />
                        <InterestBtn text="Sustainability" selected={selectedInterests.includes("Sustainability")} onSelect={handleSelect} />
                        <InterestBtn text="Climate Change"  selected={selectedInterests.includes("Climate Change")} onSelect={handleSelect} />
                        <InterestBtn text="Renewble Energy" selected={selectedInterests.includes("Renewable Energy")} onSelect={handleSelect} />
                        <InterestBtn text="Green Technology" selected={selectedInterests.includes("Green Technology")} onSelect={handleSelect} />
                        <InterestBtn text="Wildlife Management" selected={selectedInterests.includes("Wildlife Management")} onSelect={handleSelect} />
                        <InterestBtn text="Forestry" selected={selectedInterests.includes("Forestry")} onSelect={handleSelect} />
                        <InterestBtn text="Geology" selected={selectedInterests.includes("Geology")} onSelect={handleSelect} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Health and Wellness</h2>
                        <Image width="20" height="20" src="/assets/health-icon.svg" alt="health"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Medicine" selected={selectedInterests.includes("Medicine")} onSelect={handleSelect} />
                        <InterestBtn text="Nursng" selected={selectedInterests.includes("Nursing")} onSelect={handleSelect} />
                        <InterestBtn text="Public Health" selected={selectedInterests.includes("Public Health")} onSelect={handleSelect} />
                        <InterestBtn text="Health Education" selected={selectedInterests.includes("Health Education")} onSelect={handleSelect} />
                        <InterestBtn text="Nutrition" selected={selectedInterests.includes("Nutrition")} onSelect={handleSelect} />
                        <InterestBtn text="Fitness" selected={selectedInterests.includes("Fitness")} onSelect={handleSelect} />
                        <InterestBtn text="Mental Health" selected={selectedInterests.includes("Mental Health")} onSelect={handleSelect} />
                        <InterestBtn text="Counseling" selected={selectedInterests.includes("Counseling")} onSelect={handleSelect} />
                        <InterestBtn text="Healthcare Management" selected={selectedInterests.includes("Healthcare Management")} onSelect={handleSelect} />
                        <InterestBtn text="Health Policy" selected={selectedInterests.includes("Health Policy")} onSelect={handleSelect} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Mathematics</h2>
                        <Image width="20" height="20" src="/assets/math-icon.svg" alt="mathematics"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Pure Mathematics" selected={selectedInterests.includes("Pure Mathematics")} onSelect={handleSelect} />
                        <InterestBtn text="Applied Mathematics" selected={selectedInterests.includes("Applied Mathematics")} onSelect={handleSelect} />
                        <InterestBtn text="Statistics" selected={selectedInterests.includes("Statistics")} onSelect={handleSelect} />
                        <InterestBtn text="Probability" selected={selectedInterests.includes("Probability")} onSelect={handleSelect} />
                        <InterestBtn text="Algebra" selected={selectedInterests.includes("Algebra")} onSelect={handleSelect} />
                        <InterestBtn text="Geometry" selected={selectedInterests.includes("Geometry")} onSelect={handleSelect} />
                        <InterestBtn text="Calculus" selected={selectedInterests.includes("Calculus")} onSelect={handleSelect} />
                        <InterestBtn text="Number Theory" selected={selectedInterests.includes("Number Theory")} onSelect={handleSelect} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1 items-center">
                        <h2 className="text-[13px] font-bold">Humanities</h2>
                        <Image width="28" height="28" src="/assets/humanities-icon.svg" alt="humanities"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="History" selected={selectedInterests.includes("History")} onSelect={handleSelect} />
                        <InterestBtn text="Philosophy" selected={selectedInterests.includes("Philosophy")} onSelect={handleSelect} />
                        <InterestBtn text="Linguistics" selected={selectedInterests.includes("Linguistics")} onSelect={handleSelect} />
                        <InterestBtn text="Anthropology" selected={selectedInterests.includes("Anthropology")} onSelect={handleSelect} />
                        <InterestBtn text="Sociology" selected={selectedInterests.includes("Sociology")} onSelect={handleSelect} />
                        <InterestBtn text="Psychology" selected={selectedInterests.includes("Psychology")} onSelect={handleSelect} />
                        <InterestBtn text="Political Science" selected={selectedInterests.includes("Political Science")} onSelect={handleSelect} />
                        <InterestBtn text="International Relations" selected={selectedInterests.includes("International Relations")} onSelect={handleSelect} />
                        <InterestBtn text="Cultural Studies" selected={selectedInterests.includes("Cultural Studies")} onSelect={handleSelect} />
                        <InterestBtn text="Theology" selected={selectedInterests.includes("Theology")} onSelect={handleSelect} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
            <Button
            size="sm"
            className="bg-[#393e46] text-white hover:bg-[#606470] cursor-pointer rounded-sm text-[13.5px] font-bold shadow-lg w-[200px] mx-auto"
            onClick={onSubmit}
        >
                Next
                <Image width="20" height="20" src="/assets/next-icon.svg" alt="next"/>
            </Button>
            { selectedInterests.length > 0 &&( <Button
          size="sm"
          className="bg-[#393e46] text-white hover:bg-[#606470] cursor-pointer rounded-sm text-[13.5px] font-bold shadow-lg w-[200px] mx-auto"
          onClick={deselectAll}
        >
          Deselect All
          <Image width="16" height="16" src="/assets/deselect-icon.svg" alt="deselect"/>
        </Button>)}
        </div>
        

        </>
    )
}