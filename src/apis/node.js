// // import { v4 as uuidv4 } from "uuid";
// // import { JSDOM } from "jsdom";

// // function createWeaponObjects(weapons, category) {
// //   let count = 0;

// //   return weapons.map((weapon) => {
// //     // Parse HTML using jsdom

// //     const dom = new JSDOM(weapon);
// //     const doc = dom.window.document;
// //     const anchor = doc.querySelector('a[href*="sketchfab.com/3d-models"]');

// //     const name = anchor?.textContent?.trim() ?? "Unknown";

// //     return {
// //       sNo: count++,
// //       category,
// //       name,
// //       sketchFabUrl: weapon,
// //       uniqueCode: uuidv4(),
// //     };
// //   });
// // }

// // var machineGun = [`<div class="sketchfab-embed-wrapper"> <iframe title="DShK" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d60ae4a05b054da6af45defd8b498c5d/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/dshk-d60ae4a05b054da6af45defd8b498c5d?utm_medium=embed&utm_campaign=share-popup&utm_content=d60ae4a05b054da6af45defd8b498c5d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> DShK </a> by <a href="https://sketchfab.com/carbuni?utm_medium=embed&utm_campaign=share-popup&utm_content=d60ae4a05b054da6af45defd8b498c5d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Carbuni </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d60ae4a05b054da6af45defd8b498c5d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`,
// //   `<div class="sketchfab-embed-wrapper"> <iframe title="low-poly NSV 12,7 &quot;Utes&quot;" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8c5204a9ed1a43c2b35636aecca5a683/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/low-poly-nsv-127-utes-8c5204a9ed1a43c2b35636aecca5a683?utm_medium=embed&utm_campaign=share-popup&utm_content=8c5204a9ed1a43c2b35636aecca5a683" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> low-poly NSV 12,7 &quot;Utes&quot; </a> by <a href="https://sketchfab.com/DU1701?utm_medium=embed&utm_campaign=share-popup&utm_content=8c5204a9ed1a43c2b35636aecca5a683" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> D_U </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8c5204a9ed1a43c2b35636aecca5a683" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`,
// //   `<div class="sketchfab-embed-wrapper"> <iframe title="low-poly Kord 12.7" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/20c24336ba1f42fba3af34f53aa7b22d/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/low-poly-kord-127-20c24336ba1f42fba3af34f53aa7b22d?utm_medium=embed&utm_campaign=share-popup&utm_content=20c24336ba1f42fba3af34f53aa7b22d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> low-poly Kord 12.7 </a> by <a href="https://sketchfab.com/DU1701?utm_medium=embed&utm_campaign=share-popup&utm_content=20c24336ba1f42fba3af34f53aa7b22d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> D_U </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=20c24336ba1f42fba3af34f53aa7b22d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`,
// //   `<div class="sketchfab-embed-wrapper"> <iframe title="M2 Browning" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/7b83ca60e6c9451f9f23d2d0bc0e4710/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/m2-browning-7b83ca60e6c9451f9f23d2d0bc0e4710?utm_medium=embed&utm_campaign=share-popup&utm_content=7b83ca60e6c9451f9f23d2d0bc0e4710" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> M2 Browning </a> by <a href="https://sketchfab.com/Tnkii?utm_medium=embed&utm_campaign=share-popup&utm_content=7b83ca60e6c9451f9f23d2d0bc0e4710" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Charlie Tinley </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7b83ca60e6c9451f9f23d2d0bc0e4710" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`,
// // ]
// // machineGun = createWeaponObjects(machineGun,'machineGun')
// // console.log(machineGun)

// const addNameFromTitle = (weapons) => {
//   return weapons.map((weapon) => {
//     const titleMatch = weapon.sketchFabUrl.match(/<iframe[^>]*title="([^"]+)"/);
//     const name = titleMatch ? titleMatch[1] : "Unknown";
//     return { ...weapon, name };
//   });
// };
// // const sniperRefiles = [
// //   {
// //     sNo: 0,
// //     category: "Sniper",
// //     uniqueCode: "1452b79c-d1e8-435e-8fa3-8aa79ddb9d78",
// //     sketchFabUrl:
// //       '<div class="sketchfab-embed-wrapper"> <iframe title="M24 Sniper Rifle" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1dafeafd87a94bd9b5da96a22db61bb4/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/m24-sniper-rifle-1dafeafd87a94bd9b5da96a22db61bb4?utm_medium=embed&utm_campaign=share-popup&utm_content=1dafeafd87a94bd9b5da96a22db61bb4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> M24 Sniper Rifle </a> by <a href="https://sketchfab.com/miranda81?utm_medium=embed&utm_campaign=share-popup&utm_content=1dafeafd87a94bd9b5da96a22db61bb4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> João Miranda </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1dafeafd87a94bd9b5da96a22db61bb4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
// //   },
// //   {
// //     sNo: 1,
// //     category: "Sniper",
// //     uniqueCode: "30ffd62b-fa67-40f6-886e-dbfc044cdd48",
// //     sketchFabUrl:
// //       '<div class="sketchfab-embed-wrapper"> <iframe title="Remington 700" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4c9726610f6b4440bea20fb55a03b117/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/remington-700-4c9726610f6b4440bea20fb55a03b117?utm_medium=embed&utm_campaign=share-popup&utm_content=4c9726610f6b4440bea20fb55a03b117" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Remington 700 </a> by <a href="https://sketchfab.com/Nitropunch?utm_medium=embed&utm_campaign=share-popup&utm_content=4c9726610f6b4440bea20fb55a03b117" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Nitropunch </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4c9726610f6b4440bea20fb55a03b117" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
// //   },
// //   {
// //     sNo: 2,
// //     category: "Sniper",
// //     uniqueCode: "59ad7b86-0977-422e-815e-5686950a8a45",
// //     sketchFabUrl:
// //       '<div class="sketchfab-embed-wrapper"> <iframe title="L96A1" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/e46ec65c62dc4173ae2f415b21e406ed/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/l96a1-e46ec65c62dc4173ae2f415b21e406ed?utm_medium=embed&utm_campaign=share-popup&utm_content=e46ec65c62dc4173ae2f415b21e406ed" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> L96A1 </a> by <a href="https://sketchfab.com/I_Live?utm_medium=embed&utm_campaign=share-popup&utm_content=e46ec65c62dc4173ae2f415b21e406ed" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ARIA </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e46ec65c62dc4173ae2f415b21e406ed" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
// //   },
// //   {
// //     sNo: 3,
// //     category: "Sniper",
// //     uniqueCode: "345689fa-880e-455f-851a-7ce8a59f4648",
// //     sketchFabUrl:
// //       '<div class="sketchfab-embed-wrapper"> <iframe title="Barrett MRAD Rifle" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/bf05adffda094d4caea55587fb7c0eb2/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/barrett-mrad-rifle-bf05adffda094d4caea55587fb7c0eb2?utm_medium=embed&utm_campaign=share-popup&utm_content=bf05adffda094d4caea55587fb7c0eb2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Barrett MRAD Rifle </a> by <a href="https://sketchfab.com/Akinaro?utm_medium=embed&utm_campaign=share-popup&utm_content=bf05adffda094d4caea55587fb7c0eb2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Akinaro </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=bf05adffda094d4caea55587fb7c0eb2" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
// //   },
// //   {
// //     sNo: 4,
// //     category: "Sniper",
// //     uniqueCode: "6a223d36-1081-410d-ac78-70c5b05d7f37",
// //     sketchFabUrl:
// //       '<div class="sketchfab-embed-wrapper"> <iframe title="Low-poly Dragunov SVD" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/79216d567ce34644a3f3f0cd4bc8e80a/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/low-poly-dragunov-svd-79216d567ce34644a3f3f0cd4bc8e80a?utm_medium=embed&utm_campaign=share-popup&utm_content=79216d567ce34644a3f3f0cd4bc8e80a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Low-poly Dragunov SVD </a> by <a href="https://sketchfab.com/veightyfive?utm_medium=embed&utm_campaign=share-popup&utm_content=79216d567ce34644a3f3f0cd4bc8e80a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> veightyfive </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=79216d567ce34644a3f3f0cd4bc8e80a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
// //   },
// //   {
// //     sNo: 5,
// //     category: "Sniper",
// //     uniqueCode: "2b94fea7-c2c0-4608-ac76-ec1f68ef21bc",
// //     sketchFabUrl:
// //       '<div class="sketchfab-embed-wrapper"> <iframe title="M40 Sniper Rifle" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/986b4e4dd8064885af60489aaf7e6d13/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/m40-sniper-rifle-986b4e4dd8064885af60489aaf7e6d13?utm_medium=embed&utm_campaign=share-popup&utm_content=986b4e4dd8064885af60489aaf7e6d13" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> M40 Sniper Rifle </a> by <a href="https://sketchfab.com/danhorsfall?utm_medium=embed&utm_campaign=share-popup&utm_content=986b4e4dd8064885af60489aaf7e6d13" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> danhorsfall </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=986b4e4dd8064885af60489aaf7e6d13" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
// //   },
// //   {
// //     sNo: 6,
// //     category: "Sniper",
// //     uniqueCode: "c31f1efe-647c-45c8-ab99-69f0d0cfb8e5",
// //     sketchFabUrl:
// //       '<div class="sketchfab-embed-wrapper"> <iframe title="SSG-69" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/7ef46267ddc6476aad8ff4e9ddb8027b/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ssg-69-7ef46267ddc6476aad8ff4e9ddb8027b?utm_medium=embed&utm_campaign=share-popup&utm_content=7ef46267ddc6476aad8ff4e9ddb8027b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> SSG-69 </a> by <a href="https://sketchfab.com/igroman92?utm_medium=embed&utm_campaign=share-popup&utm_content=7ef46267ddc6476aad8ff4e9ddb8027b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Igor Bardychev </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7ef46267ddc6476aad8ff4e9ddb8027b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
// //   },
// //   {
// //     sNo: 7,
// //     category: "Sniper",
// //     uniqueCode: "9ac03775-1284-40c6-a34b-e4b48f75ae80",
// //     sketchFabUrl:
// //       '<div class="sketchfab-embed-wrapper"> <iframe title="CHEYTAC M200 INTERVENTION" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8bba3f02b2d643ccba945135a2a4a6f9/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/cheytac-m200-intervention-8bba3f02b2d643ccba945135a2a4a6f9?utm_medium=embed&utm_campaign=share-popup&utm_content=8bba3f02b2d643ccba945135a2a4a6f9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> CHEYTAC M200 INTERVENTION </a> by <a href="https://sketchfab.com/JaumWF?utm_medium=embed&utm_campaign=share-popup&utm_content=8bba3f02b2d643ccba945135a2a4a6f9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> JaumWF </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8bba3f02b2d643ccba945135a2a4a6f9" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
// //   },
// //   {
// //     sNo: 8,
// //     category: "Sniper",
// //     uniqueCode: "c0bc07bf-13dd-453f-8f3b-8be1a4cc020e",
// //     sketchFabUrl:
// //       '<div class="sketchfab-embed-wrapper"> <iframe title="AXMC Sniper rifle" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f9a0c21448e44b3eb23b75e462de676b/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/axmc-sniper-rifle-f9a0c21448e44b3eb23b75e462de676b?utm_medium=embed&utm_campaign=share-popup&utm_content=f9a0c21448e44b3eb23b75e462de676b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> AXMC Sniper rifle </a> by <a href="https://sketchfab.com/YJW?utm_medium=embed&utm_campaign=share-popup&utm_content=f9a0c21448e44b3eb23b75e462de676b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> YJW </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=f9a0c21448e44b3eb23b75e462de676b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
// //   },
// //   {
// //     sNo: 9,
// //     category: "Sniper",
// //     uniqueCode: "77bbdf3e-bebc-4ade-a0fc-de27749bb7cb",
// //     sketchFabUrl:
// //       '<div class="sketchfab-embed-wrapper"> <iframe title="Tikka T3x TACT A1 rifle on 308win" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6b5cd11c1e7e4f318e2e1dd349ede603/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/tikka-t3x-tact-a1-rifle-on-308win-6b5cd11c1e7e4f318e2e1dd349ede603?utm_medium=embed&utm_campaign=share-popup&utm_content=6b5cd11c1e7e4f318e2e1dd349ede603" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Tikka T3x TACT A1 rifle on 308win </a> by <a href="https://sketchfab.com/Sirenos?utm_medium=embed&utm_campaign=share-popup&utm_content=6b5cd11c1e7e4f318e2e1dd349ede603" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Sirenos </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6b5cd11c1e7e4f318e2e1dd349ede603" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
// //   },
// // ];
// const tanks = [
//   {
//     sNo: 0,
//     category: "Tanks",
//     uniqueCode: "2e0f5a21-cbf8-4ba3-91d7-ac56821e810a",
//     sketchFabUrl:
//       '<div class="sketchfab-embed-wrapper"> <iframe title="M1 Abrams" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/2577a4eccbc74b2da6dba5bfd09b7511/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/m1-abrams-2577a4eccbc74b2da6dba5bfd09b7511?utm_medium=embed&utm_campaign=share-popup&utm_content=2577a4eccbc74b2da6dba5bfd09b7511" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> M1 Abrams </a> by <a href="https://sketchfab.com/Artem.Goyko?utm_medium=embed&utm_campaign=share-popup&utm_content=2577a4eccbc74b2da6dba5bfd09b7511" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Artem Goyko </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=2577a4eccbc74b2da6dba5bfd09b7511" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
//   },
//   {
//     sNo: 1,
//     category: "Tanks",
//     uniqueCode: "6bfb892e-61c6-4c8c-bf7d-ebe23f61960e",
//     sketchFabUrl:
//       '<div class="sketchfab-embed-wrapper"> <iframe title="M60 Patton Tank (3D Scan)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/a4760d3a61f0425c97353592e6cb3589/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/m60-patton-tank-3d-scan-a4760d3a61f0425c97353592e6cb3589?utm_medium=embed&utm_campaign=share-popup&utm_content=a4760d3a61f0425c97353592e6cb3589" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> M60 Patton Tank (3D Scan) </a> by <a href="https://sketchfab.com/kryik1023?utm_medium=embed&utm_campaign=share-popup&utm_content=a4760d3a61f0425c97353592e6cb3589" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Renafox </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=a4760d3a61f0425c97353592e6cb3589" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
//   },
//   {
//     sNo: 2,
//     category: "Tanks",
//     uniqueCode: "c02f536f-17f8-4c7b-ac70-d0b605e4927f",
//     sketchFabUrl:
//       '<div class="sketchfab-embed-wrapper"> <iframe title="T-90" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/9bb8af8876a6478aa92089eff058d4db/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/t-90-9bb8af8876a6478aa92089eff058d4db?utm_medium=embed&utm_campaign=share-popup&utm_content=9bb8af8876a6478aa92089eff058d4db" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> T-90 </a> by <a href="https://sketchfab.com/alexxx_xarchenko?utm_medium=embed&utm_campaign=share-popup&utm_content=9bb8af8876a6478aa92089eff058d4db" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> alexxx_xarchenko </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9bb8af8876a6478aa92089eff058d4db" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
//   },
//   {
//     sNo: 3,
//     category: "Tanks",
//     uniqueCode: "f2e28ef7-99e9-49e0-bc14-c6208bf083ba",
//     sketchFabUrl:
//       '<div class="sketchfab-embed-wrapper"> <iframe title="T-14 Armata" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/88f9dbed5418494b9c6464e59377e276/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/t-14-armata-88f9dbed5418494b9c6464e59377e276?utm_medium=embed&utm_campaign=share-popup&utm_content=88f9dbed5418494b9c6464e59377e276" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> T-14 Armata </a> by <a href="https://sketchfab.com/roberdigiorge?utm_medium=embed&utm_campaign=share-popup&utm_content=88f9dbed5418494b9c6464e59377e276" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Rober Digiorge </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=88f9dbed5418494b9c6464e59377e276" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
//   },
// ];
// const updatedAssualtRifles = addNameFromTitle(tanks);
// console.log(updatedAssualtRifles);
