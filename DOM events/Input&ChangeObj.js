const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', (e)=> {
    h1.innerText = ` Welcome ${input.value}`;
})