/**
 * This is SampleApp module.
 *
 * @module SampleApp
 */
 module config {
   'use strict';

  export class AppConfig {
    constructor ($locationProvider) {
      $locationProvider.html5Mode(true);
    }

    static $inject = ['$locationProvider'];
  }

  angular
    .module('SampleApp.config', [])
    .config(AppConfig);
}
