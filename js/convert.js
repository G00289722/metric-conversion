// feet to meters
function fToM(){

  var measure = parseInt(document.getElementById("value1").value);

  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
  
  

}

//inches to centimeters
function CenT(){

  var measure = parseInt(document.getElementById("value1").value);

  var Centimeters = measure * 2.54;
  var message = measure + ' inches converts to ' + Centimeters + ' Centimeters.';
  console.log(message);
  document.getElementById("resultsentencec").innerHTML = message;
  
  

}

//yards to meters
function YtM(){

  var measure = parseInt(document.getElementById("value1").value);

  var yards = measure * 0.9144;
  var message = measure + ' yards converts to ' + yards + ' meters.';
  console.log(message);
  document.getElementById("resultsentencey").innerHTML = message;
  
  

}

//miles to kilometers

function MtK(){

  var measure = parseInt(document.getElementById("value1").value);

  var kilomiles = measure * 1.60934;
  var message = measure + ' miles converts to ' + kilomiles + ' kilometers.';
  console.log(message);
  document.getElementById("resultsentencem").innerHTML = message;
  
  

}