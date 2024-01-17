function gettime() {
    const date = new Date();
    hours = date.getHours(00);
    minute = date.getMinutes(00);
    second = date.getSeconds(00);
    //console.log(hours + ":" + minute + ":" + second);
}

const digital_watch = document.querySelector(".digital-watch");
const h1 = document.createElement("h1");

function updateTime() {
    h1.innerHTML = hours + ":" + minute + ":" + second;
    digital_watch.appendChild(h1);
}


function timeLaps() {
    // const h2 = document.createElement("h2");
    // //let h2 = document.querySelector(".laps")
    // h2.innerHTML = hours + ":" + minute + ":" + second;
    // document.querySelector(".main").appendChild(h2);

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




