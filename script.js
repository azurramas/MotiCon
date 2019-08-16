
// var video = document.querySelector("#videoElement");

const epohe = 50;

// if (navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices.getUserMedia({
//       video: true
//     })
//     .then(function (stream) {
//       video.srcObject = stream;
      
//     })
//     .catch(function (err0r) {
//       console.log("Something went wrong!");
//     });
// }

var times = epohe; //Here put the number of times you want to auto submit
// let features;
function Calibrate() {
  var logits = features.infer(video);
  console.log('test');
  if (times == 0) {
    times = epohe;
    return
  };
  knn.addExample(logits, 'calibrate');
  times--;
  setTimeout(Calibrate, 500); //Each second
}

function Music() {
  var logits = features.infer(video);
  console.log('test');
  if (times == 0) {
    times = epohe;
    return
  };
  knn.addExample(logits, 'music');
  times--;
  setTimeout(Music, 100); //Each second
}

function Calendar() {
  var logits = features.infer(video);
  console.log('test');
  if (times == 0) {
    times = epohe;
    return
  };
  knn.addExample(logits, 'calendar');
  times--;
  setTimeout(Calendar, 100); //Each second
}