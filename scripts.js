document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav ul li a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Form validation for the contact form
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            const name = document.querySelector("#name");
            const email = document.querySelector("#email");
            const message = document.querySelector("#message");

            if (!name.value || !email.value || !message.value) {
                e.preventDefault();
                alert("Por favor, preencha todos os campos.");
            } else if (!validateEmail(email.value)) {
                e.preventDefault();
                alert("Por favor, insira um endereço de e-mail válido.");
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});
