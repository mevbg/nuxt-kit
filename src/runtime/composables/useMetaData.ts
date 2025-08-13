type MetaData = {
  path: string;
  locale: string;
  homepage: string;
  themeColor: string;
  robots: boolean;
  siteTitle: string;
  siteDescription: string;
  siteKeywords: string;
  siteOwner: string;
  siteImage: string;
  googleSiteVerification?: string;
};

export function useMetaData({
  path = '/assets',
  locale,
  homepage,
  themeColor,
  robots,
  siteTitle,
  siteDescription,
  siteKeywords,
  siteOwner,
  siteImage,
  googleSiteVerification
}: MetaData) {
  return [
    { charset: 'utf-8' },

    { 'http-equiv': 'content-language', content: locale },

    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },

    { name: 'author', content: siteOwner },
    { name: 'copyright', content: siteOwner },
    ...(googleSiteVerification
      ? [{ name: 'google-site-verification', content: googleSiteVerification }]
      : []),

    { name: 'description', content: siteDescription },
    { name: 'keywords', content: siteKeywords },
    ...(!robots ? [{ name: 'robots', content: 'noindex,nofollow' }] : []),

    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'application-name', content: siteTitle },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'theme-color', content: themeColor },
    { name: 'color-scheme', content: 'light dark' },

    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    { name: 'apple-mobile-web-app-title', content: siteTitle },

    { name: 'msapplication-TileColor', content: themeColor },
    { name: 'msapplication-TileImage', content: `${path}/mstile-144x144.png` },
    { name: 'msapplication-config', content: `${path}/browserconfig.xml` },

    { property: 'og:site_name', content: siteTitle },
    { property: 'og:title', content: siteTitle },
    { property: 'og:description', content: siteDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: homepage },
    { property: 'og:locale', content: locale },
    { property: 'og:image', content: siteImage },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: siteTitle },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: siteTitle },
    { name: 'twitter:description', content: siteDescription },
    { name: 'twitter:image', content: siteImage }
  ];
}
