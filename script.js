//attributes
const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
var cardArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
//check to see if any card are in local storage
cardArray.forEach(makeCard);

function openCreateBox(){
    createBox.style.display = "block";
}

function deleteAllCard(){
    localStorage.clear();
    flashcards.innerHTML = '';
    cardArray = [];
}

function createFlashCard(){
    var card = {
        'userQuestion' : question.value,
        'userAnswer' : answer.value
    }
    cardArray.push(card);
    localStorage.setItem('items', JSON.stringify(cardArray));
    makeCard(card);
    question.value = '';
    answer.value = '';
    
}

function closeCreateBox(){
    question.value = '';
    answer.value = '';
    createBox.style.display = "none";
}

function makeCard(text) {
    var div = document.createElement("div");
    var h2Question = document.createElement("h2");
    var h2Answer = document.createElement("h2");

    div.className = 'flashcard';

    h2Question.setAttribute('style', "text-align:center; padding: 15px; margin-top: 30px");
    h2Question.innerHTML = text.userQuestion;

    h2Answer.setAttribute("style", "text-align:center; color: red; display: none");
    h2Answer.innerHTML = text.userAnswer;

    div.appendChild(h2Question);
    div.appendChild(h2Answer);

    div.addEventListener("click", function(){
        if(h2Answer.style.display == "none"){
            h2Answer.style.display = "block";
        }else{
            h2Answer.style.display = "none";
        }
    })

    flashcards.appendChild(div);
}