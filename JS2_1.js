function multiTable() {
    clearPs();
    let x = Number(prompt("Enter a number to see the multiplication table"));
    let y = Number(prompt("Enter how many places you want to see"));
    for (let i = 1; i <= y; i++) {
        let newP = document.createElement("p");
        //newP.style.display = "inline"; 
        let textNode = document.createTextNode(i + " * " + x + " = " + i * x)
        newP.appendChild(textNode);
        document.getElementById("firstP").appendChild(newP);

    }
}

function clearPs() {
    while (document.getElementsByTagName("p").length > 1) {
        let x = document.getElementsByTagName("p")[document.getElementsByTagName("p").length - 1]
        x.remove();
    }
}

