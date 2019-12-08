AFRAME.registerComponent('spawner-enemy', { 
  schema: {
    on: {
      default: 'click'
    },
    mixin: {
      default: ''
    }
  },
  update: function() {
      var el = this.el;
      var spawn = this.spawn.bind(this);
      if (this.on === this.data.on) {
        return
      }
      el.removeEventListener(this.on, spawn);
      el.addEventListener(this.data.on, spawn);
      this.on = this.data.on
  },
  spawn: function() {
    if(Math.trunc(Math.random()*10)==6){
    var el = this.el;
    var matrixWorld = el.object3D.matrixWorld;
    var position = new THREE.Vector3();
    position.setFromMatrixPosition(matrixWorld);
    position.setComponent(1,position.getComponent(1)-3);
    var entity = document.createElement('a-entity');
    entity.setAttribute('position', position);
    entity.setAttribute('mixin', this.data.mixin);
    el.sceneEl.appendChild(entity)
  }
  },
});
