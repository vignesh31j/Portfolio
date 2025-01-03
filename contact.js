// Initialize EmailJS
(function () {
    emailjs.init("lOFv0MAGGDbncv4cs"); // Replace with your EmailJS user ID
})();

// Function to send the email
function sendEmail() {
    // Prevent form submission from reloading the page
    event.preventDefault();

    // Retrieve input values
    const fromName = document.getElementById("firstname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate input fields
    if (!fromName || !email || !message) {
        Swal.fire({
            icon: 'warning',
            title: 'Incomplete Information',
            text: 'Please fill out all the fields before sending.',
            confirmButtonText: 'OK',
        });
        return false;
    }

    // Template parameters
    const templateParams = {
        from_name: fromName, // Corrected the variable name
        email: email,
        message: message,
    };

    // Send email using EmailJS
    emailjs.send("service_4xvec0f", "template_mc394x9", templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for connecting. I will get back to you soon!',
                confirmButtonText: 'OK',
                timer: 3000,
                timerProgressBar: true,
                willClose: () => {
                    document.getElementById("contact-form").reset(); // Clear the form
                }
            });
        })
        .catch(function (error) {
            console.error('FAILED...', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to send your message. Please try again later.',
                confirmButtonText: 'Retry',
            });
        });

    return false; // Prevent form submission
}