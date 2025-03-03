let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.intro-logo');

window.addEventListener('load', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
const form = document.querySelector(".messaageForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);

    fetch(form.action, {
    method: form.method,
    body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
        alert("Message sent successfully!");
        form.reset(); // Clear all fields
        } else {
        alert("Error sending message. Please try again.");
        }
    })
    .catch(() => alert("Network error. Please try again."));
});
});


