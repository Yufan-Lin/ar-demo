/*
navigator.getMedia = ( navigator.getUserMedia || // use the proper vendor prefix
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

navigator.getMedia({video: true}, function() {
    // webcam is available
    console.log('webcam is available');
}, function() {
    // webcam is not available
    console.log('webcam is not available');
});
*/

var input = document.querySelector('input');
input.value = document.URL;

var treeModel = document.querySelector('#tree-model');
treeModel.addEventListener('model-loaded', () => {
    console.log('Model has loaded.');

    var video = document.querySelector('video');

    if (video == null) {
        
        showAlertView();

    } else {

        showVideo();

    }

});

var video = document.querySelector('video');
video.addEventListener('loaded', function() {

    if (video != null) {
        console.log('camera is avaliable.');
        hideAlertView();

    } else {
        console.log('camera is not avaliable.');


    }

});

var scene = document.querySelector('a-scene');
scene.addEventListener('loaded', function() {
    console.log('scene has loaded.');




    

});

function showAlertView() {

    var alert = document.querySelector('#alert-popover');
    alert.style.display = 'inline-block';

}

function hideAlertView() {

    var alert = document.querySelector('#alert-popover');
    alert.style.display = 'none';

}

function copyLink() {

    var input = document.querySelector('input');
        input.value = document.URL;

    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        // for ios
    
        var oldContentEditable = input.contentEditable
        var oldReadOnly = input.readOnly;
    
        input.contentEditable = true;
        input.readOnly = false;
    
        var range = document.createRange();
        range.selectNodeContents(input);
    
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    
        input.setSelectionRange(0, 999999);
    
        input.contentEditable = oldContentEditable
        input.readOnly = oldReadOnly;

    } else {
        // for other os

        input.select();

    }

    document.execCommand('copy');

    input.blur();

    var copyButton = document.querySelector('#button-copy-link');
    copyButton.className = "btn btn-success";
    copyButton.textContent = "已複製";

}