(function () {
  'use strict';

  angular
    .module('demo.app', [])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',          redirectTo: '/home'},
    {path: '/home',       component: 'home'},
    {path: '/about',      component: 'about'},
    {path: '/contact',    component: 'contact'},
    {path: '/todos',      component: 'todos'},
    {path: '/todo/:id',   component: 'todo'}
  ];

  AppController.$inject = ['DemoValue', 'TasksService', 'GruntfilesService', '$rootScope'];

  function AppController(DemoValue, TasksService, GruntfilesService, $rootScope) {
    console.log('AppController Constructor');
    vm = this;
    vm.DemoValue = DemoValue;
    vm.TasksService = TasksService;
    vm.GruntfilesService = GruntfilesService;
    vm.$rootScope = $rootScope;

    $rootScope.$watch(tasksValue, tasksSet);

    $rootScope.$watch(aboutValue, aboutSet);

    var tasks = vm.TasksService.query().$promise;
    var grunt = vm.GruntfilesService.query().$promise;

    tasks
      .then(todosCount);
    grunt
      .then(aboutCount);
  }

  var vm;

  var tasksSet = function(value) {
    vm.todos = value;
  };

  var aboutSet = function(value) {
    vm.about = value;
  };

  var tasksValue = function() {
    return vm.DemoValue.tasks;
  };

  var aboutValue = function() {
    return vm.DemoValue.about;
  };

  var todosCount = function(todos) {
    vm.DemoValue.tasks = todos.length;
  };

  var aboutCount = function(about) {
    vm.DemoValue.about = about.length;
  };

})();
