Webcam.set({
    width:250,
    height:250,
    image_format:'png',
    image_quality:90,

});
camera = document.getElementById("camera");
Webcam.attach();
function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = <img id="captured_image" src="'+data_uri+'"/>;

    }

}
console.log('ml5.version',ml5.version);
classifier = ml5.imageClassifier(modelLoaded);