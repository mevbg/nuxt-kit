type PageMeta = {
  pageType: string;
  pageTitle: string;
  pageUrl: string;
  pageDescription: string;
  pageKeywords: string;
  pageImage?: string;
};

export function usePageMeta({
  pageType,
  pageTitle,
  pageUrl,
  pageDescription,
  pageKeywords,
  pageImage
}: PageMeta) {
  return [
    { name: 'description', content: pageDescription },
    { name: 'keywords', content: pageKeywords },

    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:type', content: pageType },
    { property: 'og:url', content: pageUrl },
    ...(pageImage
      ? [
          { property: 'og:image', content: pageImage },
          { property: 'og:image:type', content: 'image/png' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: pageTitle }
        ]
      : []),

    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
    ...(pageImage ? [{ name: 'twitter:image', content: pageImage }] : [])
  ];
}
