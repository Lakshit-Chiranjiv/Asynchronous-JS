const req = new XMLHttpRequest();

req.addEventListener('readystatechange',()=>{
    // console.log(req, req.readyState); 
    // this above code logs the request object every time its state changes 
    //there are 4 stages for a request, and at the 4th readyState , the req object is complete.

    if(req.readyState === 4 && req.status === 200)
    {
        console.log(req);
        console.log(req.responseText);
    }
    else if(req.readyState === 4)
        console.log('Could not find data');
})

req.open('GET','https://jsonplaceholder.typicode.com/todos/');
req.send();