type Manifest = {
  rel: string;
  href: string;
};

type Favicon = {
  rel: string;
  type: string;
  sizes?: string;
  href: string;
};

type AppleTouchIcon = {
  rel: 'apple-touch-icon';
  sizes: string;
  href: string;
};

type AppleTouchStartupImage = {
  rel: 'apple-touch-startup-image';
  media: string;
  href: string;
};

export function useHeadLinks(path: string = '/assets') {
  const manifests = [
    { rel: 'manifest', href: `${path}/manifest.webmanifest` },
    { rel: 'yandex-tableau-widget', href: `${path}/yandex-browser-manifest.json` }
  ] as Manifest[];

  const favicons = [
    { rel: 'icon', type: 'image/x-icon', href: `${path}/favicon.ico` },

    { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${path}/favicon-16x16.png` },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${path}/favicon-32x32.png` },
    { rel: 'icon', type: 'image/png', sizes: '48x48', href: `${path}/favicon-48x48.png` }
  ] as Favicon[];

  const appleTouchIcons = [
    { rel: 'apple-touch-icon', sizes: '57x57',     href: `${path}/apple-touch-icon-57x57.png` },
    { rel: 'apple-touch-icon', sizes: '60x60',     href: `${path}/apple-touch-icon-60x60.png` },
    { rel: 'apple-touch-icon', sizes: '72x72',     href: `${path}/apple-touch-icon-72x72.png` },
    { rel: 'apple-touch-icon', sizes: '76x76',     href: `${path}/apple-touch-icon-76x76.png` },
    { rel: 'apple-touch-icon', sizes: '114x114',   href: `${path}/apple-touch-icon-114x114.png` },
    { rel: 'apple-touch-icon', sizes: '120x120',   href: `${path}/apple-touch-icon-120x120.png` },
    { rel: 'apple-touch-icon', sizes: '144x144',   href: `${path}/apple-touch-icon-144x144.png` },
    { rel: 'apple-touch-icon', sizes: '152x152',   href: `${path}/apple-touch-icon-152x152.png` },
    { rel: 'apple-touch-icon', sizes: '167x167',   href: `${path}/apple-touch-icon-167x167.png` },
    { rel: 'apple-touch-icon', sizes: '180x180',   href: `${path}/apple-touch-icon-180x180.png` },
    { rel: 'apple-touch-icon', sizes: '1024x1024', href: `${path}/apple-touch-icon-1024x1024.png` }
  ] as AppleTouchIcon[];

  const appleTouchStartupImages = [
      // iPod Touch 5th generation and later • iPhone SE
    { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-640x1136.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-1136x640.png` },

    // iPhone SE • iPhone 6 • iPhone 6s • iPhone 7 • iPhone 8
    { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-750x1334.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-1334x750.png` },

    // iPhone 6 Plus • iPhone 6s Plus • iPhone 7 Plus • iPhone 8 Plus
    { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1242x2208.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2208x1242.png` },

    // iPhone XR • iPhone 11
    { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-828x1792.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-1792x828.png` },

    // iPhone XS Max • iPhone 11 Pro Max
    { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1242x2688.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2688x1242.png` },

    // iPhone X • iPhone XS • iPhone 11 Pro • iPhone 12 mini • iPhone 13 mini
    { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1125x2436.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2436x1125.png` },

    //  iPhone 12 • iPhone 12 Pro • iPhone 13 • iPhone 13 Pro • iPhone 14
    { rel: 'apple-touch-startup-image', media: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1170x2532.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2532x1170.png` },

    // iPhone 12 Pro Max • iPhone 13 Pro Max • iPhone 14 Plus
    { rel: 'apple-touch-startup-image', media: '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1284x2778.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2778x1284.png` },

    // iPhone 14 Pro • iPhone 15 Pro • iPhone 15
    { rel: 'apple-touch-startup-image', media: '(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1179x2556.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2556x1179.png` },

    // iPhone 14 Pro Max • iPhone 15 Pro Max • iPhone 15 Plus
    { rel: 'apple-touch-startup-image', media: '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1290x2796.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2796x1290.png` },

    // iPad 9.7 • iPad Air 9.7 • iPad Mini 7.9 • iPad Pro 9.7
    { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1536x2048.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2048x1536.png` },

    // iPad 10.2
    { rel: 'apple-touch-startup-image', media: '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1620x2160.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2160x1620.png` },

    // iPad Air 10.5
    { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1668x2224.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2224x1668.png` },

    // iPad 11 • iPad Pro 10.5
    { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1668x2388.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2388x1668.png` },

    // iPad Pro 12.9
    { rel: 'apple-touch-startup-image', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-2048x2732.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2732x2048.png` },

    // iPad Mini 8.3
    { rel: 'apple-touch-startup-image', media: '(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1488x2266.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2266x1488.png` },

    // iPad Air 10.9
    { rel: 'apple-touch-startup-image', media: '(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)', href: `${path}/apple-touch-startup-image-1640x2360.png` },
    { rel: 'apple-touch-startup-image', media: '(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)', href: `${path}/apple-touch-startup-image-2360x1640.png` }
  ] as AppleTouchStartupImage[];

  return [
    ...manifests,

    ...favicons,

    ...appleTouchIcons,

    ...appleTouchStartupImages
  ];
}
