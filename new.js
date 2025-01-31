const text = document.getElementById("input");  
const submit = document.getElementById("submit");
const label = document.getElementById("label");

submit.onclick = function() {
    let pad1 = parseInt(text.value); // Convert input to number

    if (isNaN(pad1) || pad1 <= 0) {
        label.innerHTML = "Invalid input! Please enter a positive number.";
        return;
    }

    let x = "U";
    let y = "mah";

    let mString = "m".repeat(pad1); // Repeat "M" for the given amount
    let breakAfter = 50; // Number of characters before a line break
    let formattedM = ""; // Store formatted string with breaks

    for (let i = 0; i < mString.length; i++) {
        formattedM += mString[i];
        if ((i + 1) % breakAfter === 0) {
            formattedM += "<br>"; // Add a line break every 50 characters
        }
    }

    let z = x + formattedM + y; // Construct final output
    label.innerHTML = z; // Display the output with breaks
    console.log(z);
};
