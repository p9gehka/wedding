!
class Point {
	constructor(x, y) {
		this.X = x;
		this.Y = y;
	}
}
class Coin {
	constructor(x, y, addCoin, coins) {
		this.point = new Point(x, y);
		this.c = document.createElement('div');
		this.c.className = 'coin';
		this.c.style.left = x + 'px';
		this.c.style.top = y + 'px';
		this.c.addEventListener('click', () => {
			this.c.style.display = 'none';
			var score = addCoin();
			if(score % 5 === 0) {
				coins.innerHTML = '';
				createCoins();
			}
		})
	}
	getElement() {
		return this.c; 
	}
}
class Game {
	constructor(scoreElem) {
		this.score = 0;
		this.scoreElem = scoreElem;

	}
	upScore() {
		return () => {
			this.score++;
			this.scoreElem.innerHTML = this.score * 10;
			return this.score;
		};
	}
}
function randInt(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}


var game = document.getElementById('game');
var scoreElem = document.getElementById('score');
var coinsElem = document.getElementById('coins');
var gameObj = new Game(scoreElem);


createCoins = () => {
	for (var i = 0; i < 5; i++) {
		var coin = new Coin(randInt(0, coinsElem.offsetWidth - 40), randInt(0, coinsElem.offsetHeight - 40), gameObj.upScore(), coins);
		coinsElem.appendChild(coin.getElement());
	}
}

createCoins();
var initT = new Date()
var timeElem = document.getElementById('time');
var interval = setInterval(() => {
	var t = (new Date(new Date() - initT)).getSeconds()
	if((50 - t) === 0) {
		clearInterval(interval);
		coinsElem.innerHTML = '';
	}
	timeElem.innerHTML = 50 - t;
});
