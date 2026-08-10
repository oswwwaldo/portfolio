import { file, glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const experience = defineCollection({
    loader: file('src/data/experience.json'),
    schema: z.object({
        title: z.string(),
        caption: z.string(),
        description: z.string(),
        timeline: z.string(),
        skills: z.array(z.string()),
        format: z.string(),
    })
})

const thoughts = defineCollection({
    loader: glob({ base: 'src/content/thoughts', pattern: '*.md'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().nullable().optional(),
        thumbnail: z.string(),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
    }),
})

const projects = defineCollection({
    // loader: file('src/data/projects.json'),
    loader: glob({ base: 'src/content/projects', pattern: '*.md'}),
    schema: z.object({
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

export const collections = { experience, projects, thoughts }