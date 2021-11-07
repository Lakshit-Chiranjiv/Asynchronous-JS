const getaTodo = (callback) => {
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange',()=>{

        if(req.readyState === 4 && req.status === 200)
            callback(undefined,req.responseText);
        else if(req.readyState === 4)
            callback('could not find data',undefined);
    });

    req.open('GET','https://jsonplaceholder.typicode.com/todos/5');
    req.send();
};

console.log('step one');
console.log('step two');

// its the convention to pass error first then data
getaTodo((err,data) => {
    console.log('callback function called');
    if(err)
        console.log(err);
    else
        console.log(data);

});

console.log('step three');
console.log('step four');