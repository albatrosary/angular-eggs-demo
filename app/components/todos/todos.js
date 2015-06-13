/**
 * 
 *
 * @deprecated 
 * @module components/todos
 */
(function () {
  'use strict';

  angular
    .module('demo.todos', [])
    .controller('TodosController', TodosController);

  TodosController.$inject = ['TasksService', 'DemoValue'];

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function TodosController(TasksService, DemoValue) {
    this.TasksService = TasksService;
    this.DemoValue = DemoValue;
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
  TodosController.prototype.activate = function() {
    vm = this;
    var tasks = this.TasksService.query().$promise;
    tasks
      .then (display);
  };

  TodosController.prototype.remove = function() {
    var tasks = this.TasksService.remove().$promise;
    tasks.then (taskscount);
  };

  /**
   * Private Property
   */
   
   var vm;

  /**
   * Private Method
   */

  var display = function(todos) {
    vm.todos = todos;
    vm.DemoValue.tasks = todos.length;
  };

  var taskscount = function () {
    vm.todos = [];
    vm.DemoValue.tasks = 0;
  };
})();
