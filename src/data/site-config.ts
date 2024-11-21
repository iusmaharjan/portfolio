export type Link = {
  text: string;
  href: string;
}

export type SiteConfig = {
  headerNavLinks?: Link[];
}

const siteConfig: SiteConfig = {
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Blogs',
      href: '/blogs'
    }
  ]
}

export default siteConfig
