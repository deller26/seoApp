/**
* @name tasksController
* @description create task, read task, update task, delete task
* @param task object, id, name, task
*/
danApp.controller('tasksController', ['$scope', '$http', 'taskService', function tasksController($scope, $http, taskService) {

  $scope.tasks;

  $scope.getAllTasks = function() {
    taskService.readTasks()
      .then(function(tasks) {
         $scope.applyAllTasks(tasks);
      }, function(error) {
        alert('Read failed due to:' + error);
      });
  }

  $scope.applyAllTasks = function(tasks) {
    $scope.tasks = tasks;
  }

  $scope.getAllTasks();

  $scope.createTask = function(name, task) {
    $scope.tasks.push({
      name: name,
      task: task
    });
    taskService.createTask(name, task);
  }

  $scope.patchTask = function(id, name, task) {
    taskService.updateTask(id, name, task);
  }

  $scope.destroyTask = function(id) {
    taskService.deleteTask(id);
  }

}]);



