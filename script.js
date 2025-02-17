// Subscription Button Click Event
function subscribe() {
    const messages = [
        "A surprise awaits...", 
        "You've unlocked something special!", 
        "Mystery is coming your way!", 
        "Your fate is sealed... or is it?"
    ];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// Form Submission Handling
document.querySelector("#subscribe form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    let email = document.querySelector("#subscribe input").value;
    if(email) {
        document.querySelector("#subscribe input").value = ""; // Clear input field
        revealSecretMessage(email);
    } else {
        alert("Please enter a valid email.");
    }
});

// Secret Message Reveal Function
function revealSecretMessage(email) {
    let secretBox = document.createElement("div");
    secretBox.classList.add("secret-box");
    secretBox.innerHTML = `
        <p>Thank you, <strong>${email}</strong>! A hidden clue has been unlocked...</p>
        <p class="clue">Watch the shadows, listen to the whispers...</p>
    `;
    document.body.appendChild(secretBox);
    setTimeout(() => {
        secretBox.classList.add("fade-out");
        setTimeout(() => secretBox.remove(), 2000);
    }, 5000);
}

// Mystery Background Effect
document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;
    for (let i = 0; i < 20; i++) {
        let glow = document.createElement("div");
        glow.classList.add("glowing-circle");
        glow.style.top = Math.random() * 100 + "vh";
        glow.style.left = Math.random() * 100 + "vw";
        glow.style.animationDuration = (Math.random() * 5 + 5) + "s";
        body.appendChild(glow);
    }
});
