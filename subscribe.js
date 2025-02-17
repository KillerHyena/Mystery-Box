document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    console.log('Subscription Data:', { name, email, phone, message });

    // You can add logic to send data to the backend here.
    alert("Thank you for subscribing!");
});
