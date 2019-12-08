AFRAME.registerComponent('laser-behavior-enemy', {
  schema: {
    speed: {
      default: -0.25
    }
  },
  init: function() {
    this.el.sceneEl.addBehavior(this)
  },
  tick: function() {
    var object3D = this.el.object3D;
    object3D.translateY(this.data.speed);
  }
});
