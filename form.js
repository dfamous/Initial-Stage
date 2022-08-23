document.getElementById("enter").onclick = function(){
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var occu = document.getElementById("occu").value;


    var namepattern = /^[a-z]+$/
    var addresspattern = /^[\w]{,20}$/
    var citypattern = /^\[\w]{,100}$/
    var statepattern = /^[a-z]+$/
    var occupattern = /^[a-z]+$/

       
if(name === ""){
alert("name cannot be empty")

}else if(address ===""){
    alert("address cannot be empty")

}else if(city ===""){
    alert("city cannot be empty")

}else if(state ===""){
    alert("state cannot be empty")
}else if(occu ===""){
    alert("occu cannot be empty")
}else{
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("occu", occu);
    window.location.href = "/details.html"
}

}

 