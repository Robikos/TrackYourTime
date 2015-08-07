SumTaskView = Backbone.View.extend({
  tagName: "div",

  template: _.template($('#sum-task-template').html()),

  initialize: function() {
    this.listenTo(this.model, 'change', this.onChange);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  onChange: function() {
    this.render();
  }

});
