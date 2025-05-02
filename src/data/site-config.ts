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
      text: 'Dev Notes',
      href: '/dev-notes'
    }
  ]
}

export default siteConfig
