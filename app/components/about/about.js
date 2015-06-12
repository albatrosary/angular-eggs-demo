/**
 * 
 *
 * @deprecated 
 * @module components/about
 */
(function () {
  'use strict';

  angular
    .module('demo.about', [])
    .controller('AboutController', AboutController);

  AboutController.$inject = ['GruntfilesService'];

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function AboutController(GruntfilesService) {
    this.GruntfilesService = GruntfilesService;
  }

  /**
   * Public method, assigned to prototype
   */

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  AboutController.prototype.activate = function() {
    //var vm = this;
    var grunt = this.GruntfilesService.query().$promise;
    grunt.then(getlist);
    vm = this;
  };

  /**
   * Private property
   */
  var vm;

  /**
   * Private function
   */
  var getlist = function (list) {
    vm.list = list;
  };
})();
