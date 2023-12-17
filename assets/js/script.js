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
  "a turkey hat": "./assets/images/turkey hat.jpg"
};

// "keiron" branch : 

let currentStep = 1;
const instructionsButton = document.getElementById("instructionsToggle");
const instructionsContent = document.getElementById("instructionsContent");
const progressBar = document.getElementById("progress-bar");
const participantsCheckbox = document.getElementById("participants-checkbox");
const formGroup = document.getElementById("form-group");
const submitButton = document.getElementById("submit-button");
const giftInterface = document.getElementById("gift-interface");
const giftMessage = document.getElementById("gift-message");
const nextButton = document.getElementById("next-button");
const giftImage = document.getElementById("gift-image");
const addNameButton = document.getElementById("add-name");
const nameInput = document.getElementById("nameInput");
const multipleParticipantsCheckbox = document.getElementById('multipleParticipantsCheckbox');

const names = []; // Stores the names of the participants
const giftCollection = {}; // Stores the name and gift pairs name: gift

// Function for receiving a random gift
function getRandomGift() {
  return gifts[Math.floor(Math.random() * gifts.length)];
}

// Function for checking the checkbox state
function isCheckboxChecked() {
  return multipleParticipantsCheckbox.checked;
}

document.addEventListener("DOMContentLoaded", () => {

  //Add-name button listener
  addNameButton.addEventListener('click', addNameField);
  let nameFieldCount = 2;

  // Function for adding another name fields
  function addNameField() {
    const newInputDiv = document.createElement('div');
    newInputDiv.classList.add('mb-3');
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = `nameInput${nameFieldCount}`;
    newInput.classList.add('form-control');
    newInput.placeholder = `Name #${nameFieldCount}`;

    newInputDiv.appendChild(newInput);

    formGroup.appendChild(newInputDiv);

    nameFieldCount++;
  }

  // Event handler for the checkbox
  multipleParticipantsCheckbox.addEventListener('change', function () {
    if (isCheckboxChecked()) {
      addNameButton.classList.remove("d-none");
    } else {
      addNameButton.classList.add("d-none");
      removeAdditionalNameFields();
    }
  });

  // Form submission handling function
  document
    .getElementById("name-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      addNameButton.classList.remove("hidden");
      nameInput.value = "";
    });
});

// Function for adding names to the array
function collectNames() {
  document
    .querySelectorAll('#form-group input[type="text"]')
    .forEach((input) => {
      const trimmedName = input.value.trim();
      if (trimmedName !== "") {
        names.push(trimmedName);
      }
    });
}

// Function for showing/hiding instructions
instructionsButton.addEventListener("click", () => {
  instructionsContent.classList.toggle("hide");
  instructionsButton.textContent = instructionsContent.classList.contains(
    "hide"
  )
    ? "Show Instructions"
    : "Hide Instructions";
});

// Function for assigning gifts to names
function assignGiftsToNames() {
  names.forEach(name => {
    if (name.trim() !== '') {
      const randomGift = getRandomGift();
      giftCollection[name.trim()] = randomGift;
    }
  });
}

// Function for creating pairs of names
function createNamePairs() {
  const pairs = {};
  let pairIndex = 1;

  if (names.length % 2 !== 0) {
    names.push("Unknown");
  }

  for (let i = 0; i < 1; i++) {
    pairs[`Pair ${pairIndex}`] = [names[i], names[i + 1]];
    pairIndex++;
  }

  return pairs;
}

// Function for handling the all steps
function nextStep() {
  const totalSteps = 3;
  currentStep++;

  if (currentStep > totalSteps) {
    return;
  }
  updateProgressBar((currentStep / totalSteps) * 100);

  // Process the transition to the next step
  switch (currentStep) {
    case 2:
      handleStep2();
      break;
    case 3:
      handleStep3();
      break;
    default:
      break;
  }
}

// Function handling 1-st step on the progress bar
function handleStep1() {
  const userInputValue = nameInput.value.trim();
  if (userInputValue === "") {
    alert("Please enter a name.");
    return;
  }

  const nextWidth = (currentStep / totalSteps) * 100;

  updateProgressBar(nextWidth);
  collectNames();
  assignGiftsToNames();
  nextStep();
}

// Progress bar element update function
function updateProgressBar(width) {
  const progressBarElement = progressBar.querySelector(".progress-bar");
  progressBarElement.style.width = `${width}%`;
  progressBarElement.setAttribute("aria-valuenow", width);
  progressBarElement.textContent = `Step ${currentStep}`;
}

// Function handling 2-nd step on the progress bar
function handleStep2() {
  formGroup.style.display = "none";
  instructionsButton.style.display = "none";
  participantsCheckbox.style.display = "none";
  submitButton.style.display = "none";
  addNameButton.style.display = "none";

  // Displays the gift interface
  giftInterface.style.display = "block";

  // Collect names and assign random gifts to each name
  collectNames();

  const namePairs = createNamePairs();
  console.log(namePairs);

  // Assign random gifts to each name
  names.forEach((name) => {
    giftCollection[name] = getRandomGift();
  });

  console.log(giftCollection);

  // Display gifts for each pair
  for (const pair in namePairs) {
    const pairDiv = document.createElement("div");
    // pairDiv.innerHTML = `<h3>${pair}</h3>`;

    namePairs[pair].forEach((name) => {
      const gift = giftCollection[name];
      const giftImageUrl = images[gift] || "";
      const cardDiv = document.createElement("div");

      console.log(names);

      // Function to shuffle array
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const randomNames = shuffle(names);

// Match each person with the next one, folding over at the end
const matches = randomNames.map((name, index) => {
return {
  santa: name,
  receiver: randomNames[index + 1] || randomNames[0],
}
});


dataArray = matches.map(function(e){
  return JSON.stringify(e);
});

dataString = dataArray.join(",");
console.log(dataString);
    
          cardDiv.innerHTML = `
        <img src="${giftImageUrl}" alt="${gift}" class="gift-image">
        <p>${dataString} ${gift}</p>
        `;
      

      pairDiv.appendChild(cardDiv);
    });

      giftInterface.appendChild(pairDiv);
    }
  }
}

// Function handling 3-d step on the progress bar
function handleStep3() {
  document.querySelectorAll('#form-group input[type="text"]').forEach(input => {
    input.removeAttribute('required');
  });

  formGroup.style.display = "none";
  giftInterface.style.display = "none";
  nextButton.style.display = "none";

  // Create an interface for step 3
  const step3Interface = document.createElement("div");

  // Add information about gifts and a link to the voucher
  for (const name in giftCollection) {
    const gift = giftCollection[name];
    const giftImageUrl = images[gift] || "";
    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
      <p>${name} will receive: ${gift}</p>
      <img src="${giftImageUrl}" alt="${gift}" class="gift-image">
      <p>Here is your shopping voucher: 
        <a href="./assets/images/voucher-template.png" target="_blank">Download Voucher</a>
      </p>
    `;
    step3Interface.appendChild(cardDiv);
  }
  document.body.appendChild(step3Interface);
}

// Snowfall effect
$(document).snowfall({
  flakeCount: 200,   // number of snowflakes
  minSize: 1,     // min size of snowflake, 1px by default
  maxSize: 4,     // max size of snowflake, 3px by default
  minSpeed: 1,     // min speed of snowflake, 1 by default
  maxSpeed: 3      // max speed of snowflake, 5 by default
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand")

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})