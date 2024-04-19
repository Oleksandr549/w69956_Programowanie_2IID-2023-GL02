


const result = document.querySelector("#omrs-input-helper"),
result2 = document.querySelector("#omrs-input-helper2"),
 zd = document.querySelector("#inputzd1"),
 zd5 = document.querySelector("#zd5"),
 cod = document.querySelector("#coding"),
 popup = document.querySelector(".cubes");

function zd1(n) {
   if(n > 1){
     return n * zd1(n-1);
   }else{
    return 1
   }
}
let tabls 
function table(){
 
 
}



cod.addEventListener('click', () => {
  const r = (Math.round(Math.random()*255))
  const g = (Math.round(Math.random()*255))
  const b = (Math.round(Math.random()*255))
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b}, 0.4)`
  popup.classList.toggle("show");
  result.innerHTML = (`!${zd.value} = ${zd1(zd.value)}`)
if(zd5.value != ''){
  if(tabls != undefined){
    tabls = zd5.value + "<br>" + tabls
    zd5.value = null
    result2.innerHTML = (`<p> ${tabls} </p>` )
  }else{
    tabls = zd5.value 
    result2.innerHTML = (`<p>${tabls}</p>` )
    zd5.value = null
  }
   
}
  

})


