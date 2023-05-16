const jokes = document.querySelector("#jokes");
const button = document.querySelector('button');

const newkjoke = async () =>{
    const jokestext= await getjokes();
    const newLI = document.createElement('LI');
    newLI.append(jokestext);
    jokes.append(newLI)
}

const getjokes = async ()=>{
    try{
        const config = {headers :{Accept :'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com",config);
        return res.data.joke;
    }
    catch(e){
        return "Sorry No jokes availabe right now"
    }
}

button.addEventListener('click',newkjoke)