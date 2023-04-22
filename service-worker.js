/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "18ab09116dcc3b80d86df2eb25795d1c"
  },
  {
    "url": "assets/css/0.styles.ec95ac3a.css",
    "revision": "78240a40ec4ca6645902fd76d1a765ec"
  },
  {
    "url": "assets/img/bm-7.png",
    "revision": "2fe797cb6db41860afc5997bd8746c7d"
  },
  {
    "url": "assets/img/cover/last-time.jpg",
    "revision": "21e1e94a46da9512eb7394ee496aea6c"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/linear-table/traverse.gif",
    "revision": "2fcd50b8d52f7fb45c069523e992a8e6"
  },
  {
    "url": "assets/img/linear-table/链式存储构成.png",
    "revision": "bfdd50816008c8ec6ff137f13e5133ec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/stack/Init.gif",
    "revision": "96a2c2deb36480457a5809d52e581b8a"
  },
  {
    "url": "assets/img/stack/pop.gif",
    "revision": "55f764d6827418d5e0bcbd275ff80db8"
  },
  {
    "url": "assets/img/stack/push.gif",
    "revision": "cccc30d4623a39782895009ff0d43f69"
  },
  {
    "url": "assets/img/stm32/create_project.png",
    "revision": "0da6088b806c99cb1cb57b6bb590ad2a"
  },
  {
    "url": "assets/img/stm32/path.png",
    "revision": "a8d7855f270fafbeed10549607ea7979"
  },
  {
    "url": "assets/img/stm32/Select_Board.png",
    "revision": "b9664020ed1030bdb60ac84a37db1801"
  },
  {
    "url": "assets/js/10.e91b63fd.js",
    "revision": "663f449159c258a8c10ab40ddec8fb93"
  },
  {
    "url": "assets/js/11.a760ca5e.js",
    "revision": "a59ab12a28a978f1d4b1b883322ba2fa"
  },
  {
    "url": "assets/js/12.6771515a.js",
    "revision": "163dedd10e73340d8552c35e057afa48"
  },
  {
    "url": "assets/js/13.3487e202.js",
    "revision": "20e30f6cc8764b022700e19de2ba29d7"
  },
  {
    "url": "assets/js/14.2de6dedc.js",
    "revision": "0d39e01a4eb8b3c8e1281f38b64fd600"
  },
  {
    "url": "assets/js/15.e86c1792.js",
    "revision": "24e5b7145a8d79056ce713e43f86f3c6"
  },
  {
    "url": "assets/js/16.63d2bce2.js",
    "revision": "d387a9ab8143b19c53d2f33ae5dd232d"
  },
  {
    "url": "assets/js/17.ef560323.js",
    "revision": "02ef866d4a163110d8d512e36b80b90d"
  },
  {
    "url": "assets/js/18.8d0f809c.js",
    "revision": "4f19d8ddb9ac4261e145cedc884bef9d"
  },
  {
    "url": "assets/js/19.6b8bc6e3.js",
    "revision": "20eb753c7631059f33f64b7b9b8bdde4"
  },
  {
    "url": "assets/js/2.0bcf0fe5.js",
    "revision": "4f5b335015e1ba8bed9a0ec869d94117"
  },
  {
    "url": "assets/js/20.16926133.js",
    "revision": "911df315476010dc965be76a90ce1d54"
  },
  {
    "url": "assets/js/21.b44ed802.js",
    "revision": "8d1b37f3645ea0c94c326d5b7a9e7edb"
  },
  {
    "url": "assets/js/22.682adcb3.js",
    "revision": "ce075ceacf81317d0a5cfaec321e2e8e"
  },
  {
    "url": "assets/js/23.0ce98934.js",
    "revision": "ae3ac8d3029f19b32b42da36479d6083"
  },
  {
    "url": "assets/js/24.92c8f8ce.js",
    "revision": "0b3cdc12a56241b351d1c6e3495b51b2"
  },
  {
    "url": "assets/js/25.844a5f79.js",
    "revision": "cd1af52ec8243ee2750c0a4e07b27c17"
  },
  {
    "url": "assets/js/26.27a722db.js",
    "revision": "710a27d09b444f695984cd32f3e1f706"
  },
  {
    "url": "assets/js/27.2667b260.js",
    "revision": "b29c450d1923b3adf60b23289d4c705c"
  },
  {
    "url": "assets/js/28.822608a4.js",
    "revision": "ac903ff7faebee5d42e607ce63e0c83d"
  },
  {
    "url": "assets/js/3.94c01751.js",
    "revision": "20cdc4f1f2bb8363efd8e0d75bf2a46e"
  },
  {
    "url": "assets/js/4.07fc0971.js",
    "revision": "a92a1bfc03c6fe27245c37655029ba54"
  },
  {
    "url": "assets/js/5.1ed8e759.js",
    "revision": "8b968b80c010c88f3139ab04b751ca0f"
  },
  {
    "url": "assets/js/6.e86380d3.js",
    "revision": "93540cae28f8bc07b5c4c2b695ad5d44"
  },
  {
    "url": "assets/js/7.2a955bf9.js",
    "revision": "c7b63dc5a8676cc2a7ca6087cb82a49c"
  },
  {
    "url": "assets/js/8.2d140ac7.js",
    "revision": "f1b31d3b9fe225f3c468d2bbf31de785"
  },
  {
    "url": "assets/js/9.2e62f1e7.js",
    "revision": "95fbcc2f7bc4c23e15330c158e136e66"
  },
  {
    "url": "assets/js/app.7099126a.js",
    "revision": "67433d6527417a69cf9a13d8b2999edf"
  },
  {
    "url": "embedded-system/ble5-stack/index.html",
    "revision": "1caf121ec10126d25e68cffedc9e6e8a"
  },
  {
    "url": "embedded-system/ble5-stack/ti-rtos/clocks.html",
    "revision": "801ff53e8e5a82357573f7f9a6e7a01f"
  },
  {
    "url": "embedded-system/ble5-stack/ti-rtos/creating_vs_constructing.html",
    "revision": "56f2e6703087c4b0b236477d831dd192"
  },
  {
    "url": "embedded-system/ble5-stack/ti-rtos/index.html",
    "revision": "09a98291a1f6e3cff89fcb0e04cfc2ff"
  },
  {
    "url": "embedded-system/ble5-stack/ti-rtos/kernel_configuration.html",
    "revision": "a05cf95e783eccee2a7979c55e16eeee"
  },
  {
    "url": "embedded-system/ble5-stack/ti-rtos/power_management.html",
    "revision": "083733bdd2873e27a5a1f5ddf6ffe739"
  },
  {
    "url": "embedded-system/ble5-stack/ti-rtos/queues.html",
    "revision": "aaa025c5f358c92d79f4065483de24b4"
  },
  {
    "url": "embedded-system/ble5-stack/ti-rtos/tasks.html",
    "revision": "f757b30ec93339d977a17befd7df8aee"
  },
  {
    "url": "embedded-system/ble5-stack/ti-rtos/thread_synchronization.html",
    "revision": "dc82f46eb192fe811ddd56e4d37ca528"
  },
  {
    "url": "embedded-system/ecp/index.html",
    "revision": "d10f4a9ef63b734520fe71c5f92f67b0"
  },
  {
    "url": "embedded-system/index.html",
    "revision": "75644c041aeca94d3b58ca9ed7b6f613"
  },
  {
    "url": "embedded-system/SSH Login Without Password.html",
    "revision": "71b6745eff5908f8066538bd46f05341"
  },
  {
    "url": "embedded-system/stm32/stm32-learning-process.html",
    "revision": "713bc6b88c1d68ba85ef7c4ab64951db"
  },
  {
    "url": "guide/index.html",
    "revision": "1b0885e4f225147c13a002ef3957c6bd"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "84d23748070b44ebc7ee13833a3b9d12"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "7dc99936f7f1dbd843bec60d3d34694a"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "ae1b6a5585d47c83892e65e7adaf6d2e"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "a1d2ebb19b0a9eb28685eaee3065005b"
  },
  {
    "url": "index.html",
    "revision": "0d7c92ea62ad0a40c77a212e25972d72"
  },
  {
    "url": "program/c/index.html",
    "revision": "cfed2c2dc3c8356775ea7dd914488d90"
  },
  {
    "url": "program/data-structure/index.html",
    "revision": "53ef223dfe8fa9e3aa2f9c18e7d99231"
  },
  {
    "url": "program/data-structure/linear-table.html",
    "revision": "83ec9a8eaa216b2efb6bfd11c42bd86f"
  },
  {
    "url": "program/data-structure/stack.html",
    "revision": "fb699a3d62fc35ca3a8e97f3ac4fb9bf"
  },
  {
    "url": "program/index.html",
    "revision": "e5cee1c28494c7f4a1383f5fc1e33407"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
