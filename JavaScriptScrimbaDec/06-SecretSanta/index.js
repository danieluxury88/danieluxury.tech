const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

function shuffleArray(arr) {
    return arr
            .map((value) => ({value, sort: Math.random()}))
            .sort((a,b) => a.sort - b.sort)
            .map(({value}) => value);
}

function generateSecretSantaPairs(arr) {
    let shuffled = shuffleArray(arr);
    let pairs = {};

    shuffled.forEach((person, index) => {
        let nextPerson = shuffled[(index+1) % shuffled.length];
        pairs[person] = nextPerson;
    });
    return pairs;
}

console.log(people);
console.log(generateSecretSantaPairs(people))
