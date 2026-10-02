import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    // Cover photo shown on the portfolio grid and post-list thumbnail.
    // Leave blank for a text-only post.
    cover: z.string().optional(),
    // One-line summary shown on list pages. Optional — falls back to nothing.
    excerpt: z.string().optional(),
    // Set true to hide an otherwise-photo-tagged post from the /portfolio grid.
    hideFromPortfolio: z.boolean().default(false),
    // Group a photo post into a named series (e.g. "Sigiriya, 2024"). Posts
    // sharing the same series name are grouped together under that name in
    // the Menu and on the Works page. Leave blank for a one-off "Journal"
    // entry (a single day, not part of a curated series).
    series: z.string().optional(),
  }),
});

export const collections = { posts };
