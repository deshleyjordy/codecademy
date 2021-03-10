// Generate a random gamer name and a rival name

// Store all name components 
const adjectives = ['Super', 'Golden', 'Silent', 'Dark', 'Sweet', 'Holy', 'Fresh', 'Icy', 'Fallen', 'Foul', 'Shiny', 'Dead', 'Bright', 'Fiery', 'Age Of', 'God Of', 'Space', 'Silver', 'Sniper', 'Wonder', 'Funny', 'Old', 'Mystery', 'Metal', 'Creepy'];
const nouns = ['Gamer', 'Souls', 'Dragon', 'Commander', 'Ninja', 'Evil', 'Dumbledore', 'Warfare', 'Hero', 'Legend', 'Hunter', 'Spider'];

// Get a random element from an array
const randomElem = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Generate a random name, given two arrays as arguments
const generateName = (arr1, arr2) => {
    return `${randomElem(arr1)} ${randomElem(arr2)}`;
}

// Create a gamer name and rival name
let gamerName = generateName(adjectives, nouns);
let rivalName = generateName(adjectives, nouns);

// Make sure names are not the same
do {
    rivalName = generateName(adjectives, nouns);
} while (gamerName === rivalName);

// Return a message including the random names
const message = `Hej there, nice to meet you ${gamerName}. You are the chosen one and you have to save our world from ${rivalName}.`

// Console log the names
console.log(message);