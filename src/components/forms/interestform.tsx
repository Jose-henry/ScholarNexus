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
      key: "Art and Design",
      icon: "/assets/art-icon.svg",
      value: [
        "Graphic Design",
        "Painting",
        "Photography",
        "Sculpture",
        "Drawing",
        "Illustration",
        "Animation",
        "Fashion Design",
        "Interior Design",
        "Architecture",
      ],
    },
    {
      key: "Business and Entrepreneurship",
      icon: "/assets/business-icon.svg",
      value: [
        "Entrepreneurship",
        "Marketing",
        "Management",
        "Consulting",
        "Finance",
        "Leadership",
        "Human Resources",
        "International Business",
        "E-Commerce",
        "Supply Chain",
        "Business Analytics",
      ],
    },
    {
      key: "Computer Science and Technology",
      icon: "/assets/tech-icon.svg",
      value: [
        "Programming",
        "Web Development",
        "Mobile App Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Cybersecurity",
        "Networking",
        "Data Management",
        "Software Engineering",
      ],
    },
    {
      key: "Engineering",
      icon: "/assets/eng-icon.svg",
      value: [
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Aerospace Engineering",
        "Biomedical Engineering",
        "Computer Engineering",
        "Industrial Engineering",
        "Material Science",
      ],
    },
    {
      key: "Creative Writing and Journalism",
      icon: "/assets/writing-icon.svg",
      value: [
        "Fiction Writing",
        "Poetry",
        "Playwriting",
        "Screenwriting",
        "Journalism",
        "Editing",
        "Publishing",
        "Nonfiction Writing",
        "Blogging",
        "Copywriting",
      ],
    },
    {
      key: "Environmental Science and Sustainability",
      icon: "/assets/sustainability-icon.svg",
      value: [
        "Conservation",
        "Ecology",
        "Environmental Policy",
        "Sustainability",
        "Climate Change",
        "Renewable Energy",
        "Green Technology",
        "Wildlife Management",
        "Forestry",
        "Geology",
      ],
    },
    {
      key: "Health and Wellness",
      icon: "/assets/health-icon.svg",
      value: [
        "Medicine",
        "Nursing",
        "Public Health",
        "Health Education",
        "Nutrition",
        "Fitness",
        "Mental Health",
        "Counseling",
        "Healthcare Management",
        "Health Policy",
      ],
    },
    {
      key: "Mathematics",
      icon: "/assets/math-icon.svg",
      value: [
        "Pure Mathematics",
        "Applied Mathematics",
        "Statistics",
        "Probability",
        "Algebra",
        "Geometry",
        "Calculus",
        "Number Theory",
      ],
    },
    {
      key: "Humanities",
      icon: "/assets/humanities-icon.svg",
      value: [
        "History",
        "Philosophy",
        "Linguistics",
        "Anthropology",
        "Sociology",
        "Psychology",
        "Political Science",
        "International Relations",
        "Cultural Studies",
        "Theology",
      ],
    },
  ];  

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
            router.back()
        }; 
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
        {interests.map((interest, index) => (
          <div key={index} className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
            <div className="flex gap-1">
              <h2 className="text-[13px] font-semibold">{interest.key}</h2>
              <Image
                width="20"
                height="20"
                src={interest.icon}
                alt={interest.key}
              />
            </div>
            <div className="flex gap-1 flex-wrap">
              {interest.value.map((text, index) => (
                <InterestBtn
                  key={index}
                  text={text}
                  selected={selectedInterests.includes(text)}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        ))}
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