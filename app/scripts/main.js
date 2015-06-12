// jshint devel:true
(function () {
  'use strict';

  function AppConfig($locationProvider){
    /*
      # Hashbang Mode
      http://www.example.com/#/aaa/
      # HTML5 Mode
      http://www.example.com/aaa/
    */
    $locationProvider.html5Mode(true);
  }

  AppConfig.$inject = ['$locationProvider'];

  angular
    .module('demo', [
      'ngNewRouter',
      'demo.home',
      'demo.about',
      'demo.contact',
      'demo.todos',
      'demo.todo',
      'demo.directive.message',
      'demo.service.tasks',
      'demo.service.gruntfiles'
    ])
    .config(AppConfig)
    .value('DemoValue', {
      tasks: 0,
      about: 0
    })
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