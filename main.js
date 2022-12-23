prediction=""

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("camera")
Webcam.attach("#camera")


function take_snapshot()
{
  Webcam.snap(function(data_uri)
  {
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'

  })
}

console.log("ml5version is",ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6OzCMiII8/model.json",modelLoaded)

function modelLoaded()
{
    console.log("model is loaded")
}

function speak()
{
synth=window.speechSynthesis
speakdata="The prediction is"+prediction

utterThis=new SpeechSynthesisUtterance(speakdata)
synth.speak(utterThis)
}

function check()
{
  img=document.getElementById('captured_image')
  classifier.classify(img, gotResult)
}

function gotResult(error, results){
   if (error){
    console.error(error)
   } else {
console.log(results)
document.getElementById("result_emotion_name").innerHTML=result[0].label

prediction=results[0].label

speak()
if(results[0].label == "amazing")
{
  document.getElementById("update_emoji").innerHTML = "&#128076;"
}
if(results[0].label == "victory")
{
  document.getElementById("update_emoji").innerHTML = "&#9996;"
}
if(results[0].label == "best")
{
  document.getElementById("update_emoji").innerHTML = "&#128077;"
}





   }












  }


















































































