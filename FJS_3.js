let winnings = [0, 500, 1000, 2000, 3000, 5000, 7000, 10000, 20000, 30000, 50000, 100000, 250000, 500000, 1000000]
let winningscounter = 0;
let questionNum = 0;
let value;
let score = 0;
let questions = [
    {
        "Question": "How old is James?",
        "A1": "20",
        "A2": "21",
        "A3": "22",
        "A4": "23"
    },
    {
        "Question": "What is James' Favorite Food?",
        "A1": "Sausage",
        "A2": "Spaghetti",
        "A3": "Chicken",
        "A4": "Ramen Noodles"
    },
    {
        "Question": "What is James' Favorite Book?",
        "A1": "Gospel of the Flying Spaghetti Monster",
        "A2": "Communist Manifesto",
        "A3": "The Satanic Bible",
        "A4": "The Art of War"
    },
    {
        "Question": "What is 6 * 3?",
        "A1": "18",
        "A2": "Chickenbutt",
        "A3": "21",
        "A4": "You can do math?"
    },
    {
        "Question": "What is James' Favorite Meal?",
        "A1": "Lunch",
        "A2": "Breakfast",
        "A3": "Dinner",
        "A4": "Brunch"
    },
]
let order = randomArr();
function rND() {
    return Math.floor(Math.random() * questions.length)
}

function randomArr() {
    let arr = [];
    do {
        let x = rND();
        if (!arr.includes(x)) {
            arr.push(x)
        }
    } while (arr.length < questions.length)
    return arr;
}

function btnShift(x) {
    z = document.getElementsByTagName("button")[1]
    if (x === "button") {
        z.disabled = true;
        for (let i = 0; i < 4; i++) {
            let reset = document.getElementsByTagName("input")[i]
            reset.checked = false;
        }
    }
    else {
        z.disabled = false;
        value = x
    }
}

function checkCorrect() {
    let x;
    if (questionNum + 1 === questions.length) {
        for (let i = 0; i < 4; i++) {
            x = document.getElementsByTagName("input")[i]
            x.disabled = "true"
        }
        x = document.getElementsByTagName("button")[0]
        x.style.visibility = "visible"
        x = document.getElementsByTagName("h5")[0]
        x.innerHTML = "You Won! You get: $" + winnings[winningscounter] + "!"
    }
    else {
        if (order[questionNum] === 0 && value === "a2") {
            score += 1
            winningscounter += 1
            x = document.getElementsByTagName("h5")[0]
            x.innerHTML = "Current Winnings: $" + winnings[winningscounter]
            questionNum += 1
        }
        else if (order[questionNum] === 1 && value === "a4") {
            score += 1
            winningscounter += 1
            x = document.getElementsByTagName("h5")[0]
            x.innerHTML = "Current Winnings: $" + winnings[winningscounter]
            questionNum += 1
        }
        else if (order[questionNum] === 2 && value === "a1") {
            score += 1
            winningscounter += 1
            x = document.getElementsByTagName("h5")[0]
            x.innerHTML = "Current Winnings: $" + winnings[winningscounter]
            questionNum += 1
        }
        else if (order[questionNum] === 3 && value === "a4") {
            score += 1
            winningscounter += 1
            x = document.getElementsByTagName("h5")[0]
            x.innerHTML = "Current Winnings: $" + winnings[winningscounter]
            questionNum += 1
        }
        else if (order[questionNum] === 4 && value === "a2") {
            score += 1
            winningscounter += 1
            x = document.getElementsByTagName("h5")[0]
            x.innerHTML = "Current Winnings: $" + winnings[winningscounter]
            questionNum += 1

        }
        else {
            for (let i = 0; i < 4; i++) {
                x = document.getElementsByTagName("input")[i]
                x.disabled = "true"
            }
            x = document.getElementsByTagName("button")[0]
            x.style.visibility = "visible"
            x = document.getElementsByTagName("h5")[0]
            x.innerHTML = "Winnings: $" + winnings[winningscounter]
        }
        quiz()
    }
    
}

function quiz() {
    let x = document.getElementsByTagName("h1")[0]
    x.innerHTML = questions[order[questionNum]].Question
    x = document.getElementsByTagName("label")[0]
    x.innerHTML = questions[order[questionNum]].A1
    x = document.getElementsByTagName("label")[1]
    x.innerHTML = questions[order[questionNum]].A2
    x = document.getElementsByTagName("label")[2]
    x.innerHTML = questions[order[questionNum]].A3
    x = document.getElementsByTagName("label")[3]
    x.innerHTML = questions[order[questionNum]].A4

}