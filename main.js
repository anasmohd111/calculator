// display input number
function display(num) {
    output.value += num;
}

// clear all values
function clearAll() {
    output.value = "";
}

// equal to
function evaluateExp() {
    output.value = eval(output.value)
}

// remove last
function removeLast() {
    currentExp = output.value;
    output.value = currentExp.slice(0, -1);
}