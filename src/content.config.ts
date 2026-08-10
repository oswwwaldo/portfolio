import { file, glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const certifications = defineCollection({
    loader: file('src/data/certifications.json'),
    schema: z.object({
        title: z.string(),
        vendor: z.string().or(z.url()),
        certificate: z.string(),
        link: z.url().or(z.literal('')),
    })
})

const education = defineCollection({
    loader: file('src/data/education.json'),
    schema: z.object({
        title: z.string(),
        degree: z.string(),
        timeline: z.string(),
    })
});

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
});

const photos = defineCollection({
    loader: file('src/data/photos.json'),
    schema: z.object({
        caption: z.string(),
        source: z.url(),
    })
});

const poetry = defineCollection({
    loader: file('src/data/poetry.json'),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        poem: z.string(),
        link: z.url().nullish(),
    })
});

const projects = defineCollection({
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
});

const socials = defineCollection({
    loader: file('src/data/socials.json'),
    schema: z.object({
        platform: z.string(),
        handle: z.string(),
        link: z.url(),
        category: z.string(),
        ariaLabel: z.string(),
        featured: z.boolean(),
        displayOrder: z.number(),
        target: z.string(),
        rel: z.string(),
    })
});

const stats = defineCollection({
    loader: file('src/data/stats.json'),
    schema: z.object({
        figure: z.string(),
        caption: z.string(),
        tooltip: z.string(),
    })
});

const technologies = defineCollection({
    loader: file('src/data/technologies.json'),
    schema: z.object({
        title: z.string(),
        type: z.string(),
    })
});


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
});

const videos = defineCollection({
    loader: file('src/data/videos.json'),
    schema: z.object({
        title: z.string().nullish(),
        music: z.array(
            z.object({
                title: z.string(),
                author: z.string(),
            })
        ),
        footage: z.array(
            z.object({
                title: z.string(),
                year: z.string(),
            })
        ),
        link: z.url(),
        thumbnail: z.string(),
        explicit: z.boolean(),
    })
})

export const collections = { 
    certifications, 
    education, 
    experience, 
    photos,
    poetry, 
    projects,
    socials,
    stats, 
    technologies, 
    thoughts, 
    videos,
}