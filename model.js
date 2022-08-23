
var selectedCar = localStorage.getItem("car")
if(selectedCar == "audi"){
    document.getElementById("audi-model").style.display = "flex";
    document.getElementById("bmw-model").style.display = "none";
    document.getElementById("honda-model").style.display = "none";
}

var selectedCar = localStorage.getItem("car")
if(selectedCar == "bmw"){
    document.getElementById("bmw-model").style.display = "flex";
    document.getElementById("audi-model").style.display = "none";
    document.getElementById("honda-model").style.display = "none";
}

var selectedCar = localStorage.getItem("car")
if(selectedCar == "honda"){
    document.getElementById("honda-model").style.display = "flex";
    document.getElementById("audi-model").style.display = "none";
    document.getElementById("bmw-model").style.display = "none";
}

document.getElementById("camry").onclick = function(){
    localStorage.setItem("model", "camry")
    window.location.href = "/year.html"
}

document.getElementById("rav4").onclick = function(){
    localStorage.setItem("model", "rav4")
    window.location.href = "/year.html"
}