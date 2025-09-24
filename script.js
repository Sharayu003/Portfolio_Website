// Initialize EmailJS
console.log("Script is running!");
emailjs.init("v_DOde-Y1x2h3_xLs"); // Replace with your EmailJS User ID

document.addEventListener("DOMContentLoaded", function() {
    // ===== Contact Form =====
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

    // ===== Dark / Light Mode Toggle =====
    const themeToggle = document.getElementById("theme-toggle");

    // Load saved theme from localStorage
    if (localStorage.getItem("theme")) {
        document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
        themeToggle.textContent = localStorage.getItem("theme") === "dark" ? "☀️" : "🌙";
    }

    themeToggle.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        }
    });
});
