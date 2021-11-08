
const getGames = async() => {

    const response = await fetch('./async-await/games.json');
    const data = await response.json();

    return data;
};

console.log('step one');
console.log('step two');

getGames().then((data) => console.log(data)).catch((err) => console.log(err));

console.log('step three');
console.log('step four');