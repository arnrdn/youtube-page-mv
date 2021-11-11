const upBtn = document.querySelector('.thumbs-up');
const downBtn = document.querySelector('.thumbs-down');
const rating = document.querySelector('.rating')

function upFunc() {
  const upNum = document.querySelector('.thumbs-up-num');
  upNum = thumbsUp.number++;
}

function downFunc() {
  const downNum = document.querySelector('.thumbs-down-num');
  downNum = thumbsDown.number++;
}

const thummsUp = {
  number: 219;
}

const thumbsDown - {
  number: 10;
}

upBtn.addEventListener('click', upFunc);
thumbsDown.addEventListener('click', downFunc);
