import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    cover_image: z.string(),
    alt: z.string(),
    category: z.string(),
  }),
});

export const collections = { blog };
