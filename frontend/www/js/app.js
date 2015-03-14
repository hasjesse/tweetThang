// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'restangular',
  'starter.controllers',
  'starter.nameCtrl',
  'starter.roomCtrl',
  'starter.gameCtrl',
  'starter.services'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function(
    $stateProvider,
    $urlRouterProvider,
    RestangularProvider) {

  RestangularProvider.setBaseUrl('https://tweets-api.herokuapp.com/');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('name', {
      url: "/name",
      templateUrl: "modules/name/name.html",
      controller: "NameCtrl"
    })

    .state('rooms', {
      url: "/rooms",
      templateUrl: "modules/rooms/rooms.html",
      controller: "RoomCtrl"
    })

    .state('game', {
      url: "/game",
      templateUrl: "modules/game/game.html",
      controller: "GameCtrl"
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/name');

});