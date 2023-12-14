// New code below here from "keiron" branch

// I deleted previous code as there was complex stuff that was preventing the array from being randomised.
// I decided it was best to start again with simpler, modular code.
// If you want to refer to that code again, just go back into commit history. It isn't lost forever. :- )
// But I don't think it is needed.

const gifts = ["coal", "chocolates", "flowers", "giftcard", "hat", "socks"];

document
  .getElementById("name-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Name input from user
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value;

    // Math function to randomly generate gift
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];

    // Results displayed into a table row, inserted into the HTML
    const tableBody = document.getElementById("name-list");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${randomGift}</td>
        <td></td>
      `;
    tableBody.appendChild(row);

    // Clears the name input value so as to not repeat default behaviour
    nameInput.value = "";
  });
