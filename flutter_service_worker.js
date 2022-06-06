'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "671aaef322567d7e34bd75adbc2a5fa4",
"index.html": "042d9bc82f753aa67a360f31b4b0dc47",
"/": "042d9bc82f753aa67a360f31b4b0dc47",
"sn_logo.png": "f2624d9aebe6abd1fe9fb13ccde152b9",
"main.dart.js": "1f23511015664ffc6e261169b45569f0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c163a9ec4d725ec9aec66c42bc974c28",
"assets/AssetManifest.json": "7613627ed5643ba9b730fcebbbc93e7c",
"assets/NOTICES": "c431d9e6de31ab943b5ecbd40b71b98b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/arrow_down_white.png": "9304394f7be37c5508fe65ef141a193e",
"assets/assets/images/63.png": "4464136760c0040b6a20db0add6bc0e3",
"assets/assets/images/62.png": "634bc79d41491752be1fdea95b3d2f06",
"assets/assets/images/arrow_up_grey.png": "a42d8f6f011dc3a92a673320c8638295",
"assets/assets/images/60.png": "1d3f04824da4a03a0b4f77f8905e7e30",
"assets/assets/images/48.png": "9fcd9bdbad780f1ccc5c2ff5ff1deb4e",
"assets/assets/images/49.png": "f83318995f63faa76c2fa33f90b98a04",
"assets/assets/images/61.png": "de3d0b24f10048274ce9cb17157e03f0",
"assets/assets/images/59.png": "e36c220b86ea5b00e9e5652ca142e3c5",
"assets/assets/images/65.png": "f83318995f63faa76c2fa33f90b98a04",
"assets/assets/images/arrow_up_white.png": "e3d5c8e5742960dc3cc5d009abc3e5dc",
"assets/assets/images/sn_logo.png": "029c9d6eca2c47754625ad08ef1dda86",
"assets/assets/images/70.png": "ff8aaf3197911421203970b139570b2a",
"assets/assets/images/64.png": "0f00db5368db9de984ab260057d0fcc7",
"assets/assets/images/58.png": "c5d7383069691649793ea04ff50ab952",
"assets/assets/images/8.png": "bb684fb5680af22678659497b2e5ac5f",
"assets/assets/images/66.png": "705b522f20e5b472b2043e09922c9cfb",
"assets/assets/images/67.png": "dccc171f194a2a2fc36f01e0f8f1c12e",
"assets/assets/images/9.png": "ab86a816e07266a16f2f6927a5e663fb",
"assets/assets/images/14.png": "3174802f46f209a067e5cda6be23853d",
"assets/assets/images/28.png": "54c349e625f4c470495961f9393020be",
"assets/assets/images/29.png": "709ffb4c696bce6f03214ef4e77d5f06",
"assets/assets/images/15.png": "74ed2b0e5a66dcba5316fa952ecf7f0e",
"assets/assets/images/17.png": "2f3b6af489e2752e1db2b521b7aea108",
"assets/assets/images/16.png": "ef5c5c2bfbcf701e2ab2451ec9aa85fa",
"assets/assets/images/12.png": "0c9fb5ad22da521b0b1c35125c0ddef0",
"assets/assets/images/13.png": "8f3c9eb25d9384d17483787d580ff1a4",
"assets/assets/images/39.png": "934d21aeccf0447292b8b5d10da2c520",
"assets/assets/images/11.png": "8a1a236199c1c7f43927fa23730eb578",
"assets/assets/images/10.png": "983705ddcdb8a3d4245776fec3eff79a",
"assets/assets/images/38.png": "e057a93a5e682b495e44760ec0a13009",
"assets/assets/images/35.png": "073df9e5a102b93342d2a89cee7c1f6e",
"assets/assets/images/21.png": "b773b5c6930dc00aafbe19054f755552",
"assets/assets/images/20.png": "32b6fd2578284a69d7ca332bd2eef9d6",
"assets/assets/images/34.png": "8fb65c2ee60bdf0fb91b92233c136f92",
"assets/assets/images/22.png": "7b18fb2782bd00251c99e8985b62dcd4",
"assets/assets/images/36.png": "e9d2779e2fbe63ba172af3dd58b33fb3",
"assets/assets/images/37.png": "092d96e3ef317b45a1a9ee42989dd0c9",
"assets/assets/images/23.png": "087b8eca3a0a2e1dbff43a5b06268b89",
"assets/assets/images/27.png": "66733a0305ad9b0ee6d76b93b5e581a1",
"assets/assets/images/33.png": "5887ce9a26f24223b9e6ef21ebaf439f",
"assets/assets/images/32.png": "06ce3511b33b4171c17f88a3df576b4a",
"assets/assets/images/26.png": "eb8f8b0512a4f566d8bb3f6ccb80970f",
"assets/assets/images/18.png": "f31c6b65b82f1394f20a475c569c2cd6",
"assets/assets/images/30.png": "756a9e8f6d968bc5671de5fbc5e86edf",
"assets/assets/images/24.png": "308c3ef69c221ac1b20792fd1a2d38c7",
"assets/assets/images/25.png": "641868d333a95b6b29fe26d731bff373",
"assets/assets/images/31.png": "8a5b5421f85e496354d605ed14d914bb",
"assets/assets/images/19.png": "0c35c3da9ff17f2d49cced2616dab539",
"assets/assets/images/4.png": "0e1ed8ebc69d47e9ace89f95c811d6c6",
"assets/assets/images/56.png": "220fe4b736fcfae662abfbe60db1d83c",
"assets/assets/images/42.png": "2b7dc7c2e22dcac27a775c2e384a2d55",
"assets/assets/images/43.png": "de3d0b24f10048274ce9cb17157e03f0",
"assets/assets/images/5.png": "5b29d8158679494285287a29b3ed2cbd",
"assets/assets/images/57.png": "1128edc0a6b90f47942ae2bb1958cfea",
"assets/assets/images/41.png": "a86889ca157d679fc0a2a03ab9796b5c",
"assets/assets/images/55.png": "8fb65c2ee60bdf0fb91b92233c136f92",
"assets/assets/images/7.png": "c070fc387b72e8233176bc38dc866349",
"assets/assets/images/69.png": "ba8c8b8c678d88d84757543effbd4f7c",
"assets/assets/images/arrow_down_grey.png": "ce511a46a4c31fe01ed3c72ef7236154",
"assets/assets/images/68.png": "4f7f48270e2208b79fa1ae714f21d1bf",
"assets/assets/images/54.png": "33b6e42548dd8432944bf1ed5daecf54",
"assets/assets/images/6.png": "7dd422cf8dd824df8224c6d562bc7005",
"assets/assets/images/40.png": "786833ccac3a1d70d3ab8e494cf0fbfa",
"assets/assets/images/44.png": "28820e26b433908f44c8b2cec7af2803",
"assets/assets/images/2.png": "9285f724fc7f2202b41d6a7c4fa4cb12",
"assets/assets/images/50.png": "e35c65a2a8e9de29198fe79617050bec",
"assets/assets/images/3.png": "79a9dfccbba4eda9e68b1cc2626d4805",
"assets/assets/images/51.png": "705b522f20e5b472b2043e09922c9cfb",
"assets/assets/images/45.png": "cb9c2b7f41a16151d8822e4fe667d266",
"assets/assets/images/53.png": "a8881279f7c6360e65f2580f7b7bcbc2",
"assets/assets/images/1.png": "849d21e342c83da40a72704679afb206",
"assets/assets/images/47.png": "06ce3511b33b4171c17f88a3df576b4a",
"assets/assets/images/bell_black.png": "2f3b6af489e2752e1db2b521b7aea108",
"assets/assets/images/46.png": "4464136760c0040b6a20db0add6bc0e3",
"assets/assets/images/52.png": "be614d2903230c5f855c3df6904af8be"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
