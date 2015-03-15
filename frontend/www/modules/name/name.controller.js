angular.module('starter.nameCtrl', [])

  .controller('NameCtrl', function($scope, Restangular, $timeout, $state, $resource, $http) {
    console.log('nameCtrl working');


    //var newUsersModel = $resource('http://24b04e2.ngrok.com/api/v1/users');

    //console.log(newUsersModel.get());


    //var usersModel = Restangular.allUrl('users', 'http://24b04e2.ngrok.com/api/v1/users');

    var usersModel = Restangular.all('users');

    $scope.user = {};

    $scope.submitName = function() {

      $http.post('http://24b04e2.ngrok.com/api/v1/users', $scope.user).
        success(function(data, status, headers, config) {
          console.log('fuckyou');
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });


      console.log($scope.user);

      //usersModel.getList().then(function(users) {
      //  console.log(users);
      //});
      //
      //usersModel.post($scope.user).then(function(user) {
      //  console.log('wat', user);
      //});

      //$timeout(function() {
      //  $state.go('rooms');
      //}, 1000);
    };
  });
