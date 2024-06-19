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
import { noteValidation } from "@/lib/validations/folder"
import { createOrUpdateNote } from "@/lib/actions/notes.action"









interface Props{
  note: {
     id: string;
     title: string;
     content: string;
     authorId: string;
     folderId: string;

  };
  btnTitle: string;
}
export function NoteForm ({note, btnTitle}: Props) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { startUpload } = useUploadThing("media"); // Ensure "media" matches your upload route
    const [file, setFile] = useState<File | null>(null); // State to hold the selected file
  
    const form = useForm({
      resolver: zodResolver(noteValidation),
      defaultValues: {
        title: note?.title || "",
        content: note?.content || "",
        authorId: note?.authorId || "",
      },
    });
  
  
/* const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles([file]); // Update files state with the selected file
      if (!file.type.includes("image")) return;
      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        // Do something with imageDataUrl if needed
      };
      fileReader.readAsDataURL(file);
    }
  }; */



// 2. Define a submit handler.

   // 2. Define a submit handler.
   const onSubmit = async (values: z.infer<typeof noteValidation>) => {
    /* const hasFileChanged = files.length > 0;
    if (hasFileChanged) {
      const file = files[0]; // Assuming you're only uploading one file
      try {
        const { fileUrl } = await startUpload({
          file,
          metadata: { authorId: values.authorId }, // Add any metadata needed
        });
        values.content = fileUrl;
      } catch (error) {
        console.error("Error uploading file:", error);
        // Handle error appropriately
        return;
      }
    } */
    setIsLoading(true); // Optional loading state
  
    await createOrUpdateNote({
      title: values.title,
      content: values.content,
      authorId: values.authorId,
      folderId: note.folderId, // You can pass folderId here if needed
      path: pathname // Replace with your actual path handling logic
    });
  
    // Handle navigation or other post-submit actions
    //   if(pathname === `/folders/${note.folderId}/note/${note.noteId}/edit`){
    //     router.back();
    //} else {
        router.push(`/folders/${note.folderId}`);

  }
   
      

  


    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-1">
                  <FormLabel className="text-base-semibold text-light-2 text-[13.5px]">
                    Title
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
            <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
                <FormItem className="flex flex-col w-full gap-1">
                <FormLabel className="text-base-semibold text-light-2 text-[13.5px]">Content
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
            <Button type="submit" className="bg-[#393e46] text-white">
              Next
            </Button>
          </form>
        </Form>
      );
    }
    
    