// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.querySelector('input[name="name"]').value.trim();
    let email = document.querySelector('input[name="email"]').value.trim();
    let message = document.querySelector('textarea[name="message"]').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
    } else {
        alert("Message sent successfully!");
        this.reset();
    }
});

// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = "Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px";
toggleButton.style.background = "#ffcc00";
toggleButton.style.color = "#121212";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";
toggleButton.style.borderRadius = "5px";

document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});

// Light Mode CSS (Added via JavaScript)
const lightModeCSS = document.createElement('style');
lightModeCSS.innerHTML = `
    .light-mode {
        background-color: #ffffff !important;
        color: #121212 !important;
    }
    .light-mode header, 
    .light-mode .project {
        background-color: #f0f0f0 !important;
        color: #121212 !important;
    }
    .light-mode nav ul li a {
        color: #121212 !important;
    }
    .light-mode button {
        background-color: #121212 !important;
        color: #ffffff !important;
    }
`;
document.head.appendChild(lightModeCSS);
