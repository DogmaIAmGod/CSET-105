let array = [];
function genColor() {
    let x = Math.floor(Math.random() * (4 - 1)) + 1
    if (x === 1 ) {
        return "red"
    }
    else if (x===2) {
        return "blue"
    }
    else {
        return "green"
    }
}

function generateBtns() {
    for (let i = 0; i < 10; i++) {
        let hold = genColor()
        let newBtn = document.createElement("button");
        newBtn.style.width = "10%"
        newBtn.style.height = "4cm"
        newBtn.style.backgroundColor = hold
        array.push(hold)
        document.body.appendChild(newBtn)
    }
}


function getColor(x){
if (x === "red") {
    for (let i = 0; i < 10; i++) {
       let hold = document.getElementsByTagName("button")[i];
       hold.style.backgroundColor = "red"
    }
}
else if (x==="green") {
    for (let i = 0; i < 10; i++) {
        let hold = document.getElementsByTagName("button")[i];
        hold.style.backgroundColor = "green"
     }
}
else if (x==="blue") {
    for (let i = 0; i < 10; i++) {
        let hold = document.getElementsByTagName("button")[i];
        hold.style.backgroundColor = "blue"
     }
}
else if (x==="random") {
    for (let i = 0; i < 10; i++) {
        let hold = document.getElementsByTagName("button")[i];
        hold.style.backgroundColor = genColor()
     }
}
else {
    for (let i = 0; i < 10; i++) {
        let hold = document.getElementsByTagName("button")[i];
        hold.style.backgroundColor = array[i]
        console.log("x: " + x)
     }
}
}

    
    
