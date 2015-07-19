(function () {
  'use strict';

  angular
    .module('demo', [
      'ngNewRouter',
      'demo.app',
      'demo.config',
      'demo.value',
      'demo.home',
      'demo.about',
      'demo.contact',
      'demo.todos',
      'demo.todo',
      'demo.directive.message',
      'demo.service.tasks',
      'demo.service.gruntfiles'
    ]);
})();
