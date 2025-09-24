// Initialize EmailJS
console.log("Script is running!");
emailjs.init("v_DOde-Y1x2h3_xLs"); // Replace with your EmailJS User ID

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const statusMsg = document.getElementById("status-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm('service_x7zj85d', 'template_rftgvcu', this)
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
