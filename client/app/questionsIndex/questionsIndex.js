'use strict';

angular.module('stackunderflowApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/questionsIndex/questionsIndex.html',
        controller: 'QuestionsIndexCtrl'
      });
  });
