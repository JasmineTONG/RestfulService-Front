// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:
      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('tab.photo', {
        url: '/photo',
        views: {
          'tab-photo': {
            templateUrl: 'templates/tab-photo.html',
            controller: 'PhotoCtrl'
          }
        }
      })
      .state('tab.starAlbum', {
        url: '/photo/:starId',
        views: {
          'tab-photo': {
            templateUrl: 'templates/tab-starAlbum.html',
            controller: 'StarAlbumCtrl'
          }
        }
      })

      .state('tab.albumPic', {
        url: '/photo/:picUrl/:picDetail',
        views: {
          'tab-photo': {
            templateUrl: 'templates/tab-starAlbum-pic.tpl.html',
            controller: 'StarAlbumPicCtrl'
          }
        }
      })

      .state('tab.news', {
        url: '/news',
        views: {
          'tab-news': {
            templateUrl: 'templates/tab-news.html',
            controller: 'StarNewsCtrl'
          }
        }
      })

      .state('tab.newsPic', {
        url: '/news/:picUrl',
        views: {
          'tab-news': {
            templateUrl: 'templates/tab-news-pic.tpl.html',
            controller: 'StarNewsPicCtrl'
          }
        }
      })

      .state('tab.starShops', {
        url: '/starShops',
        views: {
          'tab-starShops': {
            templateUrl: 'templates/tab-starShops.html',
            controller: 'StarShopsCtrl'
          }
        }
      })
      .state('tab.starItems', {
        url: '/starShops/:starShopId',
        views: {
          'tab-starShops': {
            templateUrl: 'templates/star-items.html',
            controller: 'StarItemsCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })

      .state('register', {
        url: '/register',
        templateUrl: 'templates/register.tpl.html',
        controller: 'RegisterCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.tpl.html',
        controller: 'LoginCtrl'
      })

      .state('tab.following', {
        url: '/following',
        views: {
          'tab-account': {
            templateUrl: 'templates/following.tpl.html',
            controller: 'FollowingCtrl'
          }
        }
      })

      .state('tab.star_detail', {
        url: '/account/star_detail/:starId',
        views: {
          'tab-account': {
            templateUrl: 'templates/star_detail.tpl.html',
            controller: 'StarDetailCtrl'
          }
        }
      })


      .state('tab.changeAvatar', {
        url: '/account/change-avatar',
        views: {
          'tab-account': {
            templateUrl: 'templates/change_avatar.tpl.html',
            controller: 'ChangeAvatarCtrl'
          }
        }
      })

      .state('tab.changePassword', {
        url: '/account/change-password',
        views: {
          'tab-account': {
            templateUrl: 'templates/change_password.tpl.html',
            controller: 'ChangePasswordCtrl'
          }
        }
      })
      .state('tab.about', {
        url: '/account/about',
        views: {
          'tab-account': {
            templateUrl: 'templates/about.tpl.html',
            controller: 'AboutCtrl'
          }
        }
      })
    ;


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('login');

  });
