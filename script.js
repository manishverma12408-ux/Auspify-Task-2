
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        result.textContent = "Please fill in all fields.";
        return;
    }

    result.textContent = "Thank you, " + name + "! Your message has been received.";

    form.reset();
});
