alert('Спасибо, что согласились поймать сбежавшую кнопку!')
alert('Глядите в оба, ведь она очень шустрая')

let btn = document.getElementById('btn');

btn.addEventListener('mouseover', function() {
  let maxX = window.innerWidth - btn.clientWidth;
  let maxY = window.innerHeight - btn.clientHeight;
  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);
  btn.style.left = randomX + 'px';
  btn.style.top = randomY + 'px';
});
window.addEventListener('beforeunload', function() {
  this.alert('Спасибо за попытку, хорошего дня :)')
});

function af(){
  alert('Поздравляю! Вы смогли поймать сбежавшую кнопку');
}