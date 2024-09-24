import { z } from "zod";

export const UserSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
});

export type User = z.infer<typeof UserSchema>;