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

function welcome() {
    userName = inputElement.value
    sayingHello.innerHTML = "Välkommen till nummerspelet, " + userName + "!"

    document.getElementById("inputBox").style.display = "none"
    document.getElementById("submitBox").style.display = "none"

    setTimeout(askingForAge, 4000)
}
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
function oldEnough() {
    userAge = inputAge.value

    while (true) {
        age = Number(userAge)
        if (Number.isNaN(age)) {
            sayingHello.innerHTML = "Skriv ett nummer, inga bokstäver eller tecken!!!"
            writeNumber()
        }
        else {
            sayingHello.innerHTML = "Tur att du är " + userAge + " år gammal, du  är precis gammal nog!"
            document.getElementById("submitBox1").style.display = "none"
            document.getElementById("inputBox1").style.display = "none"
            setTimeout(gameRules, 4000)
            break
        }
    }
}

function writeNumber() {
    oldEnough()

}

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

function checkValue() {
    userAnswerYes = firstOption.value
    while (true)

        if (userAnswerYes == "Ja" || userAnswerYes == "ja" || userAnswerYes == "JA" || userAnswerYes == "jA") {
            onlyRule()
            break;
        }
        else if (userAnswerYes == "Nej" || userAnswerYes == "nej" || userAnswerYes == "NEJ") {
            noRule()
            break;
        }
        else {
            sayingHello.innerHTML = "Skriv ja eller nej, försök igen!"
            checkValue()
            break;
        }
}

function onlyRule() {
    sayingHello.innerHTML = "Svara på frågorna som dyker upp och vänta tålmodigt till nästa"
    document.getElementById("infoBox").style.display = "None"
    setTimeout(noRule, 4000)
}

function noRule() {
    sayingHello.innerHTML = "Okej, då kör vi.. "
    document.getElementById("infoBox").style.display = "None"
    setTimeout(firstStory, 4000)
}
function firstStory() {
    sayingHello.innerHTML = "Du är ute på promenad i skogen och plockar svamp när.."
    setTimeout(screamingMan, 4000)
}

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

function deathQuestion() {
    sayingHello.innerHTML = "Vill du dö?"
    setTimeout(buttonPopUp, 3000)
}

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
        function restInPeace() {
            sayingHello.innerHTML = "Han tar fram en pistol"
            document.getElementById("yesOrNo").style.display = "none"
            setTimeout(gunshot, 1000)
        }
    )
    secondOption.addEventListener("click", gameContinues)

}

function gunshot() {
    document.getElementById("yesOrNo").style.display = "none"
    alert("BOM! Han dödade dig")
    sayingHello.style.display = "None"
    document.body.style.background = "Red"
    document.getElementById('infoBox').style.display = "none"
    setTimeout(theEnd, 1500)
}

function theEnd() {
    document.getElementById("imgBox").style.display = "Block"
    document.body.style.background = "rgb(247, 247, 247)"
    var img = document.createElement("img")
    img.src = "deadguy.png"
    var src = document.getElementById('imgBox')
    src.append(img)
}

function gameContinues() {
    document.getElementById("yesOrNo").style.display = "none"
    sayingHello.style.display = "block"
    document.getElementById('infoBox').style.display = "none"
    sayingHello.innerHTML = "Mannen fortsätter: Tur det! För att jag ska låta dig och dina svampar vara ifred.."
    setTimeout(beforeLastQuestion, 4000)
}

function beforeLastQuestion() {
    sayingHello.innerHTML = "Så måste du gissa vilket nummer jag tänker på mellan 1-100. Du har 10 chanser på dig.. Annars dödar jag dig"
    setTimeout(scaryLaugh, 4000)
}

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
function checkGuesses() {
    inputGuess = guessNumber.value
    nrOfGuesses++

    if (inputGuess == randomNumber && nrOfGuesses <= 10) {
        happyEnding()
    }
    else if (nrOfGuesses == 10 && inputGuess != randomNumber) {
        gameOver()
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

function gameOver() {
    sayingHello.innerHTML = "Ha Ha Ha, jag varnade dig. säger mannen samtidigt som han tar upp en pistol"
    document.getElementById("submitBox2").style.display = "none"
    document.getElementById("inputBox2").style.display = "none"
    setTimeout(gunshot, 3000)
}

function happyEnding() {
    sayingHello.innerHTML = "Nämen, det är din turdag, du gissade rätt, säger mannen"
    document.getElementById("submitBox2").style.display = "none"
    document.getElementById("inputBox2").style.display = "none"
    setTimeout(endOfGame, 3000)
}

function endOfGame() {
    sayingHello.innerHTML = "Grattis. Ska inte störa dig mer, fortsätt på din svamprunda"
    setTimeout(imgOfMushroom, 3000)
}

function imgOfMushroom() {
    document.getElementById("imgBox").style.display = "flex"
    var mushroomImg = document.createElement("img")
    mushroomImg.src = "mushroom.jpg"
    var src = document.getElementById('imgBox')
    src.append(mushroomImg)
    setTimeout(absoluteEndingOfGame,2000)
}

function absoluteEndingOfGame(){
    let gameOver = document.createElement("h1")
    document.getElementById("imgBox").append(gameOver)
    gameOver.innerHTML = "Game Over"
    gameOver.style.color = "white"

}