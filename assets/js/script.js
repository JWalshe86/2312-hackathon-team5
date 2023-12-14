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

console.log(giftGenerated);