(function () {
  'use strict';
  
  angular.module('demo.service.tasks',[
    'ngResource'
  ])
    .factory('TasksService', TasksService);

  TasksService.$inject = ['$resource'];
  /**
   * 
   * @class TasksService
   * @constructor
   */
  function TasksService($resource){

    var ret = function (data) {
      return angular.fromJson(data);
    };
    
    return $resource('/api/tasks/:id', 
      /**
       default method
       {
        'get':    {method:'GET'},
        'save':   {method:'POST'},
        'query':  {method:'GET', isArray:true},
        'remove': {method:'DELETE'},
        'delete': {method:'DELETE'}
        };
        It describes only when these methods will be overridden.
        It can run without writing.
       */
      {
        'get': {
          transformResponse: ret
        },
        'query': {
          transformResponse: ret
        }
      },
      /**
       optional method
       */
      {
        'update': {
          method:'PUT'
        }
      }
    );
  }
})();


