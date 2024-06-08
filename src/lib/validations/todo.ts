import * as z from "zod";


export const toDoValidation = z.object({
    title: z.string().min(1).refine(value => value.trim() !== '', 'Must not be empty'),
    description: z.string().min(10).refine(value => value.trim() !== '', 'Must not be empty'),
    userId: z.string(),
  });
 
  
