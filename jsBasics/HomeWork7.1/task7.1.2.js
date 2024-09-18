const counterNumber = (num) => {
    console.log(num);
    if (num > 0) {
        counterNumber (num -1);
    }
}

counterNumber(5); 