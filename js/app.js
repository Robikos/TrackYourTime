$(function(){

  requirejs(['js/basic_task',
             'js/task',
             'js/tasks',
             'js/task_view',
             'js/sum_task_view',
             'js/main_view'],
             
    function(BasicTask, Task, Tasks, TaskView, SumTaskView) {
      var mainView = new MainView();

      window.tickFunction = function() {
        mainView.activeTask.tick();
        mainView.updateSumTask();
      }

    });
});
