function scream (){
    alert('AAAAAAhhhhhhh !!!')
}

function hello(){
    alert('PLEASE LOGIN AGAIN !')
}

////////////////////////////////////////////////////////////
document.querySelector("#f2").onclick = () => { console.log("Hey You just Clicked")  }

 // addEventListener :-

/*const btn3 = document.querySelector("v3");
btn3.addEventListener('click', () => {alert('Please Login !')}) */

function f1() 
{
    console.log("hello");
}
function f2() 
{
    console.log("goodbye");
}

const but1 = document.querySelector("#hello")
const but2 = document.querySelector("#goodbye")

but1.addEventListener('click',f1),
but2.addEventListener('click',f2)

function randomcolor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}
const randombtn = document.querySelector("#random")
randombtn.addEventListener('click', function(){
    const newcolor = randomcolor();
    document.body.style.backgroundColor = newcolor;
    document.style.color = newcolor;  
})

///// This keyword /////

const h1s = document.querySelectorAll("#same")

function colorsize(){
    this.style.backgroundColor = randomcolor();  
}
for (let h1 of h1s){
    h1.addEventListener('click',colorsize())
}