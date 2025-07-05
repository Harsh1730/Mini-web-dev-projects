let array = [];
let i = 0;
let level = 1;
let btns = document.querySelectorAll(".Container div");
for (btn of btns) {
    btn.addEventListener("click", checkUser);
};

function random(event) {
    if (array.length === 0) {
        array.push(event.target);
    }
    array.push(btns[Math.floor(getrandom())]);
    console.log(array);
    flash();
}
async function flash() {
    for (let arr of array) {
        let oc = arr.style.backgroundColor;
        arr.style.backgroundColor = "white";
        await givedelay(500);
        arr.style.backgroundColor = oc;
        await givedelay(500);
    }
}
function getrandom() {
    return Math.random() * 4;
}
async function givedelay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function checkUser(event) {
    console.log((event.target) + " " + array[i] + " " + i);

    if (i == array.length - 1 && i != 0) {
        level++;
        document.querySelector("h2").innerHTML = document.querySelector("h2").innerHTML.replace(level - 1, level);
        flashbtn(array[i]);
        await givedelay(500);
        random(event);
        i = 0;
    } else if (array.length === 0) {
        random(event);
        return;
    } else if (event.target != array[i++]) {
        console.log(event.target + " " + array[i - 1]);

        document.querySelector("h3").innerText = "you Loose Try again";
    } else {
        flashbtn(array[i - 1]);
    }
}

let tryagain = document.querySelector(".Tryagain");
tryagain.addEventListener("click", function () { window.location.reload() });


async function flashbtn(arr) {
    let oc = arr.style.backgroundColor;
    arr.style.backgroundColor = "black";
    await givedelay(100);
    arr.style.backgroundColor = oc;
    await givedelay(100);
}