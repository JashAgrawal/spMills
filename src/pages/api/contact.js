import { mailOptions, transporter } from "@/config/nodemailer";
const generateEmailContent = (data) => {
	const html = `
	<table style="text-align:center;border:1px solid black" style="width:100%">
  <tr>
    <th style="text-align:center;border:1px solid black">Name</th>
    <th style="text-align:center;border:1px solid black">Email</th>
    <th style="text-align:center;border:1px solid black">message</th>
  </tr>
  <tr>
    <td style="text-align:center;border:1px solid black">${data.name}</td>
    <td style="text-align:center;border:1px solid black">${data.email}</td>
    <td style="text-align:center;border:1px solid black">${data.message}</td>
  </tr>
</table>
	
	`;
	return html;
};
const handler = async (req, res) => {
	console.log(!req.body.name);
	if (!req.body.name || !req.body.email || !req.body.message) {
		return res.status(400).json({ message: "Bad Request" });
	}
	try {
		console.log(mailOptions);
		await transporter.sendMail({
			...mailOptions,
			subject: "New User Requested",
			text: `${req.body.name} has Posted a Query`,
			html: generateEmailContent(req.body),
		});
		return res.status(200).json({ message: "Mail sent Successfully" });
	} catch (err) {
		console.log(err);
		return res.status(400).json({ message: err.message });
	}
};
export default handler;
