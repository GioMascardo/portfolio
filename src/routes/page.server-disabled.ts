// import { error } from '@sveltejs/kit';
// import { render } from 'svelte-email';
// import Email from '$lib/components/Email.svelte';
// import nodemailer from 'nodemailer';
// import { SENDINBLUE_SMTP_PASS } from '$env/static/private';

// const transporter = nodemailer.createTransport({
// 	host: 'smtp-relay.sendinblue.com',
// 	port: 587,
// 	secure: false,
// 	auth: {
// 		user: 'mascardogio@gmail.com',
// 		pass: SENDINBLUE_SMTP_PASS
// 	}
// });

// export const actions = {
// 	send: async ({ request }) => {
// 		const data = await request.formData();
// 		const name = data.get('name')?.toString();
// 		const email = data.get('email')?.toString();
// 		const message = data.get('message')?.toString();

// 		// Send email here
// 		const emailHtml = render({
// 			template: Email,
// 			props: {
// 				name: name,
// 				email: email,
// 				message: message
// 			}
// 		});

// 		const options = {
// 			from: 'mascardogio@gmail.com',
// 			to: 'mascardogio@gmail.com',
// 			subject: 'New Message From Portfolio Form',
// 			html: emailHtml
// 		};

// 		transporter
// 			.sendMail(options)
// 			.then((res) => {
// 				console.log(res.response, res.messageId);
// 				return { success: true };
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 				throw error(500, 'Error sending email');
// 			});
// 	}
// };
