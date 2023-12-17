// Array of gifts
const gifts = [
  "a bag of coal",
  "a Big-boi cat teddy",
  "Shrek 1 on DVD",
  "a rubber chicken",
  "a propeller hat",
  "a pack of ham",
  "some chicken leg socks",
  "a banana costume",
  "a turkey hat",
];

// Images stored as variables associated with gift name
const images = {
  "a bag of coal": "./assets/images/bag of coal.jpg",
  "a Big-boi cat teddy": "./assets/images/big cat teddy.webp",
  "Shrek 1 on DVD": "./assets/images/shrek dvd.jpg",
  "a rubber chicken": "./assets/images/rubber chicken.jpg",
  "a propeller hat": "./assets/images/propeller hat.webp",
  "a pack of ham": "./assets/images/pack of ham.jpg",
  "some chicken leg socks": "./assets/images/chicken leg socks.webp",
  "a banana costume": "./assets/images/banana costume.jpg",
  "a turkey hat": "./assets/images/turkey hat.jpg",
};

// Vouchers stored as variables associated with users
const vouchers = {
  "a bag of coal": "./assets/vouchers/cheeky-coal.png",
  "a Big-boi cat teddy": "./assets/vouchers/cheeky-big-boi-cat-teddy.png",
  "Shrek 1 on DVD": "./assets/vouchers/cheeky-shrek.png",
  "a rubber chicken": "./assets/vouchers/cheeky-chicken.png",
  "a propeller hat": "./assets/vouchers/cheeky-hat.png",
  "a pack of ham": "./assets/vouchers/cheeky-ham.png",
  "some chicken leg socks": "./assets/vouchers/cheeky-socks.png",
  "a banana costume": "./assets/vouchers/cheeky-banana.png",
  "a turkey hat": "./assets/vouchers/cheeky-turkey-hat.png",
};

// "keiron" branch :

let currentStep = 1;
const instructionsButton = document.getElementById("instructionsToggle");
const progressBar = document.getElementById("progress-bar");
const formGroup = document.getElementById("form-group");
const submitButton = document.getElementById("submit-button");
const giftInterface = document.getElementById("gift-interface");
const giftMessage = document.getElementById("gift-message");
const nextButton = document.getElementById("next-button");
const giftImage = document.getElementById("gift-image");

document.addEventListener("DOMContentLoaded", () => {
  // Form submission handling function
  document
    .getElementById("name-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Name input from user
      const nameInput = document.getElementById("nameInput");
      const name = nameInput.value;

      // Clears the name input value so as to not repeat default behaviour
      nameInput.value = "";
    });

  // Function for showing/hiding instructions
  const instructionsButton = document.getElementById("instructionsToggle");
  const instructionsContent = document.getElementById("instructionsContent");

  instructionsButton.addEventListener("click", () => {
    instructionsContent.classList.toggle("hide");
    instructionsButton.textContent = instructionsContent.classList.contains(
      "hide"
    )
      ? "Show Instructions"
      : "Hide Instructions";
  });
});

function nextStep() {
  const totalSteps = 3;
  // Takes name value to pass down function
  const userInput = document.getElementById("nameInput").value.trim();

  // Validates any empty fields
  if (currentStep === 1 && userInput === "") {
    alert("Please enter a name.");
    return;
  }

  // Stops step count going beyond "Step 3"
  if (currentStep === 3) {
    return;
  }

  // Math function to randomly generate gift
  selectedGift = gifts[Math.floor(Math.random() * gifts.length)]; // Store the selected gift
  console.log(selectedGift);

  // Increments the progress bar steps +1
  currentStep++;

  // Handles the number for the width
  const nextWidth = (currentStep / totalSteps) * 100;

  // Calls function to increase progress bar
  updateProgressBar(nextWidth);

  if (currentStep === 2) {
    handleStep2(userInput, selectedGift);
  } else if (currentStep === 3) {
    handleStep3(userInput, selectedGift); // Pass the selectedGift to Step 3
  }
}

// Progress bar element update function
function updateProgressBar(width) {
  const progressBarElement = progressBar.querySelector(".progress-bar");
  progressBarElement.style.width = `${width}%`;
  progressBarElement.setAttribute("aria-valuenow", width);
  progressBarElement.textContent = `Step ${currentStep}`;
}

// The interface on "Step 2"
function handleStep2(userInput, selectedGift) {
  console.log(userInput, selectedGift);
  formGroup.style.display = "none";
  instructionsButton.style.display = "none";
  submitButton.style.display = "none";
  nextButton.style.display = "inline-flex";
  giftInterface.style.display = "flex";
  giftImage.style.display = "block";
  giftMessage.textContent = `Damn, Merry Christmas! Looks like ${userInput}'s getting ${selectedGift}!`;
  giftImage.src = images[selectedGift] || "";
}

// The interface on "Step 3"
function handleStep3(userInput, selectedGift) {
  formGroup.style.display = "none";
  giftImage.style.display = "none";
  nextButton.style.display = "none";
  let voucher = vouchers[selectedGift] || "";
  giftMessage.innerHTML = `Here you go, ${userInput}! Here is your shopping voucher: 
      <a href="${voucher}" target="_blank">Download Voucher</a>`;
}

// Snowfall effect
$(document).snowfall({
  flakeCount: 200, // number of snowflakes
  minSize: 1, // min size of snowflake, 1px by default
  maxSize: 4, // max size of snowflake, 3px by default
  minSpeed: 1, // min speed of snowflake, 1 by default
  maxSpeed: 3, // max speed of snowflake, 5 by default
});
