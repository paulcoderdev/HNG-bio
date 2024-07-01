window.onload = () =>{
    const el = document.getElementById("currentDay");
    el.innerHTML = (new Date).toISOString().split("T")[0]
}

let hours = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let period = document.getElementById("period")


setInterval(()=>{

    let currentTime = new Date();
hours.innerHTML = currentTime.getHours()
min.innerHTML = currentTime.getMinutes()
sec.innerHTML = currentTime.getSeconds()
},1000)

