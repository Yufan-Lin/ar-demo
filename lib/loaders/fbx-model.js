// THREE.FBXLoader = require('../fbx-loader.js');

/**
 * fbx-model
 *
 * Loader for FBX format. Supports ASCII, but *not* binary, models.
 */
AFRAME.registerComponent('fbx-model', {
  schema: {
    src:         { type: 'asset' },
    crossorigin: { default: '' }
  },

  init: function () {
    this.model = null;
    console.log("FBX init:" + this.model);
  },

  update: function () {
    const data = this.data;
    if (!data.src) return;
    console.log("FBX model data:" + data);
    this.remove();
    const loader = new THREE.FBXLoader();
    if (data.crossorigin) loader.setCrossOrigin(data.crossorigin);
    loader.load(data.src, this.load.bind(this));
  },

  load: function (model) {
    this.model = model;
    this.el.setObject3D('mesh', model);
    this.el.emit('model-loaded', {format: 'fbx', model: model});
  },

  remove: function () {
    if (this.model) this.el.removeObject3D('mesh');
  }
});
