

let div = document.querySelector(".display");


let cards = [
     1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52
];

let max = cards.length;

let deal = Deal(5);

div.innerHTML = deal + '<br>';

div.innerHTML += BubbleSort(deal)+'<br>';


// Takes in the number of cards, returns an array
function Deal(q) {

    let arr = [];

    // Quantity of cards can't exceed the total number of cards
    if (q > max) 
        q = max;

    // Quantity will have a minimum of 2 cards
    if (q < 2)
        q = 2;

    // Until n equals 0, loop n times
    while (q) {
        
        // Pick random card
        let temp = pickRandom(max);
        max--;

        // Put card in deal deck
        arr.push( cards[temp] );

        // Remove card from deck
        cards.splice(temp, 1);

        q--;
    }
    return arr;
}


function pickRandom(n) {
    return Math.floor( Math.random() * n);
}




function BubbleSort(arr) {

    let len = arr.length;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < len - 1; j++) {

            let change = false;
            // If the current number is larger than the following
            // swap them
            if (arr[j] > arr[j+1]) {   

                /**************************
                 *  I can't use the swap function instead of what's exactly in the swap
                 *  But the swap function works in the SelectorSort
                 **************************/

                 swap(arr, arr[j], arr[j+1]);

                // let temp = arr[i];
                // arr[i] = arr[j];
                // arr[j] = temp;
                change = true;
            }
            // Set the wall.. if the last 2 items are already in place,
            // don't check for them
            if (j === len-2 && !change)
                len -= 2;
        }
    }
    return arr;
}



function SelectionSort(arr) {
    let len = arr.length;
    let min;

    for (i = 0; i < len; i++) {
        min = i;

        // Check the rest of the array
        for (j = i + 1; j < len; j++)
            if (arr[j] < arr[min])
                min = j;

        if (i != min)
            swap(arr, i, min);
    }
    return arr;
}



function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

