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
  const manifests: Manifest[] = [
    { rel: 'manifest', href: `${path}/manifest.webmanifest` },
    { rel: 'yandex-tableau-widget', href: `${path}/yandex-browser-manifest.json` }
  ];

  const favicons: Favicon[] = [
    { rel: 'icon', type: 'image/x-icon', href: `${path}/favicon.ico?v=${Date.now()}` },
    ...[
      '16',
      '32',
      '48'
    ].map(size => ({ rel: 'icon', type: 'image/png', sizes: `${size}x${size}`, href: `${path}/favicon-${size}x${size}.png?v=${Date.now()}` })),
  ];

  const appleTouchIcons: AppleTouchIcon[] = [
    ...[
      '57',
      '60',
      '72',
      '76',
      '114',
      '120',
      '144',
      '152',
      '167',
      '180',
      '1024'
    ].map(size => ({ rel: 'apple-touch-icon' as const, sizes: `${size}x${size}`, href: `${path}/apple-touch-icon-${size}x${size}.png?v=${Date.now()}` })),
  ];

  const orientation = ['portrait', 'landscape'] as const;
  type Orientation = typeof orientation[number];
  type StartupImageData = { width: number; height: number; ratio: number; short: number; long: number };
  const appleTouchStartupImagesData: StartupImageData[] = [
    // iPod Touch 5th generation and later • iPhone SE
    {
      width: 320,
      height: 568,
      ratio: 2,
      short: 640,
      long: 1136
    },
    // iPhone SE • iPhone 6 • iPhone 6s • iPhone 7 • iPhone 8
    {
      width: 375,
      height: 667,
      ratio: 2,
      short: 750,
      long: 1334
    },
    // iPhone 6 Plus • iPhone 6s Plus • iPhone 7 Plus • iPhone 8 Plus
    {
      width: 414,
      height: 736,
      ratio: 3,
      short: 1242,
      long: 2208
    },
    // iPhone XR • iPhone 11
    {
      width: 414,
      height: 896,
      ratio: 2,
      short: 828,
      long: 1792
    },
    // iPhone XS Max • iPhone 11 Pro Max
    {
      width: 414,
      height: 896,
      ratio: 3,
      short: 1242,
      long: 2688
    },
    // iPhone X • iPhone XS • iPhone 11 Pro • iPhone 12 mini • iPhone 13 mini
    {
      width: 375,
      height: 812,
      ratio: 3,
      short: 1125,
      long: 2436
    },
    //  iPhone 12 • iPhone 12 Pro • iPhone 13 • iPhone 13 Pro • iPhone 14
    {
      width: 390,
      height: 844,
      ratio: 3,
      short: 1170,
      long: 2532
    },
    // iPhone 12 Pro Max • iPhone 13 Pro Max • iPhone 14 Plus
    {
      width: 428,
      height: 926,
      ratio: 3,
      short: 1284,
      long: 2778
    },
    // iPhone 14 Pro • iPhone 15 Pro • iPhone 15
    {
      width: 393,
      height: 852,
      ratio: 3,
      short: 1179,
      long: 2556
    },
    // iPhone 14 Pro Max • iPhone 15 Pro Max • iPhone 15 Plus
    {
      width: 430,
      height: 932,
      ratio: 3,
      short: 1290,
      long: 2796
    },
    // iPad 9.7 • iPad Air 9.7 • iPad Mini 7.9 • iPad Pro 9.7
    {
      width: 768,
      height: 1024,
      ratio: 2,
      short: 1536,
      long: 2048
    },
    // iPad 10.2
    {
      width: 810,
      height: 1080,
      ratio: 2,
      short: 1620,
      long: 2160
    },
    // iPad Air 10.5
    {
      width: 834,
      height: 1112,
      ratio: 2,
      short: 1668,
      long: 2224
    },
    // iPad 11 • iPad Pro 10.5
    {
      width: 834,
      height: 1194,
      ratio: 2,
      short: 1668,
      long: 2388
    },
    // iPad Pro 12.9
    {
      width: 1024,
      height: 1366,
      ratio: 2,
      short: 2048,
      long: 2732
    },
    // iPad Mini 8.3
    {
      width: 744,
      height: 1133,
      ratio: 2,
      short: 1488,
      long: 2266
    },
    // iPad Air 10.9
    {
      width: 820,
      height: 1180,
      ratio: 2,
      short: 1640,
      long: 2360
    }
  ];
  const appleTouchStartupImagesParser: (data: StartupImageData, o: Orientation) => AppleTouchStartupImage = ({ width, height, ratio, short, long }, o) => ({
    rel: 'apple-touch-startup-image' as const,
    media: `(device-width: ${width}px) and (device-height: ${height}px) and (-webkit-device-pixel-ratio: ${ratio}) and (orientation: ${o})`,
    href: `${path}/apple-touch-startup-image-${o === 'portrait' ? short : long}x${o === 'portrait' ? long : short}.png?v=${Date.now()}`
  });
  const appleTouchStartupImages: AppleTouchStartupImage[] = [
    ...orientation.flatMap((o) => appleTouchStartupImagesData.map((data) => appleTouchStartupImagesParser(data, o))),
  ];

  return [
    ...manifests,

    ...favicons,

    ...appleTouchIcons,

    ...appleTouchStartupImages
  ];
}
