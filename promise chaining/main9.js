const getTechData = (jsonfilename) => {
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




getTechData('languages.json')
.then((data) => {
    console.log('1st Promise resolved :',data);
    getTechData('frameworks.json')
    .then((data) => {
        console.log('2nd Promise resolved :',data);
        getTechData('laptops.json')
        .then((data) => {
            console.log('3rd Promise resolved :',data);
            getTechData('os.json')
            .then((data) => {
                console.log('4th Promise resolved :',data);
            })
        })
    })
})
.catch((err) => console.log('Promise rejected :',err));