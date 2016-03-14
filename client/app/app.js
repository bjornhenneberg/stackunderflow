'use strict';

angular.module('stackunderflowApp', [
  'stackunderflowApp.auth',
  'stackunderflowApp.admin',
  'stackunderflowApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'ui.pagedown',
  'ngTagsInput',
  'ngMessages',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
