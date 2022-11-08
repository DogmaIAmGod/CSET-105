let bot = 0;
let you = 0;
let tie = 0;
let a = 0;
let w = document.getElementById("textarea")
w.innerHTML = ""
function rND() {
    return Math.floor(Math.random() * (4 - 1)) + 1;
}
function rockPaperScissors(input){
let x = rND()
let y;
let newerH1 = document.getElementsByClassName("change")[2]
if (x === 1) {
    y = "Scissors"
    if (input === "Rock") {
        newerH1.innerHTML = "You won!"
        you += 1
    }
    else if (input === "Paper") {
        newerH1.innerHTML = "You lose!"
        bot += 1
    }
    else {
        newerH1.innerHTML = "Its a tie!"
        tie += 1
    }
   }
   else if (x === 2) {
       y = "Rock"
       if (input === "Rock") {
        newerH1.innerHTML = "Its a tie!"
        tie += 1
    }
    else if (input === "Paper") {
        newerH1.innerHTML = "You won!"
        you += 1
    }
    else {
        newerH1.innerHTML = "You lose!"
        bot += 1
    }
   }
   else {
       y = "Paper"
       if (input === "Rock") {
        newerH1.innerHTML = "You lose!"
        bot += 1
    }
    else if (input === "Paper") {
        newerH1.innerHTML = "Its a tie!"
        tie += 1
    }
    else {
        newerH1.innerHTML = "You won!"
        you += 1
    }
   }
   a += 1

w.innerHTML += a + ") You - " + input + " || Computer - " + y + "\n"
let newestH1 = document.getElementsByClassName("change")[0]
newestH1.innerHTML = "Score: You - " +  you + " |  Bot  - " + bot + " | Ties - " + tie

}