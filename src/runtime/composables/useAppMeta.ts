type AppMeta = {
  assetsPath?: string;
  locale: string;
  themeColor: string;
  robots: boolean;
  siteTitle: string;
  siteOwner: string;
  googleSiteVerification?: string;
};

export function useAppMeta({
  assetsPath = '/assets',
  locale,
  themeColor,
  robots,
  siteTitle,
  siteOwner,
  googleSiteVerification
}: AppMeta) {
  return [
    { charset: 'utf-8' },

    { 'http-equiv': 'content-language', content: locale },

    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },

    { name: 'author', content: siteOwner },
    { name: 'copyright', content: siteOwner },
    ...(googleSiteVerification
      ? [{ name: 'google-site-verification', content: googleSiteVerification }]
      : []),
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
    { name: 'msapplication-TileImage', content: `${assetsPath}/mstile-144x144.png` },
    { name: 'msapplication-config', content: `${assetsPath}/browserconfig.xml` },

    { property: 'og:site_name', content: siteTitle },
    { property: 'og:locale', content: locale },

    { name: 'twitter:card', content: 'summary_large_image' }
  ];
}
