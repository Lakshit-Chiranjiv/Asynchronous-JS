//fetch api returns a promise so we can use .then and .catch here 
//ans also in case if the resource is not found and the status is 404,still it resolves the promise 
//instead of rejecting the promise, so for that we need to put a manual check

//here the .json() method parses the data into json format and it also returns a promise with the json as data
//so we need to use another .then() to work with the data provided as json by the method

//when everything is correct
fetch('./fetch api/mobiles.json').then((response) => {
    console.log('promise resolved : ',response);
    return response.json();
}).then((data) => console.log(data))
  .catch((err) => {
    console.log('promise rejected : ',err);
});


