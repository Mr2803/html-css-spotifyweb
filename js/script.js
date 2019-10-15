document.getElementById('name-song').innerHTML = "Bohemian Rhapsody"

document.getElementById('name-group').innerHTML = "Queen"



function link1(){
  document.getElementById('first-line').style.visibility = "visible";
  document.getElementById('second-line').style.visibility = "hidden";
  document.getElementById('third-line').style.visibility = "hidden";
  document.getElementById('fourth-line').style.visibility = "hidden";
  document.getElementById('fifth-line').style.visibility = "hidden";
  document.getElementById('sixth-line').style.visibility = "hidden";
}

function link2(){
  document.getElementById('first-line').style.visibility = "hidden";
  document.getElementById('second-line').style.visibility = "visible";
  document.getElementById('third-line').style.visibility = "hidden";
  document.getElementById('fourth-line').style.visibility = "hidden";
  document.getElementById('fifth-line').style.visibility = "hidden";
  document.getElementById('sixth-line').style.visibility = "hidden";
}
function link3(){
  document.getElementById('first-line').style.visibility = "hidden";
  document.getElementById('second-line').style.visibility = "hidden";
  document.getElementById('third-line').style.visibility = "visible";
  document.getElementById('fourth-line').style.visibility = "hidden";
  document.getElementById('fifth-line').style.visibility = "hidden";
  document.getElementById('sixth-line').style.visibility = "hidden";
}
function link4(){
  document.getElementById('first-line').style.visibility = "hidden";
  document.getElementById('second-line').style.visibility = "hidden";
  document.getElementById('third-line').style.visibility = "hidden";
  document.getElementById('fourth-line').style.visibility = "visible";
  document.getElementById('fifth-line').style.visibility = "hidden";
  document.getElementById('sixth-line').style.visibility = "hidden";
}
function link5(){
  document.getElementById('first-line').style.visibility = "hidden";
  document.getElementById('second-line').style.visibility = "hidden";
  document.getElementById('third-line').style.visibility = "hidden";
  document.getElementById('fourth-line').style.visibility = "hidden";
  document.getElementById('fifth-line').style.visibility = "visible";
  document.getElementById('sixth-line').style.visibility = "hidden";
}
function link6(){
  document.getElementById('first-line').style.visibility = "hidden";
  document.getElementById('second-line').style.visibility = "hidden";
  document.getElementById('third-line').style.visibility = "hidden";
  document.getElementById('fourth-line').style.visibility = "hidden";
  document.getElementById('fifth-line').style.visibility = "hidden";
  document.getElementById('sixth-line').style.visibility = "visible";
}


function play(){
  document.getElementById('bars').style.opacity = "1";
}
function stop(){
  document.getElementById('bars').style.opacity = "0";
}
