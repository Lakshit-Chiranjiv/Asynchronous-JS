

const getGames = async() => {

    const response = await fetch('./async-await/gamessss.json');
    if(response.status === 404)
        throw new Error('404 error, not found resource');
    const data = await response.json();

    return data;
};


getGames().then((data) => console.log(data)).catch((err) => console.log(err));


// putting async keyword in front of parenthesis of any function makes the function asynchronous
// now the function returns a promise and has to be tackled using .then and .catch
// inside an async function we use the await keyword, it simply waits for the task to be done 
// and returns whatever the result is normally to a variable 
// then the result can be further used

// here the 1st and 2nd await returns a promise the respective variables 
//await doesn't blocks code and makes the code look a lot simpler