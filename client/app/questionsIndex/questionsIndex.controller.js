'use strict';

angular.module('stackunderflowApp')
  .controller('QuestionsIndexCtrl', function($scope, $http, socket) {

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('question');
    });

    $http.get('/api/questions').success(function(questions) {
      $scope.questions = questions;
      socket.syncUpdates('question', $scope.questions, function(type){console.log(type);});
    });

    $scope.findQuestionWithTag = function() {
      console.log($scope.searchText);
      $http.get('/api/questions/').success(function(questions) {
        $scope.questions = questions;
      });
    };

  });
