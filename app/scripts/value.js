(function () {
  'use strict';

  angular
    .module('demo.value', [])
    .value('DemoValue', {
      tasks: 0,
      about: 0
    });
})();
