const BTN_COUNT = document.querySelectorAll(".drum").length;

for (let i = 0; i < BTN_COUNT; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {  
        let btnText = this.innerText;
        makeSound(btnText)
    })
}

document.addEventListener("keydown", e => makeSound(e.key) );


function makeSound(key) {
    switch (key) {
        case "w":
            const snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "a":
            const kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            const tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            const tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            const tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            const tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            const cymbal = new Audio("./sounds/crash.mp3");
            cymbal.play();
            break;
        default:
            break;
    }
}