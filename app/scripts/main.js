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

  angular.module('demo', [
    'ngNewRouter',
    'demo.home',
    'demo.about',
    'demo.contact',
    'demo.todos',
    'demo.todo',
    'demo.directive.message',
    'demo.service.todoscount',
    'demo.service.tasks',
    'demo.service.gruntfiles'
    ])
    .config(AppConfig)
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    { path: '/',          redirectTo: '/home' },
    { path: '/home',       component: 'home' },
    { path: '/about',      component: 'about' },
    { path: '/contact',    component: 'contact' },
    { path: '/todos',      component: 'todos' },
    { path: '/todo/:id',   component: 'todo' }
  ];

  AppController.$inject = ['TodoscountService', 'TasksService', 'GruntfilesService', '$rootScope', '$q'];

  function AppController(TodoscountService, TasksService, GruntfilesService, $rootScope, $q) {
    console.log('AppController Constructor');

    var _self = this;

    $rootScope.$watch(function(){
      return TodoscountService.tasks;
    }, function(value) {
      _self.todos = value;
    });

    $rootScope.$watch(function(){
      return TodoscountService.about;
    }, function(value){
      _self.about = value;
    });

    var tasks = TasksService.query().$promise;
    var grunt = GruntfilesService.query().$promise;

    tasks.then (function(todos){
      TodoscountService.tasks = todos.length;
    });

    grunt.then (function(about){
      TodoscountService.about = about.length;
    });
  }

})();