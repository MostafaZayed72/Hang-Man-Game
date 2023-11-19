//Letters
const letters = "abcdefghijklmnopqrstuvwxyz";
//Get Array From Letters
let lettersArray = Array.from(letters);
//Select Letters Container
let lettersContainer = document.querySelector(".letters");
//Generate Letters
lettersArray.forEach(letter => {
//Create Span
let span = document.createElement("span");
// Create Letter Text Node
let theLetter = document.createTextNode(letter);
//Append The Letter To Span
span.appendChild(theLetter);
//Add Class On Span
span.className='letter-box';
//Append Span To Letter Container
lettersContainer.appendChild(span);
});
//Object Of Words + Categories
const words = {
    programming: ["php","javascript","go","scala","fortran","r","mysql","python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
//Get Random Property
let allKeys= Object.keys(words);
//Random Number Depend On Keys Length
let randomProNumber = Math.floor(Math.random() * allKeys.length);
//Category
let randomProName = allKeys[randomProNumber];
//Category Words
let randomProValue = words[randomProName];
//Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomProValue.length);
let randomValueValue = randomProValue[randomValueNumber];
//Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomProName;
//Select Letters Guess Container
let lettersGuessContainer = document.querySelector(".letters-guess");
//Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);
//Create Spans Depend On Word
lettersAndSpace.forEach(letter => {
    //Create Empty Span
    let emptySpan = document.createElement("span");
    //If Letter Is Space
    if (letter === " ") {
        emptySpan.className = "with-space";
    }
    //Append Span To The Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan);
});
// Select Guess Span
let guessSpans = document.querySelectorAll(".letters-guess span");
//Set Wrong Attempts 
let wrongAttempts = 0;
//Set The Draw Element
let theDraw =document.querySelector(".hangman-draw");
//Handle Clicking On Letters
document.addEventListener("click", (e) => {
    //Set Status 
let theStatus = false;
    if(e.target.className === "letter-box") {
        e.target.classList.add("clicked");
        //Get Clicked Letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();
// The Chosen Word
let theChosenWord = Array.from(randomValueValue.toLowerCase());
theChosenWord.forEach((wordLetter, wordIndex) => {
    //If The Clicked Letter = One Of Chosen Word Letter
    if (theClickedLetter === wordLetter) {
        //Set Status To True
        theStatus = true;
//Loop On All Guess Spans
guessSpans.forEach((span, spanIndex) => {
if(wordIndex === spanIndex) {
    span.innerHTML = theClickedLetter;
}

})
    }
});
//Outside Loop
//If Letter Is Wrong
if (theStatus !== true){
    //Increase Wrong Attempts
    wrongAttempts ++;

    //Add Class Wrong On The Draw
    theDraw.classList.add(`wrong-${wrongAttempts}`);
    //Play Fail Sound
    document.getElementById("fail").play();
    if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
    }
}
else {
    //Play Success Sound
    document.getElementById("success").play();
}
}
});

//End Game Functions
function endGame() {
    //Create Popup Div
    let div =document.createElement("div");
//Create Text
let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);
//Append Text To Div
div.appendChild(divText);
//Add Class On Div
div.className = "popup";
//Append To Body
document.body.appendChild(div);
}







//End Game Success

// document.addEventListener("click", (e){
//     if (theStatus === true){
//         guessSpans.push(e);
//     }
// })

if (lettersAndSpace === guessSpans) {
    endGameSuccess();
}

function endGameSuccess() {
    document.addEventListener("click", (e) => {

    })
    //Create Popup Div
    let div =document.createElement("div");
//Create Text
let divText = document.createTextNode(`Bravo, The Number Of Wrong Attempts Is ${wrongAttempts}`);
//Append Text To Div
div.appendChild(divText);
//Add Class On Div
div.className = "bravo";
//Append To Body
document.body.appendChild(div);
}
console.log(lettersAndSpace);
console.log(guessSpans);



