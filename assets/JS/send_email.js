function sendMail(contactForm) {
	emailjs.send("outlook", "la_briere_project", {
			"from_name": contactForm.name.value,
			"from_email": contactForm.emailaddress.value,
			"demande_reservation": contactForm.projectsummary.value
		})
		.then(
			function (response) {
				console.log("SUCCESS", response);
				setTimeout(location.href = 'after_send_success.html', 100)
			},
			function (error) {
                console.log("FAILED", error);
                setTimeout(location.href = 'after_send_fail.html', 100)
			}
		);
	return false;
}