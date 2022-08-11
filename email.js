function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<kingvsqueen3528@gmail.com>",
	Password : "<kingvsqueen>",
	To : '<pradeepkumarbalu2001@gmail.com>',
	From : "<>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}