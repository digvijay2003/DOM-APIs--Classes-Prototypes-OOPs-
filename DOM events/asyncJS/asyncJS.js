const fakerequestCallBack = (url, success, failure) => {
    const delay = Math.floor((Math.random()*4500)+500);
    setTimeout (()=> {
        if (delay>4000){
            failure('connection Timeout')
        } 
        else{
            success(`Connection Made ${url}`)
        }
    },delay)
}

fakerequestCallBack('books.com/page1',
            function (response){
            console.log('It Worked for Page 1')
            console.log(response)
        fakerequestCallBack('books.com/page2',
            function (response){
            console.log('It Worked for Page 2')
            console.log(response)
            },
            function (err){
                console.log('Error2 !!',err)
            })          
},function (err){
    console.log('Error1 !!',err)
})