"use client"
import React from "react";
import {useRouter} from "next/navigation"
import { Button } from "@nextui-org/button";
import InterestBtn from "@/components/forms/InterestBtn";
import Image from "next/image";

export default function InterestForm() {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-col gap-10 h-[530px] pb-5 pt-5 align-middle overflow-scroll">
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Art and Design</h2>
                        <Image width="20" height="20" src="/assets/art-icon.svg" alt="art"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Graphic Design" />
                        <InterestBtn text="Painting" />
                        <InterestBtn text="Photography" />
                        <InterestBtn text="Scultpture" />
                        <InterestBtn text="Drawing" />
                        <InterestBtn text="Illustration" />
                        <InterestBtn text="Animation" />
                        <InterestBtn text="Fashion Design" />
                        <InterestBtn text="Interior Design" />
                        <InterestBtn text="Architecture" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Business and Entrepreneurship</h2>
                        <Image width="20" height="20" src="/assets/business-icon.svg" alt="business"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Marketing" />
                        <InterestBtn text="Finance" />
                        <InterestBtn text="Management" />
                        <InterestBtn text="Entrepreneurship" />
                        <InterestBtn text="Leadership" />
                        <InterestBtn text="Human Resoources" />
                        <InterestBtn text="International Business" />
                        <InterestBtn text="E-Commerce" />
                        <InterestBtn text="Supply Chain" />
                        <InterestBtn text="Business Analytics" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Computer Science and Technology</h2>
                        <Image width="20" height="20" src="/assets/tech-icon.svg" alt="tech"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Programming" />
                        <InterestBtn text="Web Development" />
                        <InterestBtn text="Mobile App Development" />
                        <InterestBtn text="Artificial Intelligence" />
                        <InterestBtn text="Machine Learning" />
                        <InterestBtn text="Data Science" />
                        <InterestBtn text="Cybersecurity" />
                        <InterestBtn text="Networking" />
                        <InterestBtn text="Data Management" />
                        <InterestBtn text="Software Engineering" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Engineering</h2>
                        <Image width="20" height="20" src="/assets/eng-icon.svg" alt="enginering"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Mechanical Engineering" />
                        <InterestBtn text="Electrical Engineering" />
                        <InterestBtn text="Civil Engineering" />
                        <InterestBtn text="Chemical Engineering" />
                        <InterestBtn text="Aerospace Engineering" />
                        <InterestBtn text="Biomedical Engineering" />
                        <InterestBtn text="Computer Engineering" />
                        <InterestBtn text="Industrial Engineering" />
                        <InterestBtn text="Material Science" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Creative Writing and Journalism</h2>
                        <Image width="20" height="20" src="/assets/writing-icon.svg" alt="writing"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Fiction Writing" />
                        <InterestBtn text="Poetry" />
                        <InterestBtn text="Playwriting" />
                        <InterestBtn text="Screenwriting" />
                        <InterestBtn text="Journalism" />
                        <InterestBtn text="Editing" />
                        <InterestBtn text="Publishing" />
                        <InterestBtn text="Nonfiction Writing" />
                        <InterestBtn text="Blogging" />
                        <InterestBtn text="Copywriting" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-sm rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Environmental Science and Sustainability</h2>
                        <Image width="20" height="20" src="/assets/sustainability-icon.svg" alt="sustainability"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Conservation" />
                        <InterestBtn text="Ecology" />
                        <InterestBtn text="Environmental Policy" />
                        <InterestBtn text="Sustainability" />
                        <InterestBtn text="Climate Change" />
                        <InterestBtn text="Renewble Energy" />
                        <InterestBtn text="Green Technology" />
                        <InterestBtn text="Wildlife Management" />
                        <InterestBtn text="Forestry" />
                        <InterestBtn text="Geology" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Health and Wellness</h2>
                        <Image width="20" height="20" src="/assets/health-icon.svg" alt="health"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Medicine" />
                        <InterestBtn text="Nursng" />
                        <InterestBtn text="Public Health" />
                        <InterestBtn text="Health Education" />
                        <InterestBtn text="Nutrition" />
                        <InterestBtn text="Fitness" />
                        <InterestBtn text="Mental Health" />
                        <InterestBtn text="Counseling" />
                        <InterestBtn text="Healthcare Management" />
                        <InterestBtn text="Health Policy" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1">
                        <h2 className="text-[13px] font-semibold">Mathematics</h2>
                        <Image width="20" height="20" src="/assets/math-icon.svg" alt="mathematics"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="Pure Mathematics" />
                        <InterestBtn text="Applied Mathematics" />
                        <InterestBtn text="Statistics" />
                        <InterestBtn text="Probability" />
                        <InterestBtn text="Algebra" />
                        <InterestBtn text="Geometry" />
                        <InterestBtn text="Calculus" />
                        <InterestBtn text="Number Theory" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-[#ffff] shadow-md rounded-sm border">
                    <div className="flex gap-1 items-center">
                        <h2 className="text-[13px] font-bold">Humanities</h2>
                        <Image width="28" height="28" src="/assets/humanities-icon.svg" alt="humanities"/>
                    </div>
                    <div className="flex gap-1 flex-wrap">
                        <InterestBtn text="History" />
                        <InterestBtn text="Philosophy" />
                        <InterestBtn text="Linguistics" />
                        <InterestBtn text="Anthropology" />
                        <InterestBtn text="Sociology" />
                        <InterestBtn text="Psychology" />
                        <InterestBtn text="Political Science" />
                        <InterestBtn text="International Relations" />
                        <InterestBtn text="Cultural Studies" />
                        <InterestBtn text="Theology" />
                    </div>
                </div>
            </div>
            <Button size="sm"  className="bg-[#393e46] text-white hover:bg-[#606470] cursor-pointer rounded-sm text-[14px] font-bold shadow-lg w-[200px] mx-auto" onClick={() => router.push('/onboarding')}>
                Next
                <Image width="20" height="20" src="/assets/next-icon.svg" alt="next"/>
            </Button>
        </>
    )
}