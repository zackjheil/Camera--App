var constraints = { video: { facingMode: "environment" }, audio: false };

const cameraView =document.querySelector("#Camera--View"), cameraOutput= document.querySelector("#Camera--Output"),
cameraSensor = document.querySelector("#Camera--Sensor"), cameraTrigger = document.querySelector("#Camera--Trigger")


function.cameraStart() {
    navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(stream) {
        track = stream.getTracks() [0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something isn't Working.", error);
    })
}

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext ("2d").drawImage(cameraView, 0, 0);
    cameraOutput.classList.add("taken");
};

window.addEventListener("load", cameraStart, false);
