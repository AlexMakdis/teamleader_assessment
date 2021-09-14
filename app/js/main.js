const goButton = document.getElementById("goButton");
const moveButton = document.getElementById("moveButton");
const boostButton = document.getElementById("boostButton");

// Segment docs tracking
analytics.trackLink(goButton, "Clicked Go Free-trial Button", {
    choice: "Go"
});
analytics.trackLink(moveButton, "Clicked Move Free-trial Button", {
    choice: "Move"
});
analytics.trackLink(boostButton, "Clicked Boost Free-trial Button", {
    choice: "Boost"
});