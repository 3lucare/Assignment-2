let count = 0;
let countMaxLimit = 20;

const counterDisplay = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.querySelector(".reset");

// Great job creating elements using JavaScript!
//
// Here are a few suggestions for further improvement:
//
// -  Styles that remain static, such as font size in your case,
//    can be defined directly in the styles.css file.
//
// -  The code that creates the freeShippingNotice and outOfStockNotice
//    contains some repetition. The repeated parts could be extracted into a function.
const freeShippingNotice = document.createElement("span");
freeShippingNotice.textContent = "You have free shipping";
freeShippingNotice.style.color = "green";
freeShippingNotice.style.fontSize = "18px";
freeShippingNotice.style.display = "none";
document.querySelector(".counter-container").appendChild(freeShippingNotice);

const outOfStockNotice = document.createElement("span");
outOfStockNotice.textContent = "Out of stock";
outOfStockNotice.style.color = "red";
outOfStockNotice.style.fontSize = "18px";
outOfStockNotice.style.display = "none";
document.querySelector(".counter-container").appendChild(outOfStockNotice);

function updateCounterDisplay() {
  counterDisplay.textContent = count;
  decreaseButton.disabled = count === 0;
  if (count === 10) {
    freeShippingNotice.style.display = "block";
  } else if (count < 10 || count >= 20) {
    freeShippingNotice.style.display = "none";
  }
  if (count === countMaxLimit) {
    increaseButton.style.backgroundColor = "red";
    increaseButton.disabled = true;
    outOfStockNotice.style.display = "block";
  } else {
    increaseButton.style.backgroundColor = "";
    increaseButton.disabled = false;
    // Did you mean outOfStockNotice? :)
    outOfStockMessage.style.display = "none";
  }
}

// Event Listeners
increaseButton.addEventListener("click", () => {
  if (count < countMaxLimit) {
    count++;
    updateCounterDisplay();
  }
});

// Good work on fixing the decreaseButton!
decreaseButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounterDisplay();
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCounterDisplay();
});
