const getFileData = (jsonfilename,callback) => {
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
    req.open('GET','./callback hell/json-files/'+jsonfilename);
    req.send();
};


// its the convention to pass error first then data
getFileData('sample1.json',(err,data) => {
    console.log('callback function called');
    if(err)
        console.log(err);
    else
        console.log(data);

    getFileData('sample2.json',(err,data) => {
        console.log('callback function called');
        if(err)
            console.log(err);
        else
            console.log(data);

        getFileData('sample3.json',(err,data) => {
            console.log('callback function called');
            if(err)
                console.log(err);
            else
                console.log(data);

            getFileData('sample4.json',(err,data) => {
                console.log('callback function called');
                if(err)
                    console.log(err);
                else
                    console.log(data);
            });
        });
    });
});
