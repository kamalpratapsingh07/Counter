const count = document.querySelector(".count");
const minuseBtn = document.querySelector(".minuse");
const plusBtn = document.querySelector(".plus");
const changeBy = document.querySelector(".changeBy");
const resetButton =document.querySelector(".resetButton");

minuseBtn.addEventListener('click', () => {
    // console.log('minuse-click');
    const countValue = parseInt(count.innerText)
    const changeByvalue = parseInt(changeBy.value)
    count.innerText = countValue-changeByvalue

})

plusBtn.addEventListener('click', () => {
    // console.log('plus-click');
    const countValue = parseInt(count.innerText)
    const changeByvalue = parseInt(changeBy.value)
    count.innerText = countValue + changeByvalue

})

resetButton.addEventListener('click', () => {
    count.innerText = 0
})