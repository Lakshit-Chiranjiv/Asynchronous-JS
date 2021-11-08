const getTechData2 = (jsonfilename) => {
    return new Promise((resolve,reject) => {
        const req = new XMLHttpRequest();

        req.addEventListener('readystatechange',()=>{

            if(req.readyState === 4 && req.status === 200)
            {
                const data = JSON.parse(req.responseText);
                resolve(data);
            }
            else if(req.readyState === 4)
                reject('error while fetching');
        });

        //relative path required with respect to the html file
        req.open('GET','./promise chaining/'+jsonfilename);
        req.send();
    });
};



getTechData2('languages.json').then((data) => {
    console.log('1st Promise resolved :',data);
    return getTechData2('frameworks.json');
}).then((data) => {
    console.log('2nd Promise resolved :',data);
    return getTechData2('laptops.json');
}).then((data) => {
    console.log('3rd Promise resolved :',data);
    return getTechData2('os.json');
}).then((data) => {
    console.log('4th Promise resolved :',data);
}).catch((err) => {
    console.log('Promise rejected :',err);
});



