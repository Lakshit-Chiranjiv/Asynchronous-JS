const getaTodo = (callback) => {
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange',()=>{

        if(req.readyState === 4 && req.status === 200)
        {
            const data = JSON.parse(req.responseText);
            callback(undefined,data);
        }
        else if(req.readyState === 4)
            callback('could not find data',undefined);
    });

    //relative path required with respect to the html file
    req.open('GET','./about JSON/sample.json');
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