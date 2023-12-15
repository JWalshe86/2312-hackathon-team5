// New code below here from "keiron" branch

// I deleted previous code as there was complex stuff that was preventing the array from being randomised.
// I decided it was best to start again with simpler, modular code.
// If you want to refer to that code again, just go back into commit history. It isn't lost forever. :- )
// But I don't think it is needed.

  document.addEventListener("DOMContentLoaded", () => {
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
      "A turkey hat"
    ];
  
    // Form submission handling function
    document.getElementById("name-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Name input from user
      const nameInput = document.getElementById("nameInput");
      const name = nameInput.value;
  
      // Math function to randomly generate gift
      const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
  
      // Results displayed into a table row, inserted into the HTML
      //const tableBody = document.getElementById("name-list");
      //const row = document.createElement("tr");
      //row.innerHTML = `<td>${name}</td><td>${randomGift}</td><td></td>`;
      //tableBody.appendChild(row);

      //Results displayed into card 
      const resultsSection = document.getElementById("name-list");
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="card-header">${name}</div>
        <div class="card-body">${randomGift}</div>
      `;
      resultsSection.appendChild(card);
  
     // Clears the name input value so as to not repeat default behaviour
      nameInput.value = "";
    });
  
    // Added by Yuliia: 
    // This section of the code was added by me to implement the show/hide instructions functionality.
    // I had to encapsulate all the code under a single 'DOMContentLoaded' event listener for the newly 
    // added functionality to work properly.
    
    // Function for showing/hiding instructions
    const instructionsButton = document.getElementById('instructionsToggle');
    const instructionsContent = document.getElementById('instructionsContent');
  
    instructionsButton.addEventListener('click', () => {
      instructionsContent.classList.toggle('hide');
      instructionsButton.textContent = instructionsContent.classList.contains('hide') ? 'Show Instructions' : 'Hide Instructions';
    });
  });

  // "keiron" branch : progress bar status

  let currentStep = 1;
  const progressBar = document.getElementById('progress-bar');

  function nextStep() {
    const totalSteps = 3;

    // Lines 76-82 check if input from user is empty
    const userInput = document.getElementById('nameInput').value.trim();

    if (userInput === '') {
      alert("Please enter a name.");
      return;
    }

    // Increases totalSteps count by +1
    currentStep++;

    if (currentStep > totalSteps) {
      currentStep = 1;
    }

    const nextWidth = ((currentStep) / totalSteps) * 100;

    // Dynamically changes the <div> associated with the progress bar
    progressBar.querySelector('.progress-bar').style.width = `${nextWidth}%`;
    progressBar.querySelector('.progress-bar').setAttribute('aria-valuenow', nextWidth);
    progressBar.querySelector('.progress-bar').textContent = `Step ${currentStep}`;
  };
  
