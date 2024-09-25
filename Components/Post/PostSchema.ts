import { z } from "zod";

export const PostSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(5),
    imageUrl: z.optional(z.string().min(4)),
    author: z.string().min(3)
});

export type Post = z.infer<typeof PostSchema>;