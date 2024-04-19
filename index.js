let toggle = document.getElementById("toggle");
let circle = document.getElementById("circle");



const isdark = localStorage.getItem("isdark") == "true";


if (isdark) {
    enableDark()
}

function enableDark() {
    document.body.classList.add("dark-theme");
    localStorage.setItem("isdark", "true");
}

function enableLight() {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("isdark", null);
}

toggle.addEventListener("click", () => {
    if (circle.classList.contains("right")) {
        circle.classList.remove("right");
        circle.classList.add("left");
        enableDark();
    } else {
        circle.classList.add("right");
        enableLight();
        circle.classList.remove("left");
    }
})