window.MainView = Backbone.View.extend({
  el: $(".content"),
  events: {
    "click #add-time-button": "addNew"
  },

  initialize: function() {
    this.tasks = new Tasks();
    this.timeoutHandler = null;
    this.activeTask = null;
    this.sumTask = new BasicTask({title: "Razem:"});
    this.displaySumTask(this.sumTask);
    this.listenTo(this.tasks, 'add', this.displayNew);
    this.listenTo(this.tasks, 'reset', this.resetAll);
    this.listenTo(this.tasks, 'start', this.onStart);
    this.listenTo(this.tasks, 'stop', this.onStop);
    this.listenTo(this.tasks, 'remove', this.updateSumTask);
  },

  addNew: function() {
    this.resetAll();
    var title = prompt("Put your current job title");
    var model = new Task({title: title, working: false});
    this.tasks.add(model);
  },

  displayNew: function(model) {
    var view = new TaskView({model: model});
    this.$(".entries").append(view.render().el);
  },

  displaySumTask: function(model) {
    var view = new SumTaskView({model: model});
    this.$(".sum-entry").append(view.render().el);
  },

  resetTask: function(model) {
    model.stop();
  },

  resetAll: function() {
    this.tasks.each(this.resetTask, this);
  },

  onStart: function(model) {
    this.activeTask = model;
    this.timeoutHandler = setInterval(window.tickFunction, 1000);
  },

  onStop: function() {
    clearInterval(this.timeoutHandler);
    this.activeTask = null;
  },

  updateSumTask: function() {
    console.log("UPDATED");
    var time_array = this.tasks.pluck("time");
    var sum_time = _.reduce(time_array, function(sum, el) {
      return sum + el
    }, 0);

    this.sumTask.set({
      time: sum_time,
      displayTime: this.sumTask.decorateTime(sum_time)
    });
  }

});
