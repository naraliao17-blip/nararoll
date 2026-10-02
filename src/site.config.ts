// ---------------------------------------------------------------------------
// Site-wide settings. Edit this file to change the site name or theme.
// ---------------------------------------------------------------------------

export const siteConfig = {
  // This appears everywhere: the top-left site name, the browser tab, the
  // Menu overlay, the footer. Rinko Kawauchi's own site just uses her name
  // this way — change the text below to whatever you want shown instead.
  title: 'Nara',
  description: 'Film photography and writing.',

  // Which theme to use. Options: 'film' | 'mono' | 'editorial'
  // Each corresponds to a CSS file in src/themes/. Change this one line
  // and rebuild to switch the whole site's look — no content changes needed.
  theme: 'film' as 'film' | 'mono' | 'editorial',

  // Homepage image display. 'single' shows one large full-bleed image from
  // the latest series; 'grid' shows up to four images in a 2x2 grid.
  // Either way, clicking an image opens that series' page.
  homepageStyle: 'single' as 'single' | 'grid',

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
