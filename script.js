console.log("Script loaded");

document.getElementById("emailForm").addEventListener("submit", function(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.match(emailRegex)){
        document.querySelector('.outer-ctn').style.display = 'none';
        document.querySelector('.success-ctn').style.display = 'block';

        // Update the success message with the captured email
        var successMessage = document.getElementById("success-message");
        successMessage.innerHTML = `A confirmation email has been sent to <span id="email-placeholder">${email}</span>. Please open it and click the button inside to confirm your subscription.`;
    } else{
        alert('Invalid email address');
    }
});
document.getElementById("success-btn").addEventListener("click", function() {
    location.reload();
});


