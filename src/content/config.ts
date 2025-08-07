import { defineCollection, z } from 'astro:content';

// Define collections for CloudCannon
const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      image: z.string(),
      buttons: z.array(z.object({
        text: z.string(),
        link: z.string(),
        style: z.enum(['primary', 'secondary'])
      })).optional()
    }),
    sections: z.array(z.object({
      type: z.enum(['text', 'services', 'team', 'contact']),
      content: z.any()
    })).optional()
  })
});

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    price: z.string().optional(),
    features: z.array(z.string()).optional()
  })
});

const team = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    bio: z.string()
  })
});

export const collections = {
  pages,
  services,
  team
};