// console.log(document.getElementById("year").children[1].firstElementChild.innerHTML)

// document.getElementById("click").onclick = function(){
//     document.getElementById("firstval").innerHTML = 100000;
 
// }

// document.getElementById("secondval").onmouseover = function(){
//     document.getElementById("secondval").style.transition = "all 3s ease-in-out";
//     document.getElementById("secondval").style.transition = "scale (1.09)";
//     document.getElementById("secondval").style.outline = "2px groove red"
// }
// document.getElementById("secondval").onmouseleave = function(){
//     document.getElementById("secondval").style.transform = "scale (1)";
//     document.getElementById("secondval").style.outline = "none";
// }


// document.getElementById("click").onclick = function(){
//     document.getElementById("show").innerHTML = document.getElementById("case").value
// }

document.getElementById("audi").onclick = function(){
    localStorage.setItem("car", "audi")
    window.location.href = "/model.html"
}

document.getElementById("bmw").onclick = function(){
    localStorage.setItem("car", "bmw")
    window.location.href = "/model.html"
}

document.getElementById("honda").onclick = function(){
    localStorage.setItem("car", "honda")
    window.location.href = "/model.html"
}

