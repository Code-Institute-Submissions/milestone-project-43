  
function sendMail(contactForm) {
    emailjs.send("outlook", "la_briere_project", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "demande_reservation": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}