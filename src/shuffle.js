function shuffle(input_array) {
    let ctr = input_array.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = input_array[ctr];
        input_array[ctr] = input_array[index];
        input_array[index] = temp;
    }
    return input_array;
}

export default shuffle;