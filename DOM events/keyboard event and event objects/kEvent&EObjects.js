const input = document.querySelector('input')
input.addEventListener('keydown', function(e){
    console.log("KEYDOWN")
    console.log(e.key)
    console.log(e.code)
})

window.addEventListener('keydown', function(e) {
    // console.log(e.code)
    // console.log(e.key)
    // we also use swtich case to make it better:-
    switch(e.code){
        case 'ArrowUp':
            console.log("up");
            break;
        case  'ArrowDown':
            console.log("down");
            break;
        case 'ArrowRight':
            console.log("right");
            break;
        case "ArrowLeft":
            console.log("Left");
            break;
        default:
            console.log("Ignored");
            break;        
    }
})