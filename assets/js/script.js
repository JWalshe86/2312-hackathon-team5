// Array of gifts
const gifts = [
  "Bag of coal",
  "Big boi cat teddy",
  "Shrek 1 on DVD",
  "Rubber chicken",
  "Propeller hat",
  "A pack of ham",
  "Chicken leg socks",
  "Banana costume",
  "A turkey hat",
];

// Images stored as variables associated with gift name
const images = {
  "Bag of coal": "./assets/images/bag of coal.jpg",
  "Big boi cat teddy": "./assets/images/big cat teddy.webp",
  "Shrek 1 on DVD": "./assets/images/shrek dvd.jpg",
  "Rubber chicken": "./assets/images/rubber chicken.jpg",
  "Propeller hat": "./assets/images/propeller hat.webp",
  "A pack of ham": "./assets/images/pack of ham.jpg",
  "Chicken leg socks": "./assets/images/chicken leg socks.webp",
  "Banana costume": "./assets/images/banana costume.jpg",
  "A turkey hat": "./assets/images/turkey hat.jpg"
};

document.addEventListener("DOMContentLoaded", () => {

  // Add add-name button listener
  document.getElementById('add-name').addEventListener('click', addNameField);
  let nameFieldCount = 2;

  function addNameField() {
    const nameInputsContainer = document.getElementById('form-group');// Container for input fields

    // Create a new div element for the input field
    const newInputDiv = document.createElement('div');
    newInputDiv.classList.add('mb-3'); // Добавление отступа

    // Create a new input field
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = `nameInput${nameFieldCount}`;
    newInput.classList.add('form-control');
    newInput.placeholder = `Name #${nameFieldCount}`; // Add a tooltip

    // Add a new input field to the div
    newInputDiv.appendChild(newInput);

    // Adding a div to the container
    nameInputsContainer.appendChild(newInputDiv);

    //Increase the counter for the next field
    nameFieldCount++;
  }

  // Event handler for the checkbox
  document.getElementById('multipleParticipantsCheckbox').addEventListener('change', function() {
    if (this.checked) {
      // Show the button
      document.getElementById("add-name").classList.remove("d-none");
    } else {
      // Hide the button
      document.getElementById("add-name").classList.add("d-none");
      removeAdditionalNameFields();
    }
  });
  
  // Form submission handling function
  document
    .getElementById("name-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      document.getElementById("add-name").classList.remove("hidden");

      // Get the checkbox value
      const isCheckboxChecked = document.getElementById("multipleParticipantsCheckbox").checked;

      // Show/hide Add Name button
      // if (isCheckboxChecked) {
      //   document.getElementById("add-name").classList.remove("d-none");
      //   addNameField();
      // } else {
      //   document.getElementById("add-name").classList.add("d-none");
      //   removeAdditionalNameFields();
      // }

      function removeAdditionalNameFields() {
      }

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

// "keiron" branch : 

let currentStep = 1;
const progressBar = document.getElementById("progress-bar");
const formGroup = document.getElementById("form-group");
const giftInterface = document.getElementById("gift-interface");
const giftMessage = document.getElementById("gift-message");
const nextButton = document.getElementById("next-button");
const giftImage = document.getElementById("gift-image");

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
  const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
  console.log(randomGift);

  // Increments the progress bar steps +1
  currentStep++;

  // Handles the number for the width
  const nextWidth = (currentStep / totalSteps) * 100;

  // Calls function to increase progress bar
  updateProgressBar(nextWidth);

  if (currentStep === 2) {
    handleStep2(userInput, randomGift);
  } else if (currentStep === 3) {
    handleStep3(userInput);
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
function handleStep2(userInput, randomGift) {
  console.log(userInput, randomGift);
  formGroup.style.display = "none";
  giftInterface.style.display = "block";
  giftImage.style.display = "block";
  giftMessage.textContent = `${userInput} has been gifted this ${randomGift}!`;
  giftImage.src = images[randomGift] || ""; // This piece of code is beautiful fr
}

// The interface on "Step 3"
function handleStep3() {
  formGroup.style.display = "none";
  giftImage.style.display = "none";
  giftMessage.innerHTML = `Here you go! Here is your shopping voucher: 
      <a href="path-to-your-voucher.pdf" target="_blank">Download Voucher</a>`;
}

// Snowfall effect
$(document).snowfall({
  flakeCount : 200,   // number of snowflakes
  minSize    : 1,     // min size of snowflake, 1px by default
  maxSize    : 4,     // max size of snowflake, 3px by default
  minSpeed   : 1,     // min speed of snowflake, 1 by default
  maxSpeed   : 3      // max speed of snowflake, 5 by default
});