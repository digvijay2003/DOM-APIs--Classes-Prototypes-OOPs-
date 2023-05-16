// Example 1 :-

/*const fakerequestpromise = (URl) =>{
    return  new Promise((resolve,reject) =>{
        const rand = Math.random();
        setTimeout(()=>{
            if (rand > 0.7){
                resolve('Your Fake data is here ')
            } 
            else{
                reject('request Error')
            }
        },1000)
    })
}

fakerequestpromise('books.com/Page1')
 .then((data) =>{
    console.log('Done With The Request ')
    console.log('Your Data is here :',data)
 })
  .catch((err) =>{
    console.log('Oh!! No',err)
  }) 
// Example 2 :-
const delayedcolorChange = (newcolor,delay) =>{
    return new Promise((_resolve,_reject) =>{
        setTimeout(() =>{
        document.body.style.backgroundColor = newcolor;
        _resolve();
    },delay)
    })
} 

delayedcolorChange('red',1000)
 .then(()=> delayedcolorChange('yellow',1000)
)
 .then(()=> delayedcolorChange('orange',1000)
)
 .then(()=> delayedcolorChange('violet',1000)
)
 .then(()=> delayedcolorChange('green',1000)
)


// using ASYNC keyword with fucntion (which menas every function is resolved when we use the async keyword ) 

// Ex 1:-
const sing = async () =>{
    throw 'error made'
    return "Hi there"
}

sing()
 .then((data) =>{ console.log("Promise Resolved",data)})
 .catch((err) =>{ console.log('Reject',err)})

// Ex 2:-
const login = async (username,password) =>{
    if(!username || !password) throw 'Missing, username or password'
    if (username === 'Mygoal123' && password === 'Digu')
    return "Welcome Digu"
    throw "Invalid Password"
}

login(prompt(''),prompt(''))
 .then((data) => console.log('Logged In :',data))
 .catch((err) => console.log('error :',err)) */

// await keyword (it is used inside async function and works only if first promise is resolved and then second and so on) 

const delayedcolorChange = (newcolor,delay) =>{
    return new Promise((_resolve,_reject) =>{
        setTimeout(() =>{
        document.body.style.backgroundColor = newcolor;
        _resolve();
    },delay)
    })
} 

async function rainbow (){
    await delayedcolorChange('red',1000);
    await delayedcolorChange('orange',1000)
    await delayedcolorChange('yellow',1000)
    await delayedcolorChange('violet',1000)
}

// Handling with Errors in Async fucntion using try and catch :-

const fakerequestpromise = (URl) =>{
    return  new Promise((resolve,reject) =>{
        const rand = Math.random();
        setTimeout(()=>{
            if (rand > 0.7){
                resolve('Your Fake data is here ')
            } 
            else{
                reject('request Error')
            }
        },1000)
    })
}

async function request(){
    try{
        let data1 = await fakerequestpromise('page/1');
        console.log(data1);
        let data2 = await fakerequestpromise('page/2');
        console.log(data2);
    }
    catch(e){
        console.log('caught an ERROR')
        console.log('Your ERROR :',e)
    }
}