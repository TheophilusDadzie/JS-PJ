const addNum = document.getElementById('add');
const restNum = document.getElementById('reset');
const subNum = document.getElementById('sub');
const countText = document.getElementById('count');

var count = 0;

addNum.addEventListener('click', () => {
   count++;
   countText.innerHTML = count;
});
restNum.addEventListener('click', () => {
   countText.innerHTML = 0;
});

subNum.addEventListener('click', () => {
    count--;
    countText.innerHTML = count
})