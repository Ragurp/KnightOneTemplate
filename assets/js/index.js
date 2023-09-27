
let counters = document.querySelector(".counters");
let count1 = document.querySelector(".count1");
let count2 = document.querySelector(".count2");
let count3 = document.querySelector(".count3");
let count4 = document.querySelector(".count4");
let one = 0;
let two = 0;
let three = 0;
let four = 0;

// document.body.addEventListener("load", counter);

window.addEventListener("scroll", () => {
    let sh = window.scrollY;
    if (6100 <= sh) {
        setInterval(counter, 100)
    }
});

// document.body.addEventListener("load", counter);

function counter() {
    if (one < 232) {
        one++;
        count1.innerHTML = one;
    }
    if (two < 521) {
        two++;
        count2.innerHTML = two;
    }
    if (three < 1463) {
        three++;
        count3.innerHTML = three;
    }
    if (four < 15) {
        four++;
        count4.innerHTML = four;
    }
}


// search............
let grid = document.querySelector(".grid");
let box = grid.querySelectorAll(".box");

document.querySelector(".all").addEventListener("click", () => {

    box.forEach((ele) => {
        ele.style.display = "block";
    })
});

document.querySelector(".app").addEventListener("click", () => {

    box.forEach((ele) => {
        if (ele.querySelector("small").innerText == "App") {
            ele.style.display = "block";
        }
        else {
            ele.style.display = "none";
        }

    })
})

document.querySelector(".card").addEventListener("click", () => {

    box.forEach((ele) => {
        if (ele.querySelector("small").innerText == "Card") {
            ele.style.display = "block";
        }
        else {
            ele.style.display = "none";
        }

    })
})

document.querySelector(".web").addEventListener("click", () => {

    box.forEach((ele) => {
        if (ele.querySelector("small").innerText == "Web") {
            ele.style.display = "block";
        }
        else {
            ele.style.display = "none";
        }

    })
})