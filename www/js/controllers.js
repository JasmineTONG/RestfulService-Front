var server = window.localStorage ? localStorage.getItem("serverAddress") : Cookie.read("serverAddress");
angular.module('starter.controllers', ['ionic'])

  .controller('DashCtrl', function ($scope, $http) {
    //Get stars from server
    var userId = window.localStorage ? localStorage.getItem("userId") : Cookie.read("userId");

    $http({
      method: 'GET',
      url: "http://localhost:8080/OppaServer/services/star/listAllStars",
      params: {userId: userId},
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
      }
    })
      .success(function (response) {
        console.log(response);
        $scope.stars = [];
        for (var i = 0; i < response.length; i++) {
          var star = response[i];
          $scope.stars.push(star);
        }
      })
      .error(function (error) {
        console.log(error);
      });

    $scope.toggleFollowing = function (index, starId) {
      //cancel following
      if ($scope.stars[index].followed) {
        $http({
          method: 'GET',
          url: "http://localhost:8080/OppaServer/services/follow/cancelFollowStar",
          params: {userId: userId, starId: starId},
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
          }
        })
          .success(function (response) {
            if (response.flag == 0) {
              $scope.stars[index].followed = false;
            } else {
              var pop = $ionicPopup.alert({
                title: '枣糕!',
                template: '好像哪里出了点问题...'
              });
            }
          })
          .error(function (error) {
            console.log(error);
          });
      } else {  //follow
        $http({
          method: 'GET',
          url: "http://localhost:8080/OppaServer/services/follow/followStar",
          params: {userId: userId, starId: starId},
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
          }
        })
          .success(function (response) {
            if (response.flag == 0) {
              $scope.stars[index].followed = true;
            } else {
              var pop = $ionicPopup.alert({
                title: '枣糕!',
                template: '好像哪里出了点问题...'
              });
            }
          })
          .error(function (error) {
            console.log(error);
          });
      }
    }
  })

  .controller('StarNewsCtrl', function ($scope, $http) {
    //Get news of stars that the user is following
    var userId = window.localStorage ? localStorage.getItem("userId") : Cookie.read("userId");


    $http({
      method: 'GET',
      url: "http://localhost:8080/OppaServer/services/news/listNewsByUserId",
      params: {userId: userId},
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
      }
    })
      .success(function (response) {
        console.log("listNewsByUserId");
        $scope.starNews = [];
        for (var i = 0; i < response.length; i++) {
          var news = response[i];
          $scope.starNews.push(news);
        }
      })
      .error(function (error) {
        console.log(error);
      });
  })


  .controller('StarNewsPicCtrl', function ($scope, $http, $stateParams, StarNews) {
    //just for test
    $scope.newsImg = $stateParams.picUrl;
  })

  .controller('PhotoCtrl', function ($scope, $http) {
    //Get albums of stars that the user is following
    var userId = window.localStorage ? localStorage.getItem("userId") : Cookie.read("userId");
    $http({
      method: 'GET',
      url: "http://localhost:8080/OppaServer/services/album/listAlbumsByUserId",
      params: {userId: userId},
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
      }
    })
      .success(function (response) {
        console.log("listAlbumsByUserId");
        $scope.albumStore = [];
        for (var i = 0; i < response.length; i++) {
          var starAlbum = response[i];
          $scope.albumStore.push(starAlbum);
        }
      })
      .error(function (error) {
        console.log(error);
      });
  })

  .controller('StarAlbumCtrl', function ($scope, $http, $stateParams) {
    var starId = $stateParams.starId;
    $http({
      method: 'GET',
      url: "http://localhost:8080/OppaServer/services/photo/listPhotosByStarId",
      params: {starId: starId},
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
      }
    })
      .success(function (response) {
        console.log("listAlbumsByStarId");
        $scope.album = [];
        for (var i = 0; i < response.length; i++) {
          var starAlbum = response[i];
          $scope.album.push(starAlbum);
        }
      })
      .error(function (error) {
        console.log(error);
      });

  })

  .controller('StarAlbumPicCtrl', function ($scope, $stateParams) {
    $scope.pic = $stateParams.picUrl;
    $scope.picDetail = $stateParams.picDetail;
    console.log($scope.pic);
  })


  .controller('StarShopsCtrl', function ($scope, $http) {
    //Get shops of stars that the user is following
    var userId = window.localStorage ? localStorage.getItem("userId") : Cookie.read("userId");
    $http({
      method: 'GET',
      url: "http://localhost:8080/OppaServer/services/shop/listShopsByUserId",
      params: {userId: userId},
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
      }
    })
      .success(function (response) {
        console.log("listShopsByStarId");
        $scope.starShops = [];
        for (var i = 0; i < response.length; i++) {
          var starShop = response[i];
          $scope.starShops.push(starShop);
        }
        console.log($scope.starShops);
      })
      .error(function (error) {
        console.log(error);
      });
  })

  .controller('StarItemsCtrl', function ($scope, $stateParams, $http) {
    var starId = $stateParams.starShopId;
    $http({
      method: 'GET',
      url: "http://localhost:8080/OppaServer/services/item/listItemsByStarId",
      params: {starId: starId},
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
      }
    })
      .success(function (response) {
        console.log("listAlbumsByStarId");
        $scope.items = [];
        for (var i = 0; i < response.length; i++) {
          $scope.items.push(response[i]);
        }
        console.log($scope.items);
      })
      .error(function (error) {
        console.log(error);
      });
  })

  .controller('AccountCtrl', function ($scope, $state) {
    $scope.user = {};

    $scope.user.nickname = window.localStorage ? localStorage.getItem("nickname") : Cookie.read("nickname");
    $scope.user.profileImg = window.localStorage ? localStorage.getItem("profileImg") : Cookie.read("profileImg");
  })


  .controller('RegisterCtrl', function ($scope, $rootScope, $state, $http, $ionicPopup) {
    $scope.register = {};
    $scope.signUp = function (registerForm) {
      console.log(registerForm.registerUsername.$invalid);
      if (registerForm.registerUsername.$invalid) {
        var pop = $ionicPopup.alert({
          title: '枣糕！',
          template: '用户名格式不正确！'
        });
      } else if (registerForm.registerNickname.$invalid) {
        pop = $ionicPopup.alert({
          title: '枣糕！',
          template: '昵称格式不正确！'
        });
      } else if (registerForm.registerPassword.$invalid) {
        pop = $ionicPopup.alert({
          title: '枣糕！',
          template: '密码格式不正确！'
        });
      } else if ($scope.register.confirmPassword != $scope.register.password) {
        pop = $ionicPopup.alert({
          title: '枣糕！',
          template: '两次密码输入不一致！'
        });
      }

      if (registerForm.$valid && (($scope.register.confirmPassword == $scope.register.password))) {
        var username = $scope.register.username;
        var nickname = $scope.register.nickname;
        var password = $scope.register.password;
        var confirmPassword = $scope.register.confirmPassword;

        $http({
          method: 'POST',
          url: "http://localhost:8080/OppaServer/services/user/userRegister",
          params: {username: username, password: password, nickname: nickname},
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
          }
        }).success(function (response) {
          console.log("userRegister..log..log.. register successfully");
          console.log("userLogin..log..usernamee: " + response.user.username);

          if (response.flag == 0) {
            pop = $ionicPopup.alert({
              title: '注册成功',
              template: '开启Soul Oppa之旅'
            });
            $state.go("tab.account");
            sessionStorage.setItem('user', JSON.stringify(response.user));
            $rootScope.isLogin = true;
            if (window.localStorage) {
              localStorage.setItem("isLogin", "login");
              localStorage.setItem("userId", response.user.userId);
              localStorage.setItem("username", response.user.username);
              localStorage.setItem("nickname", response.user.nickname);
              localStorage.setItem("profileImg", response.user.profileImg);
            } else {
              console.log("cookie");
              Cookie.write("isLogin", "login");
              Cookie.write("userId", response.user.userId);
              Cookie.write("username", response.user.username);
              Cookie.write("nickname", response.user.nickname);
              Cookie.write("profileImg", response.user.profileImg);

            }
            //document.getElementById('login-loginButton').setAttribute('ui-sref','tab.account');
            //document.getElementById('personal-avatar-name').innerHTML = response.user.username;
            $state.go('tab.account');
          } else {
            pop = $ionicPopup.alert({
              title: '枣糕!',
              template: '用户名已存在!'
            });
          }
        });
      }
    }
  })

  .controller('LoginCtrl', function ($scope, $rootScope, $state, $ionicPopup, $http) {
    $scope.login = {};

    $scope.signIn = function (loginForm) {

      var username = $scope.login.username;
      var password = $scope.login.password;

      if (loginForm.$valid) {
        $http({
          method: 'POST',
          url: "http://localhost:8080/OppaServer/services/user/userLogin",
          params: {username: username, password: password},
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
          }
        }).success(function (response) {
            console.log("userLogin..log..user: " + response.user);
          console.log("userLogin..log..username: " + response.user.username);

            if (response.flag == 0) {
              sessionStorage.setItem('user', JSON.stringify(response.user));
              $rootScope.isLogin = true;
              if (window.localStorage) {
                console.log("localStorage ", "login");
                localStorage.setItem("isLogin", "login");
                localStorage.setItem("userId", response.user.userId);
                localStorage.setItem("username", response.user.username);
                localStorage.setItem("nickname", response.user.nickname);
                localStorage.setItem("profileImg", response.user.profileImg);
              } else {
                console.log("cookie");
                Cookie.write("isLogin", "login");
                Cookie.write("userId", response.user.userId);
                Cookie.write("username", response.user.username);
                Cookie.write("nickname", response.user.nickname);
                Cookie.write("profileImg", response.user.profileImg);
              }
              //document.getElementById('personal-avatar-name').innerHTML = response.user.username;
              $state.go('tab.account');
          }
            else {
              pop = $ionicPopup.alert({
                title: '用户名密码不匹配',
                template: '请输入正确的用户名及密码'
              });
            }
        })
          .error(function (error) {
            console.log(error);
            $state.reload('login');
          })
      } else {
        pop = $ionicPopup.alert({
          title: '输入不合法',
          template: '请输入正确的用户名及密码'
        });
      }

    };


    $scope.weiboLogin = function () {
      // $location.path("https://api.weibo.com/oauth2/authorize?client_id=2355410033&redirect_uri=http://127.0.0.1:63342/myApp/www/index.html&response_type=code");
      // window.location.href = "https://api.weibo.com/oauth2/authorize";

      // WB2.login(function(o) {
      //   //callback function
      //   alert("login: " + o.screen_name);
      // });

      // WB.connect.login(function() {
      //   //callBack function
      // });

    };

    // WB2.anyWhere(function (W) {
    //   W.widget.connectButton({
    //     id: "wb_connect_btn",
    //     type: '3,2',
    //     callback: {
    //       login: function (o) { //登录后的回调函数
    //         alert("login: " + o.screen_name);
    //       },
    //       logout: function () { //退出后的回调函数
    //         alert('logout');
    //       }
    //     }
    //   });
    // });

    // WB2.login(function(o) {
    //   //callback function
    //   alert("login: " + o.screen_name);
    // });


  })
  .controller('ChangePasswordCtrl', function ($scope, $rootScope, $state, $http, $ionicPopup) {
    $scope.changePassword = {};

    $scope.updatePassword = function (changePasswordForm) {
      if (changePasswordForm.oldPassword.$invalid) {
        var pop = $ionicPopup.alert({
          title: '枣糕！',
          template: '原密码格式不正确！'
        });
      } else if (changePasswordForm.newPassword.$invalid) {
        pop = $ionicPopup.alert({
          title: '枣糕！',
          template: '新密码格式不正确！'
        });
      } else if ($scope.changePassword.newPassword != $scope.changePassword.confirmPassword) {
        pop = $ionicPopup.alert({
          title: '枣糕！',
          template: '确认密码与新密码不一致！'
        });
      }

      if (changePasswordForm.$valid && (($scope.changePassword.newPassword == $scope.changePassword.confirmPassword))) {
        var oldPassword = $scope.changePassword.oldPassword;
        var newPassword = $scope.changePassword.newPassword;
        var userId = window.localStorage ? localStorage.getItem("userId") : Cookie.read("userId");

        $http({
          method: 'POST',
          url: "http://localhost:8080/OppaServer/services/user/userUpdatePassword",
          params: {userId: userId, oldPassword: oldPassword, newPassword: newPassword},
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
          }
        }).success(function (response) {
          if (response.flag == 0) {
            pop = $ionicPopup.alert({
              title: '修改密码成功',
              template: '密码已更新!'
            });

            $state.go('tab.account');
          } else {
            pop = $ionicPopup.alert({
              title: '枣糕!',
              template: '原密码不正确!'
            });
          }
        });
      }

    }
  })

  .controller('FollowingCtrl', function ($scope, $http) {
    //Get stars that the user follows
    var userId = window.localStorage ? localStorage.getItem("userId") : Cookie.read("userId");
    console.log("userId= " + userId);
    $http({
      method: 'GET',
      url: "http://localhost:8080/OppaServer/services/star/listStarsByUserId",
      params: {userId: userId},
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
      }
    })
      .success(function (response) {
        console.log(response);
        $scope.stars = [];
        for (var i = 0; i < response.length; i++) {
          var star = response[i];
          console.log(star);
          $scope.stars.push(star);
        }

      })
      .error(function (error) {
        console.log(error);
      });


    $scope.cancelFollowing = function (index, starId) {
      $http({
        method: 'GET',
        url: "http://localhost:8080/OppaServer/services/follow/cancelFollowStar",
        params: {userId: userId, starId: starId},
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
        }
      })
        .success(function (response) {
          if (response.flag == 0) {
            $scope.stars.splice(index, 1);
          } else {
            var pop = $ionicPopup.alert({
              title: '枣糕!',
              template: '好像哪里出了点问题...'
            });
          }
        })
        .error(function (error) {
          console.log(error);
        });
    }
  })

  .controller('StarDetailCtrl', function ($scope, $state, $stateParams, $http) {
    var starId = $stateParams.starId;

    $http({
      method: 'GET',
      url: "http://localhost:8080/OppaServer/services/star/getStarById",
      params: {starId: starId},
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
      }
    })
      .success(function (response) {
        console.log(response);
        $scope.star = response;
      })
      .error(function (error) {
        console.log(error);
      });

    var userId = window.localStorage ? localStorage.getItem("userId") : Cookie.read("userId");

    $scope.toggleFollowing = function () {
      //cancel following
      if ($scope.star.followed) {
        $http({
          method: 'GET',
          url: "http://localhost:8080/OppaServer/services/follow/cancelFollowStar",
          params: {userId: userId, starId: starId},
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
          }
        })
          .success(function (response) {
            if (response.flag == 0) {
              $scope.star.followed = false;
              $state.reload('tab.following');
            } else {
              var pop = $ionicPopup.alert({
                title: '枣糕!',
                template: '好像哪里出了点问题...'
              });
            }
          })
          .error(function (error) {
            console.log(error);
          });
      } else {  //follow
        $http({
          method: 'GET',
          url: "http://localhost:8080/OppaServer/services/follow/followStar",
          params: {userId: userId, starId: starId},
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
          }
        })
          .success(function (response) {
            if (response.flag == 0) {
              $scope.star.followed = true;
            } else {
              var pop = $ionicPopup.alert({
                title: '枣糕!',
                template: '好像哪里出了点问题...'
              });
            }
          })
          .error(function (error) {
            console.log(error);
          });
      }
    }

  })

  .controller('ChangeAvatarCtrl', function ($scope, $state, $http, $ionicPopup) {
    $scope.profileImg = window.localStorage ? localStorage.getItem("profileImg") : Cookie.read("profileImg");

    $scope.changeAvatar = function () {
      document.getElementById('change-avatar-file').click();
    };

    var head_changed_flag = false;
    $scope.previewAvatar = function ($http) {
      var file = document.getElementById("change-avatar-file").files[0];
      if (file) {
        if (file.type.substring(0, 5) == "image") {
          head_changed_flag = true;
          image_file = file;
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function (e) {
            var urlData = this.result;
            console.log(urlData);
            document.getElementById("change-avatar-img").setAttribute("src", urlData);
          }
        }
        else {
          var pop = $ionicPopup.alert({
            title: '不要调皮！',
            template: '头像只能是图片！'
          });
        }
      }
    };


    $scope.updateAvatar = function () {
      var avatarFile = file;
      if (avatarFile == undefined) {
        var pop = $ionicPopup.alert({
          title: '不要调皮！',
          template: '请先上传图片！'
        });
      } else if (!(avatarFile.type.substring(0, 5) == "image")) {
        pop = $ionicPopup.alert({
          title: '不要调皮！',
          template: '头像只能是图片！'
        });
      }

      if (head_changed_flag) {
        var formData = new FormData();
        formData.append("profileImg", avatarFile);
        console.log(formData);

        var xmlhttp = null;
        if (window.XMLHttpRequest) {// code for all new browsers
          xmlhttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) {// code for IE5 and IE6
          xmlhttp = new ActiveXObject(
            "Microsoft.XMLHTTP");
        }
        if (xmlhttp != null) {
          xmlhttp.open("POST", "http://localhost:8080/OppaServer/services/user/updateProfileImage",
            true);
          // xmlhttp.onreadystatechange = state_Change;
          xmlhttp.send(formData);
        } else {
          alert("Your browser does not support XMLHTTP.");
        }
      }

    }


  })


  .controller('AboutCtrl', function () {

  });

