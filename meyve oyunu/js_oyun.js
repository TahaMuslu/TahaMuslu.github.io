
var fruits = ["apple", "bananas", "cherries", "grapes", "kiwi", "lemon", "orange", "strawberry", "watermelon"];
var container;
var Score;
var score = 0;



setTimeout(function () {
    container = document.querySelector(".container");
    Score = document.querySelector("#score");
    mainPage = document.querySelector(".btn");
}, 300);

var createFruite = setInterval(fruitCreator, 500);

function fruitCreator() {
    let Element = new Image();
    Element.classList.add("fruit");
    Element.src = "./fruits/" + fruits[Math.floor(Math.random() * fruits.length)] + ".png";
    Element.style.left = Math.random() * (visualViewport.width - 150) + 50 + "px";
    Element.style.top = Math.random() * (visualViewport.height - 150) + 50 + "px";
    Element.addEventListener("click", function () {
        this.remove();
        score++;
        Score.innerHTML = "Score: " + score;
        if (score == 20) {
            alert("You Win!");
            clearInterval(createFruite);
            container.innerHTML = "";
            container.appendChild(Score);
            container.appendChild(mainPage);
        }
    });
    container.appendChild(Element);
}