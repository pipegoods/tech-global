import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    timeToRead: z.number().optional(),
    author: z.object({
      name: z.string(),
      photo: z.string(),
    }),
  }),
});

const member = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    avatar: z.string(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    github: z.string().optional(),
    portfolio: z.string().optional(),
    techs: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, member };
