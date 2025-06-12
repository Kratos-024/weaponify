function addReviewData(arr) {
  return arr.map((item) => ({
    ...item,
    stars: Math.floor(Math.random() * 6),
    noOfPeopleReviewed: Math.floor(Math.random() * 1001),
  }));
}
var shotguns = [
  {
    sNo: 0,
    category: "shotguns",
    name: "Remington 870 Shotgun",
    sketchFabUrl:
      '<div class="sketchfab-embed-wrapper"> <iframe title="Remington 870 Shotgun" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6db0ad4764d14eee8f063eea3600071b/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/remington-870-shotgun-6db0ad4764d14eee8f063eea3600071b?utm_medium=embed&utm_campaign=share-popup&utm_content=6db0ad4764d14eee8f063eea3600071b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Remington 870 Shotgun </a> by <a href="https://sketchfab.com/milinam2002?utm_medium=embed&utm_campaign=share-popup&utm_content=6db0ad4764d14eee8f063eea3600071b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Andrei Milin </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6db0ad4764d14eee8f063eea3600071b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
    uniqueCode: "a743af23-67de-44eb-b18d-816c9477c121",
  },
  {
    sNo: 1,
    category: "shotguns",
    name: "Mossberg 500 - Model",
    sketchFabUrl:
      '<div class="sketchfab-embed-wrapper"> <iframe title="Mossberg 500 - Model" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ccc8de8945434bfd89caeb63064d8d26/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/mossberg-500-model-ccc8de8945434bfd89caeb63064d8d26?utm_medium=embed&utm_campaign=share-popup&utm_content=ccc8de8945434bfd89caeb63064d8d26" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Mossberg 500 - Model </a> by <a href="https://sketchfab.com/davewatts?utm_medium=embed&utm_campaign=share-popup&utm_content=ccc8de8945434bfd89caeb63064d8d26" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Dave Watts </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ccc8de8945434bfd89caeb63064d8d26" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
    uniqueCode: "a0219ea9-0c2f-44f4-a431-f38a22d3e725",
  },
  {
    sNo: 2,
    category: "shotguns",
    name: "Winchester Model 1897",
    sketchFabUrl:
      '<div class="sketchfab-embed-wrapper"> <iframe title="Winchester Model 1897" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6194ecd23344442fb23f5820f895a0d8/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/winchester-model-1897-6194ecd23344442fb23f5820f895a0d8?utm_medium=embed&utm_campaign=share-popup&utm_content=6194ecd23344442fb23f5820f895a0d8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Winchester Model 1897 </a> by <a href="https://sketchfab.com/buh-late?utm_medium=embed&utm_campaign=share-popup&utm_content=6194ecd23344442fb23f5820f895a0d8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> buh </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6194ecd23344442fb23f5820f895a0d8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
    uniqueCode: "07876444-7cfe-4b47-8b59-e6e53ee55e7e",
  },
  {
    sNo: 3,
    category: "shotguns",
    name: "Ithaca 37",
    sketchFabUrl:
      '<div class="sketchfab-embed-wrapper"> <iframe title="Ithaca 37" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6aa11fdd57ee4e2bbd51b9b648c8f71c/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ithaca-37-6aa11fdd57ee4e2bbd51b9b648c8f71c?utm_medium=embed&utm_campaign=share-popup&utm_content=6aa11fdd57ee4e2bbd51b9b648c8f71c" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ithaca 37 </a> by <a href="https://sketchfab.com/ulfen?utm_medium=embed&utm_campaign=share-popup&utm_content=6aa11fdd57ee4e2bbd51b9b648c8f71c" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ulfen </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6aa11fdd57ee4e2bbd51b9b648c8f71c" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
    uniqueCode: "62a0cf17-8f36-4c20-bab4-8e32dd238700",
  },
];
shotguns = addReviewData(shotguns);
console.log(shotguns);
