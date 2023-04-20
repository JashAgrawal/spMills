const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
export default async function handler(req, res) {
	try {
		let testAccount = {
			gmail: "malj14326@gmail.com",
			password: "NetFreak@12301",
		};

		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			service: "gmail",
			secure: false, // true for 465, false for other ports
			auth: {
				user: testAccount.gmail,
				type: "OAUTH2",
				serviceClient: "107059692866799676954",
				privateKey:
					
			},
		});
		let info = await transporter.sendMail({
			from: "malj14326@gmail.com", // sender address
			to: "agrawaljash99@gmail.com", // list of receivers
			subject: "Hello ✔", // Subject line
			text: "Hello world?", // plain text body
			html: "<b>Hello world?</b>", // html body
		});

		res.status(200).json({ name: info });
	} catch (err) {
		res.status(500).json({ error: err });
	}
}
