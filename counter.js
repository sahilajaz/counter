const dec = document.querySelector(".decrease")
const reSet = document.querySelector(".reset")
const increaseBtn = document.querySelector(".increase")
const countEL = document.getElementById("counting-el")

let count = 0


dec.addEventListener("click" , function() {
      count = count - 1
      countEL.textContent = count
      countEL.style.color = "red"
})

reSet.addEventListener("click" , function() {
    count = 0
    countEL.textContent = count
    countEL.style.color = "rebeccapurple"
})

increaseBtn.addEventListener("click" , function() {
    count = count + 1
    countEL.textContent = count
    countEL.style.color = "green"
})