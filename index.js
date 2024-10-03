//  COUNTER PROGRAM
const decreaseBtn = document.getElementById("DecreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("RestBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function()
{
    count ++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function()
{
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function()
{

    count = 0;
    countLabel.textContent = count;
}
