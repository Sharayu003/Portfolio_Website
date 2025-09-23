// Initialize EmailJS
console.log("Script is running!");
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const statusMsg = document.getElementById("status-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                statusMsg.textContent = "Message sent successfully!";
                statusMsg.style.color = "green";
                form.reset();
            }, function(error) {
                statusMsg.textContent = "Failed to send message. Please try again.";
                statusMsg.style.color = "red";
                console.error(error);
            });
    });
});
