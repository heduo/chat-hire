"use strict";var precacheConfig=[["/index.html","6063aeb14403bcb728b0218ac1ca0c3c"],["/static/css/main.9ff016c8.css","6981f255e453cf5998a638b81efbea5f"],["/static/js/main.bb2d2bda.js","d8bf2337ae07e3baed6d6a72e2261e42"],["/static/media/assistant.492e6bd9.svg","492e6bd99b9b4f29a7b34b8b87401113"],["/static/media/astronaut.2162a06f.svg","2162a06f7c0a813760b03b48b7408e87"],["/static/media/boy.efe01b90.svg","efe01b90316cc1eca182c240aa38b1f8"],["/static/media/businessman.b1cef4ad.svg","b1cef4ad6b81432bbb55d120f634b6b7"],["/static/media/captain.bb768236.svg","bb7682366cbc165da70d8e7ca21de8c0"],["/static/media/cashier.07c53666.svg","07c5366641bb4ba111486aee12a806b6"],["/static/media/chef.3d45452b.svg","3d45452b1c29637e47895c077e6a66d6"],["/static/media/concierge.13e9fe6f.svg","13e9fe6fea280601b1c4d93ea8935eac"],["/static/media/cooker.bf9e2e1d.svg","bf9e2e1d24a4a76ae2230afe5d9481c0"],["/static/media/courier.f8688959.svg","f8688959ce611e2e3cdf233c6cb4e91b"],["/static/media/croupier-1.21f68ae1.svg","21f68ae19df82695acaedd717e7a702e"],["/static/media/croupier.5e4f6dcd.svg","5e4f6dcd516fe55a1be7e7a9281959d8"],["/static/media/detective.971bc564.svg","971bc56464cef640567bb4142307fa33"],["/static/media/disc-jockey.bd5d4453.svg","bd5d44532147d462eb2db9ee9f2173c8"],["/static/media/diver.e4bd4c4b.svg","e4bd4c4b4364374b1b45e1dfb53e388d"],["/static/media/doctor-1.ee90fb5e.svg","ee90fb5edd5e3016bf3febdb5c021305"],["/static/media/doctor.0e75b6ff.svg","0e75b6ffca8dfc0196db8ccd186006f7"],["/static/media/engineer.f8a39b5d.svg","f8a39b5de8b2ec92df8d0ccc35703955"],["/static/media/farmer.29ef8f14.svg","29ef8f14f1800eb36f1d93fd53271428"],["/static/media/firefighter-1.5d40fa62.svg","5d40fa6257fda4bacaa978ff25acdfef"],["/static/media/firefighter.cb27a085.svg","cb27a085ab6ce8abd51e2bb6ad8302aa"],["/static/media/gentleman.adc24055.svg","adc240559a4d7c6a55dc7335131d8de1"],["/static/media/girl.3db93ee6.svg","3db93ee66771187236f81a136f7622a8"],["/static/media/journalist.0f8f6002.svg","0f8f600274334bfa45b472e19d8e05f8"],["/static/media/judge.f5d068e2.svg","f5d068e2bb0e19bea2d118fe84a55024"],["/static/media/loader.d556bf07.svg","d556bf074d30807361e15d8f985b874f"],["/static/media/maid.334391df.svg","334391df8dd64fa1b5a1d777e465ea48"],["/static/media/manager.3fffdd46.svg","3fffdd462b542016c8e3ca20551ed941"],["/static/media/me.f4d00882.svg","f4d00882572b6e72748ffdd02e207d15"],["/static/media/meActive.94ada234.svg","94ada2341d1b06189e121d3674493e81"],["/static/media/miner.205f8880.svg","205f8880ba2382ccbf3a3d71934d9c4f"],["/static/media/motorcyclist.7d02f5b3.svg","7d02f5b301a1e577f4dc18bad6d64941"],["/static/media/msg.2b33a1bd.svg","2b33a1bdfa41eb753276ac0c7ee3223c"],["/static/media/msgActive.92384a66.svg","92384a66efae864ca0f27d2b99c0d855"],["/static/media/nun.2f6c632e.svg","2f6c632e2ebb1a0cb7672caa3227ba3f"],["/static/media/nurse.8d38ec36.svg","8d38ec36470f91b968b1a0c488e47211"],["/static/media/pilot.5e131a19.svg","5e131a19848b182085133750258c16f9"],["/static/media/policeman.aff9dde8.svg","aff9dde8e01a569ae0658bca0ce4751c"],["/static/media/postman.74e02e43.svg","74e02e43fec60d5286b363371ee28644"],["/static/media/priest.7969df98.svg","7969df985fc0c6c8bd79636ec7406bf3"],["/static/media/scientist.075d0651.svg","075d0651a39ac75ce8e3c57b3a3336fb"],["/static/media/sheriff.0b2bd99c.svg","0b2bd99c500d9d9a00c3a0f76f41761a"],["/static/media/showman.8f55cb26.svg","8f55cb261d2a74c94b761541205ea528"],["/static/media/soldier-1.f27e57cd.svg","f27e57cdcc6c509a918ef2a3a4d0c724"],["/static/media/soldier.b1f4696d.svg","b1f4696d1d0ec4a8239f260635c62e26"],["/static/media/stewardess.9df06db7.svg","9df06db739852f5b2a6c9d6bcc757d45"],["/static/media/surgeon.65f5a535.svg","65f5a535fa80dc4c7f50fde993bb2a71"],["/static/media/swat.4bda1da3.svg","4bda1da322e30985bd811f36259b5b28"],["/static/media/taxi-driver.62629aa1.svg","62629aa1452028ba4b386e0d08263575"],["/static/media/teacher.40de9ae2.svg","40de9ae227d150158a83191a427f1298"],["/static/media/thief.8ac7594d.svg","8ac7594dc956fce5cbac527c5aa9d783"],["/static/media/users.9879af2c.svg","9879af2c8031995f881a97ab2d0f6dc5"],["/static/media/usersActive.23045ead.svg","23045eadadf7e48154217608e425e68c"],["/static/media/waiter.ba494008.svg","ba494008440d140aa230c2803a34242b"],["/static/media/welder.48b6321f.svg","48b6321f1be8c0295c5850dedfb6a648"],["/static/media/worker-1.f7be521e.svg","f7be521e4803a8ad61285736c2f6f6e4"],["/static/media/worker.20f1f5b9.svg","20f1f5b9c44e60a8caae8a26e66d3814"],["/static/media/writer.a8d169f3.svg","a8d169f37a57b22ea08ea9d86aaedaa5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var s="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});