var box = document.getElementById("box");
generate(100);

function generate(len) {
    for (var i = 1; i <= len; i++) {
        if ((i % 2 != 0 || i == 2) && (i % 3 != 0 || i == 3) && (i % 5 != 0 || i == 5) && (i % 7 != 0 || i == 7)) {
            box.innerHTML += "<div class=\"number prime\">" + i + "</div>";
        } else {
            box.innerHTML += "<div class=\"number\">" + i + "</td>";
        }
    }
}

document.getElementById("numCheck").oninput = function () {
    var i = parseInt(this.value);
    if ((i % 2 != 0 || i == 2) && (i % 3 != 0 || i == 3) && (i % 5 != 0 || i == 5) && (i % 7 != 0 || i == 7)) {
        this.style.borderColor = "green";
    } else {
        this.style.borderColor = "red";
    }
};

function setvalue() {
    box.innerHTML = "";
    this.dataset.length = this.value;
    generate(this.value);
};

document.getElementById("length").oninput = function () {
    this.dataset.length = this.value;
};

document.getElementById("length").ontouchend = setvalue;
document.getElementById("length").onmouseup = setvalue;
