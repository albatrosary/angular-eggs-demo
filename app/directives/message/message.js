(function () {
  'use strict';

  angular
    .module('demo.directive.message', [])
    .directive('demoMessage', messageDirective);

  messageDirective.$inject = [];

  /**
   *
   * @class messageDirective
   * @constructor
   */
  function messageDirective() {

    return {
      restrict: 'AE',
      replace: false,
      templateUrl: 'directives/message/message.html',
      scope: {
        text: '='
      }
    };
  }
})();
