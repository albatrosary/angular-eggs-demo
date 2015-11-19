/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../service/gruntfiles/gruntfiles.d.ts" />

/**
 * About Components module.
 *
 * @module SampleApp.components.about
 */
module about {
  'use strict';

  export class AboutController {

    private GruntfilesService: IGruntfilesService;
    private list;
    private error;

    constructor (GruntfilesService) {
      console.log('AboutController Constructor');
      this.GruntfilesService = GruntfilesService;
    };

    public static $inject = ['GruntfilesService'];

    public canActivate(): boolean {
      console.log('AboutController canActivate Method');
      return true;
    };

    public activate(): void {
      console.log('AboutController activate Method');
      var grunt = this.GruntfilesService.query().$promise;
      grunt
        .then((list): void => {this.list = list})
        .catch((e): void => {this.error = e});
    };

    public canDeactivate(): boolean {
      console.log('AboutController canDeactivate Method');
      return true;
    };

    public deactivate(): void {
      console.log('AboutController deactivate Method');
    };

  };

  angular
    .module('SampleApp.components.about', [
      'SampleApp.service.gruntfiles'
    ])
    .controller('AboutController', AboutController);
}
