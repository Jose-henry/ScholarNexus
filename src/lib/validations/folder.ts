import { z } from 'zod';

export const folderValidation = z.object({
  foldername: z.string().min(1, { message: 'MINIMUM 1 CHARACTER' }).max(30).refine(value => value.trim() !== '', 'Must not be empty'),
})


export const noteValidation = z.object({
    title: z.string().min(1).refine(value => value.trim() !== '', 'Must not be empty'),
    content: z.string().min(10).refine(value => value.trim() !== '', 'Must not be empty'),
    authorId: z.string(),
  });
 
  
export const quizValidation = z.object({
    quizname: z.string().min(1, { message: 'MINIMUM 1 CHARACTER' }).max(30),
  
})


export const flashcardValidation = z.object({
    flashcardName: z.string().min(1, { message: 'MINIMUM 1 CHARACTER' }).max(30),
  
})