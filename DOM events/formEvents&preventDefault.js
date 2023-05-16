/*const form = document.querySelector("#xyz");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("form is submited !!")
})*/

// adding input of text that we entered into an Unordered List and clearing input :- (appending)
const form = document.querySelector("#xyz");
const input = document.querySelector("#sportscar");
const list = document.querySelector("#car");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const carname = input.value;
    const newlist = document.createElement("li");
    newlist.innerText = carname;
    list.append(newlist);
    input.value = "";
})

// Event Delegation (for removinf LI of Ul/Ol):-
list.addEventListener('click', function (e){
    e.target.nodeName === 'LI' && e.target.remove();
})