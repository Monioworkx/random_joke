const joke1 = "What do elves learn in school? The elf-abet";
const joke2 = "What do you call a bear with no teeth? A gummy bear!";
const joke3 = "What do you call cheese that's not yours? Nacho cheese!"

const jokesArr = [joke1, joke2, joke3];

const getRandomJoke = (arr) => {
    let joke = arr[Math.floor(Math.random()*arr.length)];
    return joke;
};

console.log(getRandomJoke(jokesArr));

