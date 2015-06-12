// jshint devel:true
(function () {
  'use strict';

  angular
    .module('demo.app', [])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    { path: '/',          redirectTo: '/home' },
    { path: '/home',       component: 'home' },
    { path: '/about',      component: 'about' },
    { path: '/contact',    component: 'contact' },
    { path: '/todos',      component: 'todos' },
    { path: '/todo/:id',   component: 'todo' }
  ];

  AppController.$inject = ['DemoValue', 'TasksService', 'GruntfilesService', '$rootScope'];

  function AppController(DemoValue, TasksService, GruntfilesService, $rootScope) {
    console.log('AppController Constructor');

    var _self = this;

    $rootScope.$watch(function(){
      return DemoValue.tasks;
    }, function(value) {
      _self.todos = value;
    });

    $rootScope.$watch(function(){
      return DemoValue.about;
    }, function(value){
      _self.about = value;
    });

    var tasks = TasksService.query().$promise;
    var grunt = GruntfilesService.query().$promise;

    tasks.then (function(todos){
      DemoValue.tasks = todos.length;
    });

    grunt.then (function(about){
      DemoValue.about = about.length;
    });
  }

})();