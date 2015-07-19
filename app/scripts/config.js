// jshint devel:true
(function () {
  'use strict';

  angular
    .module('demo.config', [])
    .config(AppConfig);

  AppConfig.$inject = ['$locationProvider'];

  function AppConfig($locationProvider) {
    /*
      # Hashbang Mode
      http://www.example.com/#/aaa/
      # HTML5 Mode
      http://www.example.com/aaa/
    */
    $locationProvider.html5Mode(true);
  }
})();
