//Date Calculator for years experience. I manually enter start date and it calculates years and months of experience
// from present day so I don't have to continually update

//Copy to clipboard for email
window.onload = function() {
    document.getElementById('developmentDIV').style.display = 'none';
    document.getElementById('skillsDIV').style.display = 'none';
    document.getElementById('workDIV').style.display = 'none';
    document.getElementById('educationDIV').style.display = 'none';
    document.getElementById('projectsDIV').style.display = 'none';
};

function developmentDIV() {
    var x = document.getElementById("developmentDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function skillsDIV() {
    var x = document.getElementById("skillsDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function workDIV() {
    var x = document.getElementById("workDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function educationDIV() {
    var x = document.getElementById("educationDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function projectsDIV() {
    var x = document.getElementById("projectsDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
