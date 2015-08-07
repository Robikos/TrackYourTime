BasicTask = Backbone.Model.extend({
  
  defaults: function() {
    return {
      title: null,
      time: 0,
      displayTime: this.decorateTime(0),
      working: false
    };
  },

  decorateTime: function(seconds) {
    return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
  }

});
