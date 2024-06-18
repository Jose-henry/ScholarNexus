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
import { Button } from "../ui/button"
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
import { toast } from "@/components/ui/use-toast"
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { folderValidation } from "@/lib/validations/folder"
import { createOrUpdateFolder } from "@/lib/actions/folder.action"









interface Props{
  folder: {
     folderName: string;
     category: string;
     userId: string;

  };
  btnTitle: string;
}
export function FolderForm ({folder, btnTitle}: Props) {
  const [isLoading, setIsLoading] = useState(false); // 1. Define the state

  const router = useRouter();
  const pathname = usePathname();

  //const User = await currentUser()

  const form =useForm({
    resolver:  zodResolver(folderValidation),
    defaultValues: {
        foldername: folder?.folderName || "",
    }
})
  



// 2. Define a submit handler.

   // 2. Define a submit handler.
   const onSubmit = async (values: z.infer<typeof folderValidation>) => {
  
    
      setIsLoading(true); // Optional loading state
      await createOrUpdateFolder({
        folderName: values.foldername,
        category: folder?.category,
        userId: folder?.userId || '',
        path: pathname,
      });
      if(pathname === '/notes/edit'){
        router.back();
    } else {
      router.push('/notes');
    }

  }
   
      

  


    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-8">
            <FormField
              control={form.control}
              name="foldername"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-1">
                  <FormLabel className="text-base-semibold text-light-2 text-[13.5px]">
                    Firstname
                  </FormLabel>
                  <FormControl className="rounded-sm border-0">
                    <Input
                      type="text"
                      className="account-form_input no-focus text-[13px] bg-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-[#393e46] text-white">
              Next
            </Button>
          </form>
        </Form>
      );
    }
    
    