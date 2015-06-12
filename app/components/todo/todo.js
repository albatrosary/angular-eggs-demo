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
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  TodoController.prototype.activate = function() {
  	console.log('TodoController activate Method');

    if (!this.id) {
      return ;
    }

    var tasks = this.TasksService.get({id: this.id}).$promise;
    tasks
      .then(listing)
      .catch(messaging);

    listing.vm = this;
    messaging.vm = this;
  };

  TodoController.prototype.back = function() {
    console.log('back');

    redirect.vm = this;
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
    tasks.vm = this;
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
    redirect.vm = this;
  };

  /** private method */
  function listing(todo) {
    listing.vm.todo = todo;
  }
  
  function messaging(e) {
    messaging.vm.message = e.statusText;
  }

  function redirect() {
    redirect.vm.$location.path('/todos');
  }

  function tasks() {
    var query = tasks.vm.TasksService.query().$promise;
    query.then (taskscount);
    taskscount.vm = tasks.vm;
  }

  function taskscount(data) {
    taskscount.vm.todoscount.tasks = data.length;
  }
})();
