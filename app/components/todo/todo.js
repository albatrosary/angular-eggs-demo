/**
 * 
 *
 * @deprecated 
 * @module components/todo
 */
(function () {
  'use strict';

  angular.module('demo.todo', [])
    .controller('TodoController', TodoController);

  TodoController.$inject = ['$routeParams', '$location', 'TasksService', 'todoscount'];

  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function TodoController($routeParams, $location, TasksService, todoscount) {
  	console.log('TodoController Constructor');
    this.TasksService = TasksService;
    this.todoscount = todoscount;
    this.id = $routeParams.id;
    this.$location = $location;
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
  TodoController.prototype.activate = function() {
  	console.log('TodoController activate Method');

    vm = this;

    if (!this.id) {
      return ;
    }

    var tasks = this.TasksService.get({id: this.id}).$promise;
    tasks
      .then(listing)
      .catch(messaging);

  };

  TodoController.prototype.back = function() {
    console.log('back');
    redirect();
  }; 

  TodoController.prototype.add = function() {
    console.log('add');

    var data = angular.fromJson({
      'title': this.todo.title,
      'desc':  this.todo.desc
    });

    var save = this.TasksService.save(data).$promise;
    save.then(tasks);
  }; 

  TodoController.prototype.update = function () {
    console.log('update');

    var data = angular.fromJson({
      'id':    this.id,
      'title': this.todo.title,
      'desc':  this.todo.desc
    });
    
    var update = this.TasksService.update(data).$promise;
    update.then();
  }; 

  TodoController.prototype.delete = function() {
    console.log('delete');

    var tasks = this.TasksService.delete({id: this.id}).$promise;
    tasks.then(redirect);
  };


  /**
   * Private property
   */
  var vm; 

  /**
   * Private function
   */

  var listing = function(todo) {
    vm.todo = todo;
  };
  
  var messaging = function(e) {
    vm.message = e.statusText;
  };

  var redirect = function () {
    vm.$location.path('/todos');
  };

  var tasks = function () {
    var query = tasks.vm.TasksService.query().$promise;
    query.then (taskscount);
  };

  var taskscount = function (data) {
    vm.todoscount.tasks = data.length;
  };
})();
