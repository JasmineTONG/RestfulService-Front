angular.module('starter.services', [])

  .factory('StarShops', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var starShops = [{
      id: 0,
      name: '朴海镇的周边',
      description: '奶酪陷阱/海报/创意闹钟',
      face: 'img/piaohaizhen-front.jpg',
      items: [
        {
          itemID: 0,
          itemName: "朴海镇海报",
          itemImg: 'https://gd2.alicdn.com/bao/uploaded/i2/376784980/TB24Nz8nFXXXXb3XpXXXXXXXXXX_!!376784980.jpg',
          itemDescription: "引进国外撒金工艺印刷技术，高清印刷，不褪色。彰显奢华典雅，品质高贵。收藏送礼不二之选。",
          itemPrice: "￥9.90",
          itemLink: "https://item.taobao.com/item.htm?spm=a230r.1.14.11.WPCLH5&id=530678398110&ns=1&abbucket=4#detail"
        },
        {
          itemID: 1,
          itemName: "朴海镇周边七彩发光闹钟",
          itemImg: 'https://gd1.alicdn.com/bao/uploaded/i1/772127880/TB2yKGlpXXXXXbvXpXXXXXXXXXX_!!772127880.jpg',
          itemDescription: "7种颜色变化+8种闹钟铃声+日期功能+温度计功能，专属于您的个性珍藏！",
          itemPrice: "￥19.80",
          itemLink: "https://item.taobao.com/item.htm?spm=a230r.1.14.57.WPCLH5&id=531922582833&ns=1&abbucket=4#detail"
        }
      ]

    }, {
      id: 0,
      name: 'RunningMan的周边',
      description: '蓝光DVD/节目花絮',
      face: 'img/runningman-front.jpg'
    }, {
      id: 1,
      name: '神话Eric的周边',
      description: '主演电视剧导演版DVD',
      face: 'img/eric-front.jpg'
    }];

    return {
      all: function () {
        return starShops;
      },
      remove: function (starShop) {
        starShops.splice(starShops.indexOf(starShop), 1);
      },
      get: function (starShopId) {
        for (var i = 0; i < starShops.length; i++) {
          if (starShops[i].id === parseInt(starShopId)) {
            return starShops[i];
          }
        }
        return null;
      }
    };
  })

  .factory('AlbumStore', function () {

    var albumStore = [{
      id: 0,
      name: '朴海镇的图集',
      detail: '丰富剧照、街拍',
      frontImg: 'img/star1/albumFront.jpg',
      album: [
        {
          photoId: 0,
          photoUrl: 'img/star1/album/001.jpg'
        },
        {
          photoId: 1,
          photoUrl: 'img/star1/album/002.jpg'
        },
        {
          photoId: 2,
          photoUrl: 'img/star1/album/003.jpg'
        },
        {
          photoId: 3,
          photoUrl: 'img/star1/album/004.jpg'
        },
        {
          photoId: 4,
          photoUrl: 'img/star1/album/005.jpg'
        },
        {
          photoId: 5,
          photoUrl: 'img/star1/album/1001.jpg'
        },
        {
          photoId: 6,
          photoUrl: 'img/star1/album/1002.jpg'
        },
        {
          photoId: 7,
          photoUrl: 'img/star1/album/1003.jpg'
        },
        {
          photoId: 8,
          photoUrl: 'img/star1/album/1004.jpg'
        },
        {
          photoId: 9,
          photoUrl: 'img/star1/album/1005.jpg'
        }
      ]
    }, {
      id: 1,
      name: 'RunningMan的图集',
      detail: '节目现场欢乐多多',
      frontImg: 'img/star2/albumFront.jpg',
      album: [
        {
          photoId: 0,
          photoUrl: 'img/star2/album/7vs300_01.jpg'
        },
        {
          photoId: 1,
          photoUrl: 'img/star2/album/7vs300_02.jpg'
        },
        {
          photoId: 2,
          photoUrl: 'img/star2/album/dubai_01.jpg'
        },
        {
          photoId: 3,
          photoUrl: 'img/star2/album/dubai_02.jpg'
        },
        {
          photoId: 4,
          photoUrl: 'img/star2/album/dubai_03.jpg'
        },
        {
          photoId: 5,
          photoUrl: 'img/star2/album/dubai_04.jpg'
        },
        {
          photoId: 6,
          photoUrl: 'img/star2/album/dubai_05.jpg'
        },
        {
          photoId: 7,
          photoUrl: 'img/star2/album/rm-hyz_01.jpg'
        },
        {
          photoId: 8,
          photoUrl: 'img/star2/album/rm-hyz_02.jpg'
        },
        {
          photoId: 9,
          photoUrl: 'img/star2/album/rm-hyz_03.jpg'
        },]
    }, {
      id: 2,
      name: '文晸赫的图集',
      detail: '文晸赫出席各类活动',
      frontImg: 'img/star3/albumFront.jpg',
      album: [
        {
          photoId: 0,
          photoUrl: 'img/star3/album/againoh_01.jpg'
        },
        {
          photoId: 1,
          photoUrl: 'img/star3/album/againoh_02.jpg'
        },
        {
          photoId: 2,
          photoUrl: 'img/star3/album/againoh_03.jpg'
        },
        {
          photoId: 3,
          photoUrl: 'img/star3/album/againoh_04.jpg'
        },
        {
          photoId: 4,
          photoUrl: 'img/star3/album/againoh_05.jpg'
        },
        {
          photoId: 5,
          photoUrl: 'img/star3/album/againoh_06.jpg'
        },
        {
          photoId: 6,
          photoUrl: 'img/star3/album/againoh_07.jpg'
        }]
    }];

    return {
      all: function () {
        return albumStore;
      },

      get: function (starAlbumId) {
        for (var i = 0; i < albumStore.length; i++) {
          if (albumStore[i].id === parseInt(starAlbumId)) {
            return albumStore[i];
          }
        }
        return null;
      },

      getPhoto: function (starAlbumId, photoId) {
        for (var i = 0; i < albumStore.length; i++) {
          if (albumStore[i].id === parseInt(starAlbumId)) {
            for (var j = 0; j < albumStore[i].album.length; j++) {
              if (albumStore[i].album[j].photoId === parseInt(photoId)) {
                return albumStore[i].album[j];
              }
            }
          }
        }
        return null;
      }
    };

  })

  .factory('Stars', function () {

    var stars = [{
      id: 0,
      name: '朴海镇',
      face: 'img/piaohaizhen-front.jpg',
      birthday: '1983年5月1日',
      job: '演员，歌手，模特，设计师',
      followed: true
    },
      {
        id: 1,
        name: 'RunningMan',
        face: 'img/runningman-front.jpg',
        birthday: '1966年到1985年不等',
        job: '群星',
        followed: true
      },
      {
        id: 2,
        name: '文晸赫',
        face: 'img/eric-front.jpg',
        birthday: '1979年2月16日',
        constellation: '水瓶座',
        bloodType: 'B型',
        height: '180cm',
        weight: '71kg',
        job: '歌手，演员',
        masterWork: '火鸟，新进职员，恋爱的发现，六月日记',
        followed: false
      }];

    return {
      all: function () {
        return stars;
      },

      get: function (starId) {
        for (var i = 0; i < stars.length; i++) {
          if (stars[i].id === parseInt(starId)) {
            return stars[i];
          }
        }
        return null;
      }

    };
  })


  .factory('StarNews', function () {

    var starNews = [
      {
        id: 0,
        name: '朴海镇',
        date: '2016.5.21 14:20',
        text: '一开播就排到了第一...非常感谢各位中国粉丝~',
        photoNumber: 1,
        photos: [
          {
            picId: 0,
            pic: 'img/piao1.jpg'
          }]
      },
      {
        id: 1,
        name: 'RunningMan',
        date: '2016.3.8 11:05',
        text: '週末參加鐘國turbo演唱會時，來賓正好是宋鐘基與光洙',
        photoNumber: 9,
        photos: [
          {
            picId: 0,
            pic: 'img/running1.jpg'
          },
          {
            picId: 2,
            pic: 'img/running2.jpg'
          },
          {
            picId: 3,
            pic: 'img/running2.jpg'
          },
          {
            picId: 4,
            pic: 'img/running1.jpg'
          },
          {
            picId: 5,
            pic: 'img/running1.jpg'
          },
          {
            picId: 6,
            pic: 'img/running2.jpg'
          },
          {
            picId: 7,
            pic: 'img/running2.jpg'
          },
          {
            picId: 8,
            pic: 'img/running2.jpg'
          },
          {
            picId: 9,
            pic: 'img/running1.jpg'
          }]
      },
      {
        id: 2,
        name: '朴海镇',
        date: '2016.2.11 11:20',
        text: '迟来的问候！很感谢大家，送来的花都好好的摆放在家里了。 ',
        photoNumber: 0,
        photos: []
      }];

    return {
      all: function () {
        return starNews;
      },

      get: function (starNewsId) {
        for (var i = 0; i < starNews.length; i++) {
          if (starNews[i].id === parseInt(starNewsId)) {
            return starNews[i].photoNumber;
          }
        }
        return null;
      },

      getPhoto: function (starNewsId, photoId) {
        for (var i = 0; i < starNews.length; i++) {
          if (starNews[i].id === parseInt(starNewsId)) {
            for (var j = 0; j < starNews[i].photos.length; j++) {
              if (starNews[i].photos[j].picId === parseInt(photoId)) {
                return starNews[i].photos[j];
              }
            }
          }
        }
        return null;
      }

    };
  })
;
