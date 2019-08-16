let features;
let knn;
let ready = false;
let label = 'nothing';
let video;

function again(id) {
  if (id === 'n') {
    console.log('App paused...');
    document.getElementById('label').textContent = 'App Paused...';
    ready = false;
  }
}

function setup() {
  // createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.size(400, 300);
  document.getElementById('defaultCanvas0').style.display = 'none';
  

  features = ml5.featureExtractor('MobileNet', modelReady);
  knn = ml5.KNNClassifier();
  message('Waiting for calibration or start of the app...');
}

const x = 5;
var k = x;

function goClassify() {
  if (ready === true) {
    const logits = features.infer(video);
    knn.classify(logits, function (error, result) {
      if (error) {
        console.error(error);
      } else {
        if (k === 0) {

          k = x;

          if (label === 'music' || label === 'email' || label === 'chrome') {
            console.log(label);
            var theUrl = `http://localhost:3000/api/${label}`
            $.get(theUrl, function (data, status) {
              console.log("Status: " + status);
            });
          }
        }
        // console.log(k);
        label = result.label;

        document.getElementById('label').textContent = label;
        k--;
        setTimeout(goClassify, 500);
      }
    });

  }
}

function message(msg) {
  document.getElementById('label').textContent = `${msg}`;
}

function keyPressed(e) {
  
  const logits = features.infer(video);
  const epohe = 200;
  var times = epohe;

  if (e === "1") {

    let i = 0;
    while (i < times) {
      knn.addExample(logits, 'music');
      console.log('music');
      i++;
    }

    if (i === times) {
      message('Calibration Successful!');
      setTimeout(function () {
      document.getElementById('label').textContent = 'Waiting for calibration or start of the app...';
      }, 2200)
    } 
  }

  if (e === "2") {
    let i = 0;
    while (i < times) {
      knn.addExample(logits, 'email');
      console.log('email');
      i++;
    }

    if (i === times) {
      message('Calibration Successful!');
      setTimeout(function () {
      document.getElementById('label').textContent = 'Waiting for calibration or start of the app...';
      }, 2200)
    } 

  }
  if (e === "3") {
    let i = 0;
    while (i < times) {
      knn.addExample(logits, 'chrome');
      console.log('chrome');
      i++;
    }

    if (i === times) {
      message('Calibration Successful!');
      setTimeout(function () {
      document.getElementById('label').textContent = 'Waiting for calibration or start of the app...';
      }, 2200)
    } 

  }

  if (e === "0") {
    let i = 0;
    while (i < times) {
      knn.addExample(logits, ' ');
      console.log('calibration');
      i++;
    }

    if (i === times) {
      message('Calibration Successful!');
      setTimeout(function () {
      document.getElementById('label').textContent = 'Waiting for calibration or start of the app...';
      }, 2200)
    } 
  }
  if (e === "s") {
    save(knn, 'model.json');
  }
}

function modelReady() {
  console.log('Model ready!');

  // Comment back in to load your own model!
  knn.load('model.json', function () {
    console.log('KNN loaded!');
    document.getElementById('title').textContent = 'App Loaded!';

  });
}

function draw(id) {

  if (!ready && knn.getNumLabels() > 0 && id === 'r') {
    console.log('App started...')
    message('App started...');
    setTimeout(goClassify, 300);
    ready = true;
  }
}

// Temporary save code until ml5 version 0.2.2
const save = (knn, name) => {
  const dataset = knn.knnClassifier.getClassifierDataset();
  if (knn.mapStringToIndex.length > 0) {
    Object.keys(dataset).forEach(key => {
      if (knn.mapStringToIndex[key]) {
        dataset[key].label = knn.mapStringToIndex[key];
      }
    });
  }
  const tensors = Object.keys(dataset).map(key => {
    const t = dataset[key];
    if (t) {
      return t.dataSync();
    }
    return null;
  });
  let fileName = 'myKNN.json';
  if (name) {
    fileName = name.endsWith('.json') ? name : `${name}.json`;
  }
  saveFile(fileName, JSON.stringify({
    dataset,
    tensors
  }));
};

const saveFile = (name, data) => {
  const downloadElt = document.createElement('a');
  const blob = new Blob([data], {
    type: 'octet/stream'
  });
  const url = URL.createObjectURL(blob);
  downloadElt.setAttribute('href', url);
  downloadElt.setAttribute('download', name);
  downloadElt.style.display = 'none';
  document.body.appendChild(downloadElt);
  downloadElt.click();
  document.body.removeChild(downloadElt);
  URL.revokeObjectURL(url);
};