

function myFunction() {
    const popup = document.querySelector(".cubes");
    popup.classList.toggle("show");
   
  }

  // function wiek12(wiek1){
    //     if (wiek1 < 18){
    //         console.log("Nie jesteś pewnoletnim")
    //     }
    //     else {
    //         console.log("Jesteś pewnolentin")
    //     }
    // }    
    // var wiek = prompt("podaj wiek")
    // wiek12(wiek)
    
    //  function stopni(){
    //     var celsuja = prompt("podaj celsuja")
    //     var farengejta = (celsuja *1.8)+32
    //     console.log(farengejta)
    //  }
    //  stopni()
    const tab = [32,16,17,7,13]
    // var sum = 0
    // tab.forEach(function(item,i){
    //     sum += tab[i]
    // })
    // console.log(sum)
    
    // var sum1
    // for(var  i = 0; i < tab.length; i++){
    //     console.log(tab[i]);
    
    //     if(tab[i] % 2){
    //         console.log("nie parzysta")
    //     }
    //     else{
    //         console.log("parzyste")
    //     }
    // }
    
    // const mulit = 3
    // const tab2 = tab.map(item => item *mulit)
    // console.log(tab2)
    
    // tab.push(70474)
    // console.log(tab)
    
    // var sum = 0
    // var div = 0
    // tab.forEach(function(item,i){
    //     sum += tab[i]
    //     div = sum / 5
    // })
    // console.log(sum)
    // console.log(div)
    
    // console.log(Math.max(...tab))
    
    // console.log(tab.filter(x => x===0).length)
    
//     const fib = [ 0,1]
//     for(let i = 2; i<100;i++){
//         fib.push(fib[i -1 ] + fib[i-2])
//     }
//     console.log(fib)
//   function Fibonacci(n) {

//     if(n < 2) return n;
//     let f = (1 + Math.sqrt(5)) / 2;
//     return Math.round((f**n - (f - 1)**n) * Math.sqrt(5) / 5);
// }

tab = []

for(i = 1; i < 101; i++) 
tab.push(Fibonacci(i));

console.log(tab)



  