// let mobilenet;
// let classifier;
let video;
// let video = document.getElementById('#videoElement');
let label = '';
let knn;
let features;
let ready = false;
let labelP;
function setup() {
      createCanvas(320, 270);
      video = createCapture(VIDEO);
      video.size(320, 240);
      background(0);
    
    features = ml5.featureExtractor('MobileNet', modelReady);
    knn = ml5.KNNClassifier();
    // classifier = mobilenet.classification(video, videoReady);

    musicButton = document.getElementById('music');


    // musicButton.addEventListener('click', function () {
    //     classifier.addImage('music');
    // });


    whistleButton = document.getElementById('calendar');
    // whistleButton.addEventListener('click', function () {

    //     for (i = 0; i < 500; i++) {
    //         console.log(i);
    //         musicButton.click();
    //     }
    //     // classifier.addImage('happy');
    // })

    trainButton = document.getElementById('train');
    trainButton.addEventListener('click', function () {
        classifier.train(whileTraining);
    });

}

function goClassify() {
    const logits = features.infer(video);
    knn.classify(logits, function(error, result) {
      if (error) {
        console.error(error);
      } else {
        label = result.label;
        labelP.html(result.label);

        // if (label === 'calibrate') {
        //     document.getElementById('label').textContent = '';
        // } else {
        //     document.getElementById('label').innerHTML = label;
        //     console.log(label);
        // }
        goClassify();
      }
    });
  }

  function keyPressed() {
    const logits = features.infer(video);
    if (key == 'l') {
      knn.addExample(logits, 'left');
      console.log('left');
    } else if (key == 'r') {
      knn.addExample(logits, 'right');
      console.log('right');
    } else if (key == 'u') {
      knn.addExample(logits, 'up');
      console.log('up');
    } else if (key == 'd') {
      knn.addExample(logits, 'down');
      console.log('down');
    } else if (key == 's') {
      save(knn, 'model.json');
      //knn.save('model.json');
    }
  }

document.addEventListener('click', function(e){

    const logits = features.infer(video);
    if (e.target.id === "l") {
      knn.addExample(logits, 'music');
      console.log('music');
    } else if (e.target.id == '2') {
      knn.addExample(logits, 'calendar');
      console.log('calendar');
    } else if (key == 'u') {
      knn.addExample(logits, 'up');
      console.log('up');
    } else if (key == 'd') {
      knn.addExample(logits, 'down');
      console.log('down');
    } else if (key == 's') {
      save(knn, 'model.json');
      //knn.save('model.json');
    }
})


//   function keyPressed() {
   
//   }


function modelReady() {
    console.log('model ready!');
    // Comment back in to load your own model!
    // knn.load('model.json', function() {
    //   console.log('knn loaded');
    // });
  }

function videoReady() {
    console.log('Video is ready!!!');
}

// function whileTraining(loss) {
//     if (loss == null) {
//         console.log('Training Complete');
//         classifier.classify(gotResults);
//     } else {
//         console.log(loss);
//     }
// }


// function gotResults(error, result) {
//     if (error) {
//         console.error(error);
//     } else {
//         // console.log(confidenceByLabel)
//         label = result;
//         classifier.classify(gotResults);
        
//         if (label === 'calibrate') {
//             document.getElementById('label').textContent = '';
//         } else {
//             document.getElementById('label').textContent = label;
//             console.log(label);
//         }


//     }
// }


// if (!ready && knn.getNumLabels() > 0) {
//     goClassify();
//     ready = true;
//   }


function listen(label) {
    document.getElementById('label').textContent = label;
}
listen(label);


// function draw() {
//     background(0);
//     image(video, 0, 0, 320, 240);
//     fill(255);
//     textSize(16);
//     text(label, 10, height - 10);
// }


// CALLING 

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
  
  console.log('test');
  if (times == 0) {
    times = epohe;
    return
  };
  knn.addExample(logits, 'calendar');
  times--;
  setTimeout(Calendar, 100); //Each second
}