/**
 * 
 *
 * @deprecated 
 * @module components/about
 */
(function () {
  'use strict';

  angular.module('demo.about', [])
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
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  * @param {String} foo Argument 1
  * @param {Object} config A config object
  * @param {String} config.name The name on the config object
  * @param {Function} config.callback A callback function on the config object
  * @param {Boolean} [extra=false] Do extra, optional work
  * @return {Boolean} Returns true on success
  */
  AboutController.prototype.activate = function() {
    //var vm = this;
    var grunt = this.GruntfilesService.query().$promise;
    grunt.then(getlist);
    getlist.vm = this;
  };

  function getlist(list) {
    getlist.vm.list = list;
  }
})();
