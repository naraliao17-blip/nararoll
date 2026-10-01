// ---------------------------------------------------------------------------
// Site-wide settings. Edit this file to change the site name or theme.
// ---------------------------------------------------------------------------

export const siteConfig = {
  title: 'nara roll',
  description: 'Film photography and writing.',

  // Which theme to use. Options: 'film' | 'mono' | 'editorial'
  // Each corresponds to a CSS file in src/themes/. Change this one line
  // and rebuild to switch the whole site's look — no content changes needed.
  theme: 'film' as 'film' | 'mono' | 'editorial',

  // ---- Profile page (src/pages/about.astro) ----
  // Put your avatar image in public/ (e.g. public/avatar.jpg) and point to
  // it here with a leading slash. Leave as '' to show no avatar.
  avatar: '',
  bio: `Write a couple of paragraphs about yourself here — edit the \`bio\`
field in src/site.config.ts. This text appears on the Profile page.`,

  // ---- Contact page (src/pages/contact.astro) ----
  email: 'hello@example.com',
  social: [
    { label: 'Instagram', url: 'https://instagram.com/' },
    { label: 'VSCO', url: 'https://vsco.co/' },
  ],
};
