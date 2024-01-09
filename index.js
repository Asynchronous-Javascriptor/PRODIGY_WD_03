let choice = "X"
document.querySelector("#result").innerHTML = "Winner !";
document.querySelector("#player").innerHTML = choice;
let reset = document.querySelector("#reset");


let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].setAttribute("onclick", `play(${i})`);
}

function play(i) {
    if (choice === "X" && boxes[i].innerHTML == '') {
        boxes[i].innerHTML = choice;
        win();
        choice = "O";
        document.querySelector("#player").innerHTML = choice;
    }
    else if (choice === "O" && boxes[i].innerHTML == '') {
        boxes[i].innerHTML = choice;
        win()
        choice = "X";
        document.querySelector("#player").innerHTML = choice;
    }
    else {
        alert("invalid Move");
    }
}

function win() {
    if (boxes[0].innerHTML == boxes[1].innerHTML && boxes[1].innerHTML == boxes[2].innerHTML && boxes[0] != "" && boxes[1] != "" && boxes[2].innerHTML != "") {
        document.getElementById("result").innerHTML = `Player ${choice} wins`;
        off();
    }
    else if (boxes[3].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[5].innerHTML && boxes[3] != "" && boxes[4] != "" && boxes[5].innerHTML != "") {
        document.getElementById("result").innerHTML = `Player ${choice} wins`;
        off();
    }
    else if (boxes[6].innerHTML == boxes[7].innerHTML && boxes[7].innerHTML == boxes[8].innerHTML && boxes[6] != "" && boxes[7] != "" && boxes[8].innerHTML != "") {
        document.getElementById("result").innerHTML = `Player ${choice} wins`;
        off();
    }
    else if (boxes[0].innerHTML == boxes[3].innerHTML && boxes[3].innerHTML == boxes[6].innerHTML && boxes[0] != "" && boxes[3] != "" && boxes[6].innerHTML != "") {
        document.getElementById("result").innerHTML = `Player ${choice} wins`;
        off();
    }
    else if (boxes[1].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[7].innerHTML && boxes[1] != "" && boxes[4] != "" && boxes[7].innerHTML != "") {
        document.getElementById("result").innerHTML = `Player ${choice} wins`;
        off();
    }
    else if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML && boxes[2] != "" && boxes[5] != "" && boxes[8].innerHTML != "") {
        document.getElementById("result").innerHTML = `Player ${choice} wins`;
        off();
    }
    else if (boxes[0].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[8].innerHTML && boxes[0] != "" && boxes[4] != "" && boxes[8].innerHTML != "") {
        document.getElementById("result").innerHTML = `Player ${choice} wins`;
        off();
    }
    else if (boxes[2].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[6].innerHTML && boxes[2] != "" && boxes[4] != "" && boxes[6].innerHTML != "") {
        document.getElementById("result").innerHTML = `Player ${choice} wins`;
        off();
    }
    else if (boxes[0].innerHTML != "" && boxes[1].innerHTML != "" && boxes[2].innerHTML != "" && boxes[3].innerHTML != "" && boxes[4].innerHTML != "" && boxes[5].innerHTML != "" && boxes[6].innerHTML != "" && boxes[7].innerHTML != "" && boxes[8].innerHTML != "") {
        document.getElementById("result").innerHTML = `Game Draw`;
        off();
    }
}

function off() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeAttribute("onclick");
    }
}


reset.addEventListener("click", function () {
    document.querySelector("#result").innerHTML = "Winner !";
    choice = "X"
    document.querySelector("#player").innerHTML = choice;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].setAttribute("onclick", `play(${i})`);
    }
})



