let toggleStatus = false;
let getMenu = document.querySelector(".menu");
let pageBody = document.querySelector(".page-body");

let toggleBtn = function () {
    if (toggleStatus === false) {
        getMenu.style.visibility = "visible";
        toggleStatus = true;
    }

    else if (toggleStatus === true) {
        getMenu.style.visibility = "hidden";
        toggleStatus = false;
    }
}

let toggleHome = function () {
    pageBody.style.backgroundColor = "grey";
}

let toggleRed = function () {
    pageBody.style.backgroundColor = "red";
}

let toggleOrange = function () {
    pageBody.style.backgroundColor = "orange";
}

let togglePurple = function () {
    pageBody.style.backgroundColor = "purple";
}

let toggleGreen = function () {
    pageBody.style.backgroundColor = "green";
}


