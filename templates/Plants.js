function changeText() {
    // Get the user input
    const userInput = document.getElementById("userInput").value;
    const output = "With these amounts of plants you would have helped to reduce: " + userInput*1.5+ " kg of CO2 emissions per year!";
    // Change the paragraph text
    document.getElementById("displayText").innerText = output;
}

function changeText2() {
    // Get the user input
    const userInput2 = document.getElementById("userInput2").value;
    const output = "You would have spent approximately" + userInput2*9+ " gallons of water with a 1/2-inch diameter hose, but if you had used a 5/8-inch diameter hose you would have spent " + userInput2*17 + " gallons of water!";

    // Change the paragraph text
    document.getElementById("displayText2").innerText = output;
}

function growPlant() {
    let numPlants = document.getElementById("userInput").value;
    let plantImage = document.getElementById("plantImage");

    // Ensure the number of plants is positive
    if (numPlants < 1) {
        numPlants = 1;
    }

    // Scale the plant size based on input (capped at 200px)
    let newSize = Math.min(50 + numPlants * 10, 200);
    plantImage.style.transform = `scale(${newSize / 50})`;
}