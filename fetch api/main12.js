//here the 1st promise of fetch will be resolved and when it goes to the 2nd promise of .json() 
//then it will find that the given file doesn't exist so it tells us that the json is wrong
//this is because it couldn't find that resource
//we need to put a manual check for the 404 status

//so we throw our own error and throwing a error takes the control to the catch block directly and rejects the promise there itself



//when resource passed does not exists
fetch('./fetch api/mobile.json').then((response) => {
    console.log('promise resolved : ',response);
    if(response.status === 404)
    {
        throw new Error('could not find the specified resource, 404 error');
    }
    return response.json();
}).then((data) => console.log(data))
  .catch((err) => {
    console.log('promise rejected : ',err);
});