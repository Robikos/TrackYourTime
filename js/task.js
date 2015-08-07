Task = BasicTask.extend({
  
  toggle: function(){
    var state = this.get("working");
    this.trigger('reset');
    if (!state){
      this.set({working: !state});
      this.start();
    }
  },

  start: function(){
    this.trigger('start', this);
  },

  stop: function(){
    var working = this.get("working");
    if (working) {
      this.set({working: false});
      this.trigger('stop');
    }
  },

  tick: function() {
    this.set({
      time: this.get("time")+1,
      displayTime: this.decorateTime(this.get("time")+1)
    });
  },

  delete: function() {
    this.stop();
    this.destroy();
  }

});
