
const Hour = document.querySelector("#CH");
const Min = document.querySelector("#M");
const Sec = document.querySelector("#S");

console.log(Hour, Min, Sec);


function clock() {
    let vaqt = new Date();


    let h = vaqt.getHours();
    let m = vaqt.getMinutes();
    let s = vaqt.getSeconds();

    Hour.textContent = h < 10 ? "0" + h : h;
    Min.textContent = m < 10 ? "0" + m : m;
    Sec.textContent = s < 10 ? "0" + s : s
};
clock()
setInterval(clock, 1000);
