import { z } from 'zod';

export const UserValidation = z.object({
  profile_photo: z.string().url(),
  fname: z.string().min(1, { message: 'Please input your name' }).max(30),
  lname: z.string().min(1, { message: 'Please input your name' }).max(30),
  mname: z.string().max(30),
  username: z.string()
    .min(3, { message: 'MINIMUM 3 CHARACTERS' })
    .max(30)
    .refine(value => /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(value), 'Must start with a letter or underscore and contain only alphanumeric characters and underscores'),
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
  bio: z.string().min(3).max(500),
  school: z.string().min(1),
  programme: z.string().min(1),
  level: z.string({
    required_error: "Please select a level.",
  }),

});
