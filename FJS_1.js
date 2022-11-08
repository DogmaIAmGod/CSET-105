let list = [];
let bought = [];
let unbought = [];
let idCount = 0;

function addItem() {
    let x = prompt("Add Item to List");
    list.push(x);
    unbought.push(x)
    console.log(list)
    let y = document.createElement("li");
    y.innerHTML = x;
    y.id = idName();
    y.addEventListener("click", function () {
        let clicked = document.getElementById(y.id);
        if (clicked.style.textDecoration == "line-through") {
            clicked.style.textDecoration = "none"
            if (bought.includes(x) === true) {
                unbought.push(x)
                let arrayRemove = bought.indexOf(x)
                bought.splice(arrayRemove, 1)
                console.log(unbought)
            }
        }
        else {
            clicked.style.textDecoration = "line-through"
            if (unbought.includes(x) === true) {
                bought.push(x)
                let arrayRemove = unbought.indexOf(x)
                unbought.splice(arrayRemove, 1)
                console.log(bought)
            }

        }

    })
    document.getElementById("ul").appendChild(y);
}

function removeItem() {
    let x = prompt("Type in Name of Item to Remove");
    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
        let y = document.getElementsByTagName("li")[i];
        if (y.innerHTML.toLowerCase() === x.toLowerCase()) {
            y.remove();
        }
    }
    let arrayRemove = list.indexOf(x)
    list.splice(arrayRemove, 1)
    if (unbought.includes(x) === true) {
        let unboughtRemove = unbought.indexOf(x)
        unbought.splice(unboughtRemove, 1)
    }
    else {
        let boughtRemove = bought.indexOf(x)
        bought.splice(boughtRemove, 1)
    }
}

function idName() {
    idCount += 1
    let x = "li" + idCount
    return x
}

function boughtItems() {
    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
        let x = document.getElementsByTagName("li")[i]
        if (document.getElementById("bought_items").checked) {
            if (x.style.textDecoration !== "line-through") {
                x.style.visibility = "hidden"
            }
        }
        else {
            x.style.visibility = "visible"
        }
        
    }
}

function itemsLeft() {
    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
        let x = document.getElementsByTagName("li")[i]
        if (document.getElementById("items_left").checked) {
            if (x.style.textDecoration === "line-through") {
                x.style.visibility = "hidden"
            }
        }
        else {
            x.style.visibility = "visible"
        }
        
    }
}