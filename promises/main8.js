const getFoodMenu = (jsonfilename) => {
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
        req.open('GET','./promisesf/'+jsonfilename);
        req.send();
    });
};

getFoodMenu('food.json')
.then((data) => console.log('Promise resolved :',data))
.catch((err) => console.log('Promise rejected :',err));