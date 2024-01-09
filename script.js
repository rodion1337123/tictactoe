var	area = document.getElementById('area')
var cell = document.getElementsByClassName('cell')
var currentPlayer = document.getElementById("curPlyr");

var player = "x";
var stat = {
	"x": 0,
	"o": 0,
	"d": 0
}
var winIndex = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,4,7],
	[2,5,8],
	[3,6,9],
	[1,5,9],
	[3,5,7]
	]

for (let i = 1; i <= 9; i++) {
	area.innerHTML += "<div class='cell' pos=" +i+ "></div>"
}
for( let i=0;i<cell.length; i++ ){
	cell[i].addEventListener('click', cellClick, false)
	}

function cellClick() {
let data = [];

	if(!this.innerHTML){
		this.innerHTML = player;
	}
	else{
		alert("ячейка занята")
		return;
	}

	for(let i in cell){
		if(cell[i].innerHTML == player){
			data.push(parseInt(cell[i].getAttribute('pos')));

		}

	}

	
	if (checkWin(data)) {
		stat[player] += 1;
		restart("выиграл " + player);
	}else {
		var draw = true;
		for (var i in cell){
			if(cell[i].innerHTML =="") draw = false;
		}
		if (draw) {
			stat.d += 1;
			restart("Ничья");
		}
	}
	
	player = player == "x" ? "o" : "x";
	currentPlayer.innerHTML = player.toUpperCase();
}
function checkWin(data) {
	for(let i in winIndex){
		let win = true;
		for(let j in winIndex[i]){
			let id = winIndex[i][j];
			let ind = data.indexOf(id);
			if(ind == -1){
				win = false
			}
		}
		if(win) return true;
	}
	return false;
}
function restart(text){
	console.log(stat);
	alert(text);
	for(var i = 0; i < cell.length; i++){
		cell[i].innerHTML = "";
	}
	updateStat();
}
function updateStat(){
	var countX = document.getElementById("sX");
	var countO = document.getElementById("sO");
	var countD = document.getElementById("sD");

	countD.innerHTML = stat.d;
	countX.innerHTML = stat.x;
	countO.innerHTML = stat.o;
}