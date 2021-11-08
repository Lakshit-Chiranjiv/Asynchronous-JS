const getData = () => {
    
    return new Promise((resolve,reject) => {
        // fetching work
        const fetch_status_success = false;
        
        if(fetch_status_success)
            resolve('some data after succesfull fetch is passed');
        else
            reject('some error after fetch failure is passed');
    });
};

getData().then((data) => console.log(data),(err) => console.log(err));


getData().then((data) => console.log(data)).catch((err) => console.log(err));