function gettime() {
    const date = new Date();
    hours = date.getHours().toString().padStart(2, '0');
    minute = date.getMinutes().toString().padStart(2, '0');
    second = date.getSeconds().toString().padStart(2, '0');
}

const digital_watch = document.querySelector(".digital-watch");
const h1 = document.createElement("h1");

function updateTime() {
    h1.innerHTML = hours + ":" + minute + ":" + second;
    digital_watch.appendChild(h1);
}


function timeLaps() {

    //storing in local storage
    if (localStorage.getItem("timeArray") == null) {
        const timeArray = [];
        timeArray.push(hours + ":" + minute + ":" + second);
        localStorage.setItem("timeArray", JSON.stringify(timeArray))
    } else {
        timeArray = JSON.parse(localStorage.getItem("timeArray"))
        timeArray.push(hours + ":" + minute + ":" + second)
        localStorage.setItem("timeArray", JSON.stringify(timeArray))
    }
    showLaps();
}

function showLaps() {
    document.querySelector(".show").innerHTML = "";

    let LSArray = JSON.parse(localStorage.getItem("timeArray"));
    LSArray.map(element => {
        timeElement = `<h2 class="laps"> ${element} </h2>`
        document.querySelector(".show").innerHTML += timeElement;
    });
}

function clearAll(){
    localStorage.clear();
    window.location.reload()
}

setInterval(gettime, 1000);
setInterval(updateTime, 1000);




