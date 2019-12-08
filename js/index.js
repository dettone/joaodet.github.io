var titleEl = document.querySelector('.title-screen');
var endEl = document.querySelector('.end-screen');
//var loseEl = document.querySelector('.lose-screen');
var enemies = document.querySelectorAll('[mixin="cube enemy"]');
var deadEnemies = [];
var scoreEl = document.querySelector('.score');
var score = 0;
var increaseCounter = function(e) {
  var enemy = e.currentTarget;
  if (deadEnemies.indexOf(enemy) != -1) { return; }
  deadEnemies.push(enemy);
  if(this.id=== "jogador"){
    var endEl = document.querySelector('.end-screen');
    endEl.style.display = 'block';
  }else{
    score+=1;
  }
  scoreEl.innerHTML = 'Score: ' + score;


  if (enemies.length-1 === deadEnemies.length) {
    var endEl2 = document.querySelector('.end-screen2');
    endEl2.style.display = 'block';
  }
  //if(score === 7){
   // alert("acabo")
    //endEl.style.display = 'block';
  //}
}
titleEl.addEventListener('click', function() { titleEl.style.display = 'none'; });
enemies = Array.prototype.slice.call(enemies);
enemies.forEach(function(enemyEl) {
  enemyEl.addEventListener('hit', increaseCounter);
});
