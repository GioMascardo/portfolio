import { render } from 'svelte-email';
import Email from '$lib/components/Email.svelte';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const message = data.get('message')?.toString();

		// Send email here
		const transporter = nodemailer.createTransport({
			host: 'smtp-relay.sendinblue.com',
			port: 587,
			secure: false,
			auth: {
				user: env.EMAIL,
				pass: env.SENDINBLUE_SMTP_PASS
			}
		});

		const emailHtml = render({
			template: Email,
			props: {
				name: name,
				email: email,
				message: message
			}
		});

		const options = {
			from: env.EMAIL,
			to: env.EMAIL,
			subject: 'New Message From Portfolio',
			html: emailHtml
		};

		transporter
			.sendMail(options)
			.then((response) => {
				console.log(response.response);

				return {
					status: 202,
					body: 'Email sent.'
				};
			})
			.catch((err) => {
				console.log(err);
				throw error(500, 'Error sending email');
			});
	}
};
