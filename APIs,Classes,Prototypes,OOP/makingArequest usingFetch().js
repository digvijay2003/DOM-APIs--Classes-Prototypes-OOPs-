// Making a request using fetch() :-
/*fetch("http://swapi.dev/api/people/1/")
 .then(res =>{
    console.log("Resolved",res)
 })
 .catch(e =>{
    console.log("error",e)  
 })

 // now is async fucntion using try and catch :-
const load = async () =>{
    try{
    const res1 =await fetch("http://swapi.dev/api/people/1/");
    console.log('Resolved',res1);
    const res2 =await fetch("http://swapi.dev/api/people/2/");
    console.log('Resolved',res2);
    }
    catch(e){
        console.log("Error",e)
    }
}*/

// now with help of library called axios :-

const load = async (id) =>{
    const res = await axios.get(`http://swapi.dev/api/people/${id}/`)
    console.log(res.data)
}

load(4);
