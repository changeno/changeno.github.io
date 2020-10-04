var points = 0;
var gain = 1;

function addPoints() {
    points += gain;
    document.getElementById("point").textContent = "points: " + points
}

function gainInc1() {
    if (points > 9) {
        points -= 10;
        gain += 1
        document.getElementById("point").textContent = "points: " + points
    } else {
        alert("not enough points");
    }

}

function gainInc2() {
    if (points > 99) {
        points -= 100;
        gain += 10
        document.getElementById("point").textContent = "points: " + points
    } else {
        alert("not enough points");
    }

}

function gainInc3() {
    if (points > 999) {
        points -= 1000;
        gain += 100
        document.getElementById("point").textContent = "points: " + points
    } else {
        alert("not enough points");
    }

}

function gainInc4() {
    if (points > 9999) {
        points -= 10000;
        gain += 1000
        document.getElementById("point").textContent = "points: " + points
    } else {
        alert("not enough points");
    }

}

function gainInc5() {
    if (points > 999999) {
        points -= 1000000;
        gain += 100000
        document.getElementById("point").textContent = "points: " + points
    } else {
        alert("not enough points");
    }

}

function prize() {
    if (points > 99999999999) {
        points -= 100000000000
        gain += 1000000000000000000
        alert("wow. you made it. you deserve this prize.....")
        // var urlpagel = 
        document.location.href = "https://pastebin.com/raw/ybQ8fXpr"
    } else {
        alert("what! u dont have enough points.")
    }
}
