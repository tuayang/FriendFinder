// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
        "name":"Wolverine",
        "photo":"https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/blogs/39242/2013/08/130648-130225.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Cyclops",
        "photo":"https://centralcityopera.org/wp-content/uploads/2018/07/Cyclops-X-Men.jpg",
        "scores":[
            3,
            1,
            2,
            5,
            2,
            1,
            5,
            4,
            4,
            1
          ]
      },
      {
        "name":"Superman",
        "photo":"https://www.sideshow.com/storage/product-images/903305/super-powers-superman_dc-comics_gallery_5c4d07bcf32e0.jpg",
        "scores":[
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
          ]
      }
  ];
  

  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  