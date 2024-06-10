function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else if (age >= 18) {
        return 20;
    } else {
        return null; 
    }
}

function determineTicketPrice() {
    
    var age = document.getElementById("ageInput").value;


    if (isNaN(age) || age === "") {
        alert("Please enter a valid number for age.");
        return;
    }

    
    age = parseInt(age);

    
    var price = getTicketPrice(age);

    if (price !== null) {
        document.getElementById("result").textContent = "The price of the movie ticket for age " + age + " is $" + price + ".";
    } else {
        document.getElementById("result").textContent = "Invalid age entered.";
    }
}