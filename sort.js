

function BubbleSort(arr) {

    let len = arr.length;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < len - 1; j++) {

            let change = false;
            // If the current number is larger than the following
            // swap them
            if (arr[j].suit > arr[j+1].suit ||
                arr[j].suit === arr[j+1].suit &&
                arr[j].value > arr[j+1].value) {
                swap(arr, j, j+1);
                
                let copyArr = arr.slice();
                log.push(copyArr)
                
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
            if (arr[j].suit < arr[min].suit ||
                arr[j].suit === arr[min].suit &&
                arr[j].value < arr[min].value)
                
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


let cards = {
    suits: [1,2,3,4],
    value:[1,2,3,4,5,6,7,8,9,10,11,12,13]
}

const setSuit = num => num === 1 ? "♠" : num === 2 ? "♥" : num === 3 ? "♣" : "♦";
const setValue = num => num === 1 ? "A" : num === 11 ? "J" 
                : num === 12 ? "Q" : num === 13 ? "K" : num;

function ran(length) {
    return Math.floor(Math.random() * length);
}

const repeats = (suit, value) => {
    return arr.find(e => e.suit === suit && e.value === value) === undefined 
            ? false : true;
}

const cardHTML = (value, suit) => {
    let color = suit === 2 || suit === 4 ? "text-danger" : "";

    return `
        <div class="poker d-inline-block border bg-light p-1 rounded-sm ${color}">
            <div class="h-50 d-flex justify-content-between">
                <span>${setValue(value)}</span> 
                <span>${setSuit(suit)}</span>
            </div>
            <div class="rotate align-self-end h-50 d-flex justify-content-between">
                <span>${setValue(value)}</span> 
                <span>${setSuit(suit)}</span>
            </div>
        </div>
`}

const renderLog = () => {
    document.querySelector(".log").innerHTML = log.map(row => 
        "<div class='pb-3'>" 
        + row.map(e => cardHTML(e.value, e.suit)).join("") 
        + "</div>"
        ).join("");
};

function Deal(q) {
    arr = [];

    for (let i=0; i<q; i++) {
        let suit = cards.suits[ran(4)];
        let value = cards.value[ran(13)];

        while (repeats(suit, value)) {
            suit = cards.suits[ran(4)];
            value = cards.value[ran(13)];
        }

        arr.push({
            suit: suit,
            value: value
        })
    }

    document.querySelector(".display").innerHTML = arr.map(e => 
        cardHTML(e.value, e.suit)).join("");

    log = [];
    renderLog();
}

const Sort = (func) => {
    log = [];

    func(arr)

    renderLog();
}

/****************************************************************** */

let log = [];
let arr = []

let input = document.querySelector("input");

input.addEventListener("keyup", e => {
        let v = e.target.value
        let q = v === "" ? "" :
                    isNaN(v) ? 5 :
                        v > 15 ? 15 :
                            v < 1 ? 1 : v;
        input.value = q;
        Deal(q);
    });
