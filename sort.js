

// let div = document.querySelector(".display");


let cards = [
     1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 40, 51, 52, 53,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73
];

let max = cards.length;

let deal = Deal(5);

// div.innerHTML = deal + '<br>';

// div.innerHTML += BubbleSort(deal)+'<br>';


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
                swap(arr, j, j+1);
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

/************************************************* */

function ran(length) {
    return Math.floor(Math.random() * length);
}

const cardHTML = (value, suit) => {
    return `
    <span class="border p-2">${value} ${suit}</span>
`}



let log = [];

function bubbleSort(array) {
    for(wall=array.length-1; wall>0; wall--) {
        for(x=0;x<wall;x++) {
                if(
                    array[x].suit > array[x+1].suit ||
                    array[x].suit === array[x+1].suit &&
                    array[x].value > array[x+1].value
                ) {
                    let aux = array[x];
                    array[x]=array[x+1];
                    array[x+1] = aux;
                    let copyArr = array.slice();
                    log.push(copyArr)
                }
        }
    }
}

let cards = {
    suits: [1,2,3,4],
    value:[1,2,3,4,5,6,7,8,9,10,11,12,13]
}

let arr = []

for (let i=0; i<20; i++)
    arr.push({
        suit: cards.suits[ran(4)],
        value: cards.value[ran(13)]
    })

bubbleSort(arr)

document.querySelector("#display").innerHTML = arr.map(e => {
    return cardHTML(e.value, e.suit);
}).join("");
