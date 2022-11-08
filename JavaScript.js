//let input = prompt("What number would you like to have?")
//console.log(input)
// function getNumber() {
//     let x = window.prompt("Please enter a number to show the multiplication table of");
//     return x;
//}
let h1_arr = document.getElementsByTagName("h1");

h1_arr[0].innerHTML = "";

h1_arr[1].innerHTML = "This is an HTML page";

document.getElementById("3Head").innerHTML = "Empty";
document.getElementsByClassName("2Para") [0].innerHTML = "Can I just go to sleep?"

let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

function replaceImages() {
let images = document.body.getElementsByTagName("img");
for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];
    if (image.alt) {
        let text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text,image);
    }
}


}