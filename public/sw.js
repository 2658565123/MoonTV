if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let t = {};
    const f = (e) => a(e, c),
      r = { module: { uri: c }, exports: t, require: f };
    s[c] = Promise.all(i.map((e) => r[e] || f(e))).then((e) => (n(...e), t));
  };
}
define(['./workbox-e9849328'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '05790102e9a39d7e6aa42f91ad184d40',
        },
        {
          url: '/_next/static/BqfbVkWDSnuLQ_P8xeoH8/_buildManifest.js',
          revision: '72bdceebc5e23d096acd740e34376a91',
        },
        {
          url: '/_next/static/BqfbVkWDSnuLQ_P8xeoH8/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/2607-f624962eb2118f2b.js',
          revision: 'f624962eb2118f2b',
        },
        {
          url: '/_next/static/chunks/2663-4d9ba805a97e0193.js',
          revision: '4d9ba805a97e0193',
        },
        {
          url: '/_next/static/chunks/3469-a5636fd4698dbec0.js',
          revision: 'a5636fd4698dbec0',
        },
        {
          url: '/_next/static/chunks/4053-a60fa5e6a3928939.js',
          revision: 'a60fa5e6a3928939',
        },
        {
          url: '/_next/static/chunks/4874.92833f24549cdbd9.js',
          revision: '92833f24549cdbd9',
        },
        {
          url: '/_next/static/chunks/7602-6ae26236ebc86ae1.js',
          revision: '6ae26236ebc86ae1',
        },
        {
          url: '/_next/static/chunks/7775.b2deda1ad80f9505.js',
          revision: 'b2deda1ad80f9505',
        },
        {
          url: '/_next/static/chunks/8518-8d6901e1cfe1eb97.js',
          revision: '8d6901e1cfe1eb97',
        },
        {
          url: '/_next/static/chunks/8d88dbc5-f34654e55e7661ee.js',
          revision: 'f34654e55e7661ee',
        },
        {
          url: '/_next/static/chunks/9998-5baded51d6abc052.js',
          revision: '5baded51d6abc052',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-2d3b3a6e10353252.js',
          revision: '2d3b3a6e10353252',
        },
        {
          url: '/_next/static/chunks/app/admin/page-ca3900e752e7ee0a.js',
          revision: 'ca3900e752e7ee0a',
        },
        {
          url: '/_next/static/chunks/app/api/admin/config/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/admin/reset/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/admin/site/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/admin/source/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/admin/user/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/change-password/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/cron/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/detail/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/douban/categories/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/douban/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/favorites/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/image-proxy/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/login/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/logout/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/playrecords/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/register/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/search/one/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/search/resources/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/search/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/searchhistory/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/server-config/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/api/skipconfigs/route-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/app/douban/page-54c1d5c552653b4b.js',
          revision: '54c1d5c552653b4b',
        },
        {
          url: '/_next/static/chunks/app/layout-1731cef7fd225a20.js',
          revision: '1731cef7fd225a20',
        },
        {
          url: '/_next/static/chunks/app/login/page-22d8c6452d095f71.js',
          revision: '22d8c6452d095f71',
        },
        {
          url: '/_next/static/chunks/app/page-3eebd5579c999175.js',
          revision: '3eebd5579c999175',
        },
        {
          url: '/_next/static/chunks/app/play/page-fe4a5258f0d84375.js',
          revision: 'fe4a5258f0d84375',
        },
        {
          url: '/_next/static/chunks/app/search/page-42bf2746b4fe8556.js',
          revision: '42bf2746b4fe8556',
        },
        {
          url: '/_next/static/chunks/app/warning/page-ffd388bef163cb8e.js',
          revision: 'ffd388bef163cb8e',
        },
        {
          url: '/_next/static/chunks/c72274ce-d574684c03af2230.js',
          revision: 'd574684c03af2230',
        },
        {
          url: '/_next/static/chunks/da9543df-b670e2ea9e17039f.js',
          revision: 'b670e2ea9e17039f',
        },
        {
          url: '/_next/static/chunks/framework-4abb519a927dfe6a.js',
          revision: '4abb519a927dfe6a',
        },
        {
          url: '/_next/static/chunks/main-2a115011b344d0fd.js',
          revision: '2a115011b344d0fd',
        },
        {
          url: '/_next/static/chunks/main-app-ea60f573996954dc.js',
          revision: 'ea60f573996954dc',
        },
        {
          url: '/_next/static/chunks/pages/_app-874bb795056c0671.js',
          revision: '874bb795056c0671',
        },
        {
          url: '/_next/static/chunks/pages/_error-53696a280c4454dd.js',
          revision: '53696a280c4454dd',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-4a83ecc891be51b5.js',
          revision: '4a83ecc891be51b5',
        },
        {
          url: '/_next/static/css/7310b543a4513ca9.css',
          revision: '7310b543a4513ca9',
        },
        {
          url: '/_next/static/css/cf77203254659280.css',
          revision: 'cf77203254659280',
        },
        {
          url: '/_next/static/media/19cfc7226ec3afaa-s.woff2',
          revision: '9dda5cfc9a46f256d0e131bb535e46f8',
        },
        {
          url: '/_next/static/media/21350d82a1f187e9-s.woff2',
          revision: '4e2553027f1d60eff32898367dd4d541',
        },
        {
          url: '/_next/static/media/8e9860b6e62d6359-s.woff2',
          revision: '01ba6c2a184b8cba08b0d57167664d75',
        },
        {
          url: '/_next/static/media/ba9851c3c22cd980-s.woff2',
          revision: '9e494903d6b0ffec1a1e14d34427d44d',
        },
        {
          url: '/_next/static/media/c5fe6dc8356a8c31-s.woff2',
          revision: '027a89e9ab733a145db70f09b8a18b42',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        {
          url: '/_next/static/media/e4af272ccee01ff0-s.p.woff2',
          revision: '65850a373e258f1c897a2b3d75eb74de',
        },
        { url: '/favicon.ico', revision: '2a440afb7f13a0c990049fc7c383bdd4' },
        {
          url: '/icons/icon-192x192.png',
          revision: 'e214d3db80d2eb6ef7a911b3f9433b81',
        },
        {
          url: '/icons/icon-256x256.png',
          revision: 'a5cd7490191373b684033f1b33c9d9da',
        },
        {
          url: '/icons/icon-384x384.png',
          revision: '8540e29a41812989d2d5bf8f61e1e755',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: '3e5597604f2c5d99d7ab62b02f6863d3',
        },
        { url: '/logo.png', revision: '5c1047adbe59b9a91cc7f8d3d2f95ef4' },
        { url: '/manifest.json', revision: 'f8a4f2b082d6396d3b1a84ce0e267dfe' },
        { url: '/robots.txt', revision: 'e2b2cd8514443456bc6fb9d77b3b1f3e' },
        {
          url: '/screenshot1.png',
          revision: 'd7de3a25686c5b9c9d8c8675bc6109fc',
        },
        {
          url: '/screenshot2.png',
          revision: 'b0b715a3018d2f02aba5d94762473bb6',
        },
        {
          url: '/screenshot3.png',
          revision: '7e454c28e110e291ee12f494fb3cf40c',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
