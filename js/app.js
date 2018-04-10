window.onload = () => {
  document.getElementById('loading').style.display = "none"
}

/*
var scene = document.querySelector('a-scene');

if (scene.hasLoaded) {
  run();
} else {
  scene.addEventListener('loaded', run);
}

function run() {

  console.log('Start!!');
  
  var marker = document.querySelector('#marker');

  marker.addEventListener('click', () => {

    console.log('Click!!');

  });


}
*/

AFRAME.registerComponent('start', {
  schema: {type: 'string'},

  init: function() {
    var stringToLog = this.data;
    
    console.log('START!!');
  }
});

function clickEvent() {

  console.log('CCCCLICK!!');



}


AFRAME.registerComponent('log', {
  schema: {type: 'string'},

  init: function() {
    var stringToLog = this.data;

    var el = this.el;
    
    el.addEventListener('click', clickEvent);
    

  }
});

function addBox() {

  var el = document.createElement('a-box');

  el.setAttribute('position', '-1 0.5 -3');
  el.setAttribute('color', '#a22');

  scene.appendChild(el);

}

