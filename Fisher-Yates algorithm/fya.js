// Fisher-Yates algorithm (shuffle an array efficiently)
// useful when trying to achieve randomization e.g in games

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'K', 'Q'];

shuffle(cards);

// dedicated function to shuffle the cards
function shuffle(array){
    // loop through the array
    for(let i = array.length - 1; i > 0; i--){
        // generate random number within the range
        const random = Math.floor(Math.random() * (i + 1));

        // use destructuring to swap elemets of the array
        [array[i], array[random]] =[ array[random], random[i]];
        
    }
}

