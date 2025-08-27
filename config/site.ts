export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kyle Huang",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "开发",
      href: "/dev",
    },
    {
      label: "音乐",
      href: "/music",
    },
    {
      label: "简历",
      href: "/resume",
    },
  ],
  navMenuItems: [
    {
      label: "开发",
      href: "/dev",
    },
    {
      label: "音乐",
      href: "/music",
    },
    {
      label: "取消",
      href: "/",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
