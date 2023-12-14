const gifts = ["coal", "chocolates", "flowers", "giftcard", "hat", "socks"];
const giftCount = gifts.length;

// Generate random gift

const GenerateGift = function (){
    for (let i = 0; i < giftCount; i++) {
        const randomIndex = Math.floor(Math.random()* gifts.length);
        const gift = gifts[randomIndex];
    
        return gift;
    }    

}

let giftGenerated = GenerateGift();

// Name Class: Represents a Name
class Name {
    constructor(title){
        this.title = title;
    }
}

// UI Class: Handle UI Tasks

class UI {
    static displayNames() {
    
        names.forEach(name=> UI.addNameToList(name));

    }

    static addNameToList(name){
        const list = document.querySelector('#name-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${name.title}</td>
            <td>${giftGenerated}</td>
        `;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#nameInput').value = '';
    }
}

// Store Class: Handles Storage

// Event: Display Names
document.addEventListener('DOMContentLoaded', UI.displayNames);

// Event: Add a Name
document.querySelector('#name-form').addEventListener('submit',
(e)=> {
// Prevent actual submit 
e.preventDefault();

// Get form values
const title = document.querySelector('#nameInput').value;

// Instatiate name
const name = new Name(title);

// Add name to UI
UI.addNameToList(name);

// Clear fields
UI.clearFields()

});

