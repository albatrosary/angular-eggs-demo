/**
 * 
 *
 * @deprecated 
 * @module components/todos
 */
(function () {
  'use strict';

  angular.module('demo.todos', [])
    .controller('TodosController', TodosController);

  TodosController.$inject = ['TasksService', 'todoscount'];
  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function TodosController(TasksService, todoscount) {
  	var vm = this;

    vm.TasksService = TasksService;
    vm.todoscount = todoscount;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  TodosController.prototype.activate = function() {
    var tasks = this.TasksService.query().$promise;
    tasks.then (display);
    display.vm = this;
  };

  TodosController.prototype.remove = function() {
    var tasks = this.TasksService.remove().$promise;
    tasks.then (taskscount);
    taskscount.vm = this;
  };

  function display(todos) {
    display.vm.todos = todos;
    display.vm.todoscount.tasks = todos.length;
  }

  function taskscount(){
    taskscount.vm.todoscount.tasks = 0;
  }
})();
