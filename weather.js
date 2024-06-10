function adviseClothing() {
    // Get the temperature and rain status from the input fields
    var temperature = parseInt(document.getElementById("temperatureInput").value);
    var isRaining = document.getElementById("rainInput").checked;

    // Determine clothing advice based on temperature and rain status
    var clothingAdvice = "";
    if (temperature >= 25) {
        clothingAdvice += "It's hot, so wear light and breathable clothing. ";
    } else if (temperature >= 15) {
        clothingAdvice += "It's warm, so wear a t-shirt and shorts. ";
    } else if (temperature >= 5) {
        clothingAdvice += "It's cool, so wear a long-sleeve shirt and pants. ";
    } else {
        clothingAdvice += "It's cold, so wear a jacket, sweater, and pants. ";
    }

    if (isRaining) {
        clothingAdvice += "Don't forget to bring an umbrella and wear waterproof shoes.";
    } else {
        clothingAdvice += "No need for an umbrella, but it's always good to carry one just in case.";
    }

    // Output the clothing advice
    document.getElementById("advice").textContent = clothingAdvice;
}