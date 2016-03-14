'use strict';

angular.module('stackunderflowApp.auth', [
  'stackunderflowApp.constants',
  'stackunderflowApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
