var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
 
function start() {
    document.getElementById("output-text").innerHTML = "";
    recognition.start();
   
 
}
recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("output-text").innerHTML = content;
 
    Webcam.attach(camera);
 
    if (content == "take my selfie"){
        console.log("taking selfie");
   
        speaking();
        document.getElementById("countdown").src = "countdown_5sec.gif";
    }
}
 
function speaking() {
   
    var AIspeech = "taking your selfie in 5 seconds!";
 
    var synth = window.speechSynthesis;
 
    var utterThis = new SpeechSynthesisUtterance(AIspeech);
 
    synth.speak(utterThis);


 
   
}
 
function save() {
 
link = document.getElementById("link");
img = document.getElementById("selfie_img").src;
link.href = img;
link.click();
 
 
}
 
 
 
 
function takesnapshot() {
    Webcam.snap(function(data_uri){
    if(img_id=='selfie1') {
        document.getElementById("result1").innerHTML = '<img id = "selfie1" src = " ' +data_uri + ' " />';
    }
   if( img_id == "selfie2"){
    document.getElementById("result2").innerHTML = '<img id = "selfie2" src = " ' +data_uri+ ' "/>'
   }
   if( img_id == "selfie3"){
    document.getElementById("result3").innerHTML = '<img id = "selfie3" src = " ' +data_uri+ ' "/>'
   }
 });
 
 
}


setTimeout(function() { 
    img_id = "selfie1" 
    takesnapshot();
    speak_data = "Taking your selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);
 
 
 
 
 
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 100
 });
 camera = document.getElementById("camera");
