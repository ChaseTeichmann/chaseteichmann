//Date Calculator for years experience. I manually enter start date and it calculates years and months of experience
// from present day so I don't have to continually update

//Copy to clipboard for email


window.onload = function() {
    document.getElementById('developmentDIV').style.display = 'block';
    document.getElementById('aboutMeDIV').style.display = 'none';
    document.getElementById('workDIV').style.display = 'none';
    document.getElementById('educationDIV').style.display = 'none';
    document.getElementById('projectsDIV').style.display = 'none';
};

function developmentDIV() {
    var x = document.getElementById("developmentDIV");
    hideShow(x);
}

function aboutMeDIV() {
    var x = document.getElementById("aboutMeDIV");
    hideShow(x);
}

function workDIV() {
    var x = document.getElementById("workDIV");
    hideShow(x);
}

function educationDIV() {
    var x = document.getElementById("educationDIV");
    hideShow(x);
}

function projectsDIV() {
    var x = document.getElementById("projectsDIV");
    hideShow(x);
}

function closeAll() {
    var x = document.getElementById("developmentDIV");
    hide(x)
    x = document.getElementById("aboutMeDIV");
    hide(x);
    x = document.getElementById("workDIV");
    hide(x);
    x = document.getElementById("educationDIV");
    hide(x);
    x = document.getElementById("projectsDIV");
    hide(x);
}

function hideShow(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hide(x){
    x.style.display = "none";
}