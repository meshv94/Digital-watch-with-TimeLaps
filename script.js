function gettime() {
    const date = new Date();
    hours = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    //console.log(hours + ":" + minute + ":" + second);
}
const main_div = document.querySelector(".main");
const digital_watch = document.querySelector(".digital-watch");
const h1 = document.createElement("h1");

function updateTime() {
    h1.innerHTML = hours + ":" + minute + ":" + second;
    digital_watch.appendChild(h1);
}
function timeLaps(){
    const h2 = document.createElement("h2");
    h2.innerHTML = hours + ":" + minute + ":" + second;
    main_div.appendChild(h2);

}
setInterval(gettime, 1000);
setInterval(updateTime, 1000);
