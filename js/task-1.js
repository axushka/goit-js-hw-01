
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    const massage = `You ordered ${quantity} droids worth ${totalPrice} credits!`
    console.log(totalPrice);
    
console.log(massage);
     return massage;
    
}

makeTransaction(5, 3000)
makeTransaction(3, 1000)
makeTransaction(10, 500)

  