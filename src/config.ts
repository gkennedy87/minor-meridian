export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  tagline?: string;
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Grant Kennedy",
  description: "Web consultant who builds sites that actually work. No fluff. No agency BS. Just fast, accessible, converting websites for businesses tired of pretty things that don't perform.",
  author: {
    name: "Grant Kennedy",
    bio: "Independent web consultant. I build sites that convert, not ones that win design awards.",
    // avatar: "/images/avatar.jpg"
  },
  tagline: "Performance. Accessibility. SEO. The plumbing that matters.",
  social: {
    github: "https://github.com/gkennedy87",
    linkedin: "https://linkedin.com/in/thegrantkennedy",
  },
  siteUrl: "https://www.gmkennedy.com"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;