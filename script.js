// Function to display numbers and operators
function dis(val) {
    let resultField = document.getElementById("result");
    resultField.value += val;

    // Add visual feedback to the button press
    let button = document.querySelector(`[value='${val}']`);
    button.classList.add("pressed");
    setTimeout(() => button.classList.remove("pressed"), 100);
}

// Function to clear the input field
function clr() {
    document.getElementById("result").value = "";
}

// Function to delete the last character from input
function deleteLastCharacter() {
    let resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0, -1);
}

// Function to calculate and display the result
function solve() {
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
}

// Function to handle keyboard events
document.addEventListener("keydown", function (event) {
    let key = event.key;

    // Check if the key is a number, operator, or decimal point
    if (!isNaN(key) || "+-*/.".includes(key)) {
        dis(key);
    } else if (key === "Enter") {
        solve();
    } else if (key === "Escape") {
        clr();
    } else if (key === "Backspace") {
        deleteLastCharacter();
    }
});
