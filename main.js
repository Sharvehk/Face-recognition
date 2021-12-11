Webcam.set({
   width:360,
   height:300,
   image_format:'png',
   png_quality:100
}); 

Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(DataURI){
        document.getElementById("result").innerHTML = "<img  id='captured_image' src = "+DataURI+" >";
    });
}

console.log("ml5 version is ",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wSmiQyth6/model.json",modelloaded);

function modelloaded(){
    console.log("Model is loaded");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotresults);
}

function gotresults(error,results){
   if(error){
      console.error(error);
   }
   else{
       console.log(results);
       document.getElementById("object").innerHTML = results[0].label;
       document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
   }
}
