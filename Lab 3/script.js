

function myFunction() {
    const popup = document.querySelector(".cubes");
    popup.classList.toggle("show");
  }
for (let i = 0; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i)
    }

}
function addNumbers() {
    const firstNumber = parseInt(document.getElementById("firstNumber").value);
    const secondNumber = parseInt(document.getElementById("secondNumber").value);
    const result = firstNumber + secondNumber;
    
    document.getElementById("result").innerHTML = `Wynik: ${result}`;
}

const btnCreate = document.querySelector(".create-btn")
const btnCreate2 = document.querySelector(".rez")
const inp = document.querySelector(".inp2")

function time(){
    const date = new Date()
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    document.querySelector('.time').innerHTML = `${h}:${m}:${s}`
}

setInterval(time, 1000);
time()


var res = 0
btnCreate.addEventListener("click", () => {
    res = (Math.floor(Math.random() * 100));
   
})
btnCreate2.addEventListener("click", () => {
    console.log(inp)
    if (inp.value > res){
        alert("za mało")
       
    }
    if(inp.value < res){
        alert("za duzo")
    }
    if(inp.value == res){
        alert("Zgadłes")
    }
})


function corect() {

}