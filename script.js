document.getElementById("imgBox").style.display = "None"
document.getElementById("inputBox").style.display = "none"
document.getElementById("myAudio").style.display = "none"
document.getElementById("imgBox1").style.display = "none"
let sayingHello = document.getElementById("paragraph")
let userName
let inputElement
let inputAge
let userAge
let firstOption


/**
 * Starting the game by deleting the startbutton and creating input and submitbuttons.
 */
function gameStarter() {
    sayingHello.innerHTML = "Hej. Vad heter du?"
    document.getElementById("inputBox").style.display = "block"
    document.getElementById("btn").style.display = "None"

    inputElement = document.createElement("input")
    inputElement.setAttribute("placeholder", "Ditt namn")
    document.getElementById("inputBox").appendChild(inputElement)

    let submit = document.createElement("button")
    submit.innerHTML = "OK"
    document.getElementById("submitBox").appendChild(submit)

    submit.addEventListener("click", welcome)

}
 /**
  * Welcoming the user by taking the value of the input field and write it out in the paragraph
  */

function welcome() {
    userName = inputElement.value
    sayingHello.innerHTML = "Välkommen till mördarens nummerspelet, " + userName + "!"

    document.getElementById("inputBox").style.display = "none"
    document.getElementById("submitBox").style.display = "none"

    setTimeout(askingForAge, 4000)
}

/**
 * Asking the users age and saving the input, creating inputfield and submitbox
 */

function askingForAge() {
    document.getElementById("btn").style.display = "None"
    sayingHello.innerHTML = "Hur gammal är du?"

    inputAge = document.createElement("input")
    inputAge.setAttribute("placeholder", "Skriv din ålder")
    document.getElementById("inputBox1").appendChild(inputAge)

    let submit = document.createElement("button")
    submit.innerHTML = "OK"
    document.getElementById("submitBox1").appendChild(submit)

    submit.addEventListener("click", oldEnough)
}

/**
 * Checking if the userinput is correct written. And using the value to change the paragraph
 */

function oldEnough() {
    userAge = inputAge.value
    age = Number(userAge)

    if (Number.isNaN(age)) {
        sayingHello.innerHTML = "Skriv ett nummer, inga bokstäver eller tecken!!!"
        return
    }
    else {
        sayingHello.innerHTML = "Tur att du är " + userAge + " år gammal, du  är precis gammal nog!"
        document.getElementById("submitBox1").style.display = "none"
        document.getElementById("inputBox1").style.display = "none"
        setTimeout(gameRules, 4000)
    }

}
/**
 * Asking the user if it want to go through the gamerules, with a placeholder that shows the options
 */

function gameRules() {
    sayingHello.innerHTML = "Vill du gå igenom spelreglerna?"
    document.getElementById("submitBox1").style.display = "None"
    document.getElementById("inputBox1").style.display = "None"

    var placement = document.getElementsByClassName("buttonBox")[0]
    placement.id = "infoBox"

    firstOption = document.createElement("input")
    firstOption.setAttribute("placeholder", "Ja/Nej")
    placement.append(firstOption)

    var secondOption = document.createElement("button")
    secondOption.innerHTML = "OK"
    placement.append(secondOption)

    secondOption.addEventListener("click", checkValue)
}

/**
 * Checking the input of the user and using if/else-statements to know which way the game should go
 */

function checkValue() {
    userAnswerYes = firstOption.value


    if (userAnswerYes == "Ja" || userAnswerYes == "ja" || userAnswerYes == "JA" || userAnswerYes == "jA") {
        onlyRule()

    }
    else if (userAnswerYes == "Nej" || userAnswerYes == "nej" || userAnswerYes == "NEJ") {
        noRule()

    }
    else {
        sayingHello.innerHTML = "Skriv ja eller nej, försök igen!"
        return;
    }
}
/**
 * Writing out the gamerules
 */
function onlyRule() {
    sayingHello.innerHTML = "Svara på frågorna som dyker upp och vänta tålmodigt till nästa"
    document.getElementById("infoBox").style.display = "None"
    setTimeout(noRule, 4000)
}
/**
 * Story starting
 */
function noRule() {
    sayingHello.innerHTML = "Okej, då kör vi.. "
    document.getElementById("infoBox").style.display = "None"
    setTimeout(firstStory, 4000)
}

/**
 * changing the innerhtml of <p>,  and the story continues
 */
function firstStory() {
    sayingHello.innerHTML = "Du är ute på promenad i skogen och plockar svamp när.."
    setTimeout(screamingMan, 4000)
}

/**
 * The murderer of the story shows up with a img, and story continues
 */

function screamingMan() {
    sayingHello.innerHTML = "EN MÖRDARE DYKER UPP! "
    document.getElementById("imgBox1").style.display = "Block"
    document.body.style.background = "red"
    var img = document.createElement("img")
    img.src = "evilman.png"
    var src = document.getElementById('imgBox1')
    src.append(img)
    setTimeout(manAskingQuestion, 4000)
}
function manAskingQuestion() {
    document.getElementById("imgBox1").style.display = "None"
    document.body.style.background = "black"
    sayingHello.innerHTML = "Han tittar på dig konstigt och ställer en fråga:"
    setTimeout(deathQuestion, 4000)
}
/**
 * Question about life shows upp
 */
function deathQuestion() {
    sayingHello.innerHTML = "Vill du dö?"
    setTimeout(buttonPopUp, 3000)
}
/**
 * Button shows up, yes or no, they take user to two different paths
 */
function buttonPopUp() {
    sayingHello.innerHTML = "Vill du dö?"

    var firstOption = document.createElement("button")
    firstOption.innerHTML = "Ja"
    document.getElementById("yesOrNo").append(firstOption)

    var secondOption = document.createElement("button")
    secondOption.innerHTML = "Nej"
    document.getElementById("yesOrNo").append(secondOption)

    firstOption.style.background = "Red"
    secondOption.style.background = "Green"
    firstOption.addEventListener("click",
    /**
     * If user choose to die, the paragraph changes and it sends user to the end of the game with the function gunshot 
     */
        function restInPeace() {
            sayingHello.innerHTML = "Han tar fram en pistol"
            document.getElementById("yesOrNo").style.display = "none"
            setTimeout(gunshot, 1000)
        }
    )
    secondOption.addEventListener("click", gameContinues)

}

/**
 * User get shot with some style attributes and it makes display none on the buttons
 */
function gunshot() {
    document.getElementById("yesOrNo").style.display = "none"
    alert("BOM! Han dödade dig")
    sayingHello.style.display = "None"
    document.body.style.background = "Red"
    document.getElementById('infoBox').style.display = "none"
    setTimeout(theEnd, 1500)
}
/**
 * Game finished and img of a dead guy shows up
 */
function theEnd() {
    document.getElementById("imgBox").style.display = "Block"
    document.body.style.background = "rgb(247, 247, 247)"
    var img = document.createElement("img")
    img.src = "deadguy.png"
    var src = document.getElementById('imgBox')
    src.append(img)
}
/**
 * If the user doesnt want to die, it comes here and paragraph shows up and the story continues
 */
function gameContinues() {
    document.getElementById("yesOrNo").style.display = "none"
    sayingHello.style.display = "block"
    document.getElementById('infoBox').style.display = "none"
    sayingHello.innerHTML = "Mannen fortsätter: Tur det! För att jag ska låta dig och dina svampar vara ifred.."
    setTimeout(beforeLastQuestion, 4000)
}
/**
 * Question of the game asks and user have to follow the instructions coming
 */
function beforeLastQuestion() {
    sayingHello.innerHTML = "Så måste du gissa vilket nummer jag tänker på mellan 1-100. Du har 10 chanser på dig.. Annars dödar jag dig"
    setTimeout(scaryLaugh, 4000)
}

/**
 * Scary laugh sound coming
 */
function scaryLaugh() {
    var laugh = document.getElementById("myAudio")
    laugh.style.display = "block"
    laugh.play()
    sayingHello.innerHTML = "Kör på.. hahahahahahaha... har du fel så kommer jag döda dig"
    setTimeout(guesses, 5000)
}

let nrOfGuesses = 0
let guessNumber
let inputGuess
let randomNumber = Math.ceil(Math.random() * 100)

/**
 * creating inputfield and submitbox for the users guesses
 */

function guesses() {

    sayingHello.innerHTML = "Mannen tittar med ett konstigt leende och säger: Vilket nummer vill du gissa på?"
    guessNumber = document.createElement("input")
    guessNumber.setAttribute("type", "text")
    document.getElementById('inputBox2').appendChild(guessNumber)

    let submitGuess = document.createElement("button")
    submitGuess.innerHTML = "OK"
    document.getElementById("submitBox2").appendChild(submitGuess)

    submitGuess.addEventListener("click", checkGuesses)
}
/**
 * Saving the input, checking the value of the input and see what it is and 
 * depending of the answer different options happens
 */
function checkGuesses() {
    inputGuess = guessNumber.value
    nrOfGuesses++

    if (inputGuess == randomNumber && nrOfGuesses <= 10) {
        happyEnding()
    }
    else if (nrOfGuesses == 10 && inputGuess != randomNumber) {
        gameOver()
    }

    else if (isNaN(inputGuess)) {
        sayingHello.innerHTML = "Skriv siffror, hahaha. En gissning mindre nu.."
    }
    else if (nrOfGuesses == 9) {
        sayingHello.innerHTML = "Sista gissningen nu, tänk noga på din gissning, annars....."
    }
    else if (inputGuess < randomNumber && nrOfGuesses < 10) {
        sayingHello.innerHTML = "Försök igen.. hahahaha. Din gissning är lägre än numret jag tänker på"
    }
    else if (inputGuess > randomNumber && nrOfGuesses < 10) {
        sayingHello.innerHTML = "Försök igen.. hahahaha. Din gissning är högre än numret jag tänker på"
    }
}
/**
 * if all guesses is wrong then game over, display none on the button and inputfield 
 */
function gameOver() {
    sayingHello.innerHTML = "Ha Ha Ha, jag varnade dig. säger mannen samtidigt som han tar upp en pistol"
    document.getElementById("submitBox2").style.display = "none"
    document.getElementById("inputBox2").style.display = "none"
    setTimeout(gunshot, 3000)
}
/**
 * if the guess was correct, hiding the input and submitbox and sends me to next function
 */
function happyEnding() {
    sayingHello.innerHTML = "Nämen, det är din turdag, du gissade rätt, säger mannen"
    document.getElementById("submitBox2").style.display = "none"
    document.getElementById("inputBox2").style.display = "none"
    setTimeout(endOfGame, 3000)
}
/**
 * End of story, last paragraph change of the game
 */
function endOfGame() {
    sayingHello.innerHTML = "Grattis. Ska inte störa dig mer, fortsätt på din svamprunda"
    setTimeout(imgOfMushroom, 3000)
}
/**
 * Adding a image of a mushroom and display none on all the box
 */
function imgOfMushroom() {
    document.getElementById("paragraph").style.display = "none"
    document.getElementById("imgBox").style.display = "flex"
    var mushroomImg = document.createElement("img")
    mushroomImg.src = "mushroom.jpg"
    var src = document.getElementById('imgBox')
    src.append(mushroomImg)
    setTimeout(absoluteEndingOfGame, 2000)
}
/** 
 *  Creating an element (h1) that is the ending of the game.
 */
function absoluteEndingOfGame() {
    let gameOver = document.createElement("h1")
    document.getElementById("imgBox").append(gameOver)
    gameOver.innerHTML = "Game Over"
    gameOver.style.color = "white"


}