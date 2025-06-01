let container = document.querySelector(".tracker section")
let habits = [];


document.querySelector(".start").onclick = ()=>{
    init()
}
function init(){
    let number;
    do{
        let inp = prompt("Enter the number of habits:");
        number = Number(inp);
    }while(isNaN(number))
    number = Math.ceil(number);


for(i=0; i<number; i++){
    let hab = prompt(`whats habit number ${i+1}`);
    habits.push(hab);
}
habits = habits.map((name)=>{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
})

for(i=0; i<habits.length; i++){
        let ht = `<div class="grid">
          <h3>${habits[i]}</h3>
          <div class="days">
              <div class="ball"><span></span></div>
              <div class="ball"><span></span></div>
              <div class="ball"><span></span></div>
              <div class="ball"><span></span></div>
              <div class="ball"><span></span></div>
              <div class="ball"><span></span></div>
              <div class="ball"><span></span></div>
          </div>
        </div>`
    container.innerHTML+= ht;
}
let quote = prompt("whats your quote!!");

document.querySelector(".quote").innerHTML = quote.toUpperCase();

setTimeout(window.print(), 5000);
}

