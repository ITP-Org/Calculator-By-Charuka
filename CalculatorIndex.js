function calculateSquareRoot() {

    let screenInput = document.getElementsByName('screen')[0];

    let number = parseFloat(screenInput.value);

    if (number >= 0) {

        let result = Math.sqrt(number);
        screenInput.value = result;
    } 
}

