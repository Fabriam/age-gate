function checkAge() {
    const age = document.getElementById("ageInput").value;
    const response = document.getElementById("response");
    const gif = document.getElementById("partyGif");

    if (age >= 18) {
        response.innerText = "You're allowed in! 🕺🎉";
        gif.style.display = "block";
    } else {
        response.innerText = "No entry, wait a few years 😢";
        gif.style.display = "none";
    }
}