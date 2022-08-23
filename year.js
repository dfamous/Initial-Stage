var selectedModel = localStorage.getItem("model")
if(selectedModel == "camry"){
    document.getElementById("rav4-year").style.display = "none";
    document.getElementById("camry-year").style.display = "flex";
    
}

var selectedModel = localStorage.getItem("model")
if(selectedModel == "rav4"){
    document.getElementById("rav4-year").style.display = "flex";
    document.getElementById("camry-year").style.display = "none";
    
}
document.getElementById("first").onclick = function(){
    localStorage.setItem("year", 2000)
    window.location.href = "/form.html"
}


