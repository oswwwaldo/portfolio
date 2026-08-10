import { file } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const projects = defineCollection({
    loader: file('src/data/projects.json'),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        slug: z.string(),
        tagline: z.string(),
        description: z.string(),
        longDescription: z.string(),
        status: z.string(),
        featured: z.boolean(),
        category: z.string(),
        role: z.string(),
        technologies: z.array(z.string()),
        githubUrl: z.string().nullable(),
        liveUrl: z.string().nullable(),
        thumbnail: z.string(),
        gallery: z.array(z.string()),
        contributors: z.array(
            z.object({
                name: z.string(),
                role: z.string(),
                image: z.string().optional()
            })
        ).nullable(),
        startDate: z.string(),
        endDate: z.string().nullable(),
        keyFeatures: z.array(z.string()),
    })
})

export const collections = { projects }