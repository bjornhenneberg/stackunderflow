'use strict';

angular.module('stackunderflowApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('questionsCreate', {
        url: '/questions/create',
        templateUrl: 'app/questionsCreate/questionsCreate.html',
        controller: 'QuestionsCreateCtrl'
      });
  });
