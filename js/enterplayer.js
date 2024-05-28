const playerNameEl = document.getElementById("playerName");
const playerNameBtn = document.getElementById("enterNameBtn");
const playerNameDisplay = document.getElementById("playerNameBox");

document.getElementById("enterNameBtn").onClick = function(){
    playerNameEl = document.getElementById("playerName").value;
    document.getElementById("playerNameBox").textContent = `${playerNameEl}`;
}
