TaskView = Backbone.View.extend({
  tagName: "div",

  template: _.template($('#task-template').html()),

  events: {
    "click #toggle": "toggleTask",
    "click #delete": "deleteTask"
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.onChange);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  toggleTask: function() {
    this.model.toggle();
  },

  deleteTask: function() {
    this.model.delete();
    this.remove();
  },

  onChange: function() {
    this.render();
  }

});
