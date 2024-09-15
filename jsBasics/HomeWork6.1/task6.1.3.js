const checkOrder = (available, ordered) => {
    if (ordered ===0){
        return "Your order is empty";
    } else if (ordered > available) {
        return "Your order is too large, we don’t have enough goods.";
    } else {
        return "Your order is accepted";
    }
}

const myOrder = checkOrder (1,1); 
console.log(myOrder);