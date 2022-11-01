const but1 = document.getElementById('btn1');
const but2 = document.getElementById('btn2');
const but3 = document.getElementById('btn3');
const but4 = document.getElementById('btn4');
const but5 = document.getElementById('btn5');
const altContainer = document.getElementById('altContainer');
const submitBtn = document.getElementById('submit');
let messageRender = document.getElementById('messageRender');
const butArr = [but1, but2, but3, but4, but5];
let value = 0;
for (let i = 0; i < butArr.length; i++) {
    butArr[i].addEventListener('click', function () {
        value = butArr[i].innerText;
    })
}

submitBtn.addEventListener('click', function () {
    if(value == 0){
        alert("You need to choose an option first!")
    }
    else
    altContainer.style.zIndex = 6;
    messageRender.textContent = `You selected ${value} out of 5`;
})

