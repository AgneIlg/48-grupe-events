const plusDOM = document.getElementById('plus');
const minusDOM = document.getElementById('minus');
const screenDOM = document.getElementById('screen')
console.log();

let count = 0;
function increment() {
    ++count
    screenDOM.innerText= 'Score: ' + count;
}

function decrement() {
    --count
    screenDOM.innerText= 'Score: ' + count;
}
plusDOM.addEventListener('click', increment);
minusDOM.addEventListener('click', decrement);