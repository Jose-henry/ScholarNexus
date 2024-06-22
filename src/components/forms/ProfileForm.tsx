"use client"
//import { currentUser } from "@clerk/nextjs/server"
import { ChangeEvent, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm}  from "react-hook-form"
import { z } from "zod"
import { redirect, usePathname, useRouter } from "next/navigation"
import { Textarea } from "@/components/ui/textarea";  //to install: npx shadcn-ui@latest add textarea
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UserValidation } from "@/lib/validations/user"
import { useUploadThing } from "@/lib/uploadthing"
import { isBase64Image } from "@/utils/utils"
import Image from "next/image"

import { Upsert } from "@/lib/actions/user.action"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/utils/cn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
//import { Button } from "@nextui-org/button"
import {Button, buttonVariants} from '@/components/ui/button' 
import { Loader2 } from "lucide-react"




const levels = [
  { label: "100 Level", value: "100" },
  { label: "200 Level", value: "200" },
  { label: "300 Level", value: "300" },
  { label: "400 Level", value: "400" },
  { label: "500 Level", value: "500" },
  { label: "600 Level", value: "600" },
  { label: "700 Level", value: "700" },
] as const






interface Props{
  user: {
      clerkId: string;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      middleName: string;
      dateOfBirth: Date;
      programme: string;
      school: string;
      level: string;
      image: string;
      bio: string;
  };
  btnTitle: string;
}
export function ProfileForm ({user, btnTitle}: Props) {
  const [isLoading, setIsLoading] = useState(false); // 1. Define the state

  const router = useRouter();
  const pathname = usePathname();

  //const User = await currentUser()

  const [files, setFiles]=useState<File[]>([])
  const { startUpload } = useUploadThing("media")

  const form =useForm({
    resolver:  zodResolver(UserValidation),
    defaultValues: {
        profile_photo: user?.image || "",
        fname: user?.firstName || "",
        lname: user?.lastName || "",
        mname: user?.middleName || "",
        username: user?.username || "",
        dob: user?.dateOfBirth || new Date(),
        bio: user?.bio || "",
        school: user?.school || "",
        programme: user?.programme || "",
        level: user?.level || "",
    }
})
  const handleImage = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value: string) => void) => {
    e.preventDefault();

  const fileReader = new FileReader();
  if (e.target.files && e.target.files.length > 0){
      const file = e.target.files[0]

      setFiles(Array.from(e.target.files));

      if(!file.type.includes('image')) return;

      fileReader.onload = async (event) => {
         const imageDataUrl = event.target?.result?.toString() || ''; 

         fieldChange(imageDataUrl);
      }
      fileReader.readAsDataURL(file)

  
  }

}

// 2. Define a submit handler.

   // 2. Define a submit handler.
   const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;

    const hasImageChanged = isBase64Image(blob)

    if (hasImageChanged){
        const imgRes = await startUpload(files)

        if(imgRes && (imgRes[0] as any).fileUrl) {
            values.profile_photo = (imgRes[0] as any).fileUrl;
        }
        
    }
    setIsLoading(true); // Set loading state to true
    try {
      await Upsert({
        clerkId: user?.clerkId,
        username: user?.username,
        email: user?.email,
        firstName: values.fname,
        lastName: values.lname,
        middleName: values.mname,
        dateOfBirth: values.dob,
        programme: values.programme,
        school: values.school,
        level: values.level,
        image: values.profile_photo || '',
        bio: values.bio,
        onboarded: true,
        interests: [],
        path: pathname,
      });
      toast.success('Profile updated successfully!');
      if (pathname === '/profile/edit') {
        router.back();
      } else {
        router.push('/onboarding/interest');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };


      

  


  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-8">
          <FormField
            control={form.control}
            name="profile_photo"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4">
                <FormLabel className="account-form-image-label">{field.value ? (
                    <Image 
                    src = {field.value}
                    alt = "profile photo"
                    width = {55}
                    height = {55}
                    priority
                    className="rounded-full object-contain" />) : (
                        <Image 
                        src = '/assets/profile.svg'
                        alt = "profile photo"
                        width = {24}
                        height = {24}
                        className="object-contain" />
                    
                )}
                </FormLabel>
                <FormControl className = "flex-1 text-base-semibold text-gray-400 text-[13px]">
                  <Input
                  type= "file"
                  accept = "image/*"
                  placeholder= "Upload a photo"
                  className = "account-form_image-input"
                  onChange = {(e) => handleImage(e, field.onChange)} 
                  />
                  </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="fname"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full gap-1">
                <FormLabel className="text-base-semibold text-light-2 text-[13.5px]">Firstname
                </FormLabel>
                <FormControl className="rounded-sm border-0">
                  <Input
                  type="text"
                  className = "account-form_input no-focus text-[13px] bg-white"
                  {...field}
                  />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lname"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full gap-1">
                <FormLabel className="text-base-semibold text-light-2 text-[13.5px]">Lastname
                </FormLabel>
                <FormControl className="rounded-sm border-0">
                  <Input
                  type="text"
                  className = "account-form_input no-focus text-[13px]"
                  {...field}
                  />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mname"
            render={({ field }) => (
              <FormItem className="flex flex-col w-full gap-1">
                <FormLabel className="text-base-semibold text-light-2 text-[13.5px]">Middlename
                </FormLabel>
                <FormControl className="rounded-sm border-0">
                  <Input
                  type="text"
                  className = "account-form_input no-focus text-[13px]"
                  {...field}
                  />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />


<FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-[13.5px]">Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl className="rounded-sm border-0 shadow-md">
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal text-[13px]",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span className="text-[13px]">Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                    className="text-sm"
                  />
                </PopoverContent>
              </Popover>
              <FormDescription className="text-[12px]">
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-1">
                <FormLabel className="text-base-semibold text-light-2 text-[13.5px]">Bio
                </FormLabel>
                <FormControl className="rounded-sm border-0">
                  <Textarea
                  rows ={10}
                  className = "account-form_input no-focus text-[13px]"
                  {...field}
                  />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="school"
            render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-1">
                <FormLabel className="text-base-semibold text-light-2 text-[13.5px]">School
                </FormLabel>
                <FormControl className="rounded-sm border-0">
                  <Input
                  type="text"
                  className = "account-form_input no-focus text-[13px]"
                  {...field}
                  />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="programme"
            render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-1">
                <FormLabel className="text-base-semibold text-light-2 text-[13.5px]">Programme
                </FormLabel>
                <FormControl className="rounded-sm border-0">
                  <Input
                  type="text"
                  className = "account-form_input no-focus text-[13px]"
                  {...field}
                  />
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />

<FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-[13.5px]">Level</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl className="rounded-sm border-0">
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between text-[12.5px]",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? levels.find(
                            (level) => level.value === field.value
                          )?.label
                        : "Select level"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search level..." className="text-[12.5px]" />
                    <CommandEmpty className="text-[12px]">No level found.</CommandEmpty>
                    <CommandGroup>
                      {levels.map((level, index) => (
                        <CommandList key={index}>
                        <CommandItem
                          value={level.label}
                          key={level.value}
                          onSelect={() => {
                            form.setValue("level", level.value)
                          }}
                          className="text-[12.5px]"
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              level.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {level.label}
                        </CommandItem>
                        </CommandList>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription className="text-[12px]">
                Level will be displayed in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


{isLoading ? (
          <ButtonLoading />
        ) : (
          <Button type="submit" className="bg-[#393e46] text-white hover:bg-[#606470] cursor-pointer rounded-sm text-[13.5px] font-bold shadow-lg w-[200px] mx-auto">
            Next
          </Button>
        )}
      </form>
    </Form>
  );
}

// ButtonLoading component
export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait...
    </Button>
  );
}