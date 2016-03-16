'use strict';

angular.module('stackunderflowApp')
.controller('QuestionsCreateCtrl', function ($scope, $http, $location, Auth, $state) {
    if(! Auth.isLoggedIn()){
      $location.path('/login');
      $location.replace();
      return;
    }
  $scope.submit = function() {
    $http.post('/api/questions', $scope.question).success(function(){
      $state.go('main');
    });
  };
});
