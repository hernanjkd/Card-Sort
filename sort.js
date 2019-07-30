


function BubbleSort(arr) {

    let len = arr.length;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < len - 1; j++) {

            let change = false;
            // If the current number is larger than the following
            // swap them
            if(
                array[x].suit > array[x+1].suit ||
                array[x].suit === array[x+1].suit &&
                array[x].value > array[x+1].value
            )
            if (arr[j].suit > arr[j+1].suit) {  
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


const setSuit = num => num === 1 ? "♠" : num === 2 ? "♥" : num === 3 ? "♣" : "♦";
const setValue = num => num === 1 ? "A" : num === 11 ? "J" 
                : num === 12 ? "Q" : num === 13 ? "K" : num;

function ran(length) {
    return Math.floor(Math.random() * length);
}

const cardHTML = (value, suit) => {
    let color = suit === 2 || suit === 4 ? "text-danger" : "";

    return `
    <span class="border p-2 ${color}">${setValue(value)} ${setSuit(suit)}</span>
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

document.querySelector(".display").innerHTML = arr.map(e => {
    return cardHTML(e.value, e.suit);
}).join("");

