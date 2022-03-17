const Interval = document.querySelector('#interval')
const UpCounter = document.querySelector('.up-counter')
const DownCounter = document.querySelector('.down-counter')

let Count = 0
Interval.defaultValue = 1
let IntervalValue = Number(Interval.value)// Converts value to a number, has to be done by default or + function wont work
UpdateCounter()

UpCounter.addEventListener('click', CountUp);

DownCounter.addEventListener('click', function() {
    Count -= IntervalValue
    console.log(Count);
    UpdateCounter();
},)

Interval.onkeyup = function() {
    if(IntervalValue < -1) {
        alert("Must be a positive number")
        IntervalValue = Number(1)

    }
    else {
        IntervalValue = Number(this.value)

    }
}

function UpdateCounter() {
    if(Count < 0) {
        Count = 0
    }
    GetCounter = document.querySelector('.counter') 
    GetCounter.innerHTML = Count
}

function CountUp() {
    Count += IntervalValue
    console.log(Count);
    UpdateCounter();
}
console.log(IntervalValue)