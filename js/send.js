var points = 0;
var gain = 1;

function addPoints() {
    points += gain;
    document.getElementById("point").textContent = "points: " + points
}

function gainInc() {
    if (points > 9) {
        points -= 10;
        gain += 1
        document.getElementById("point").textContent = "points: " + points
    } else {
        alert("not enough points");
    }

}