import type { Actions } from './$types';
import Email from '$lib/components/Email.svelte';
import { render } from 'svelte-email';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const message = data.get('message')?.toString();

		const transporter = nodemailer.createTransport({
			host: 'smtp-relay.sendinblue.com',
			port: 587,
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
			subject: 'New Message From Portfolio Form',
			html: emailHtml
		};

		transporter
			.sendMail(options)
			.then((info) => {
				console.log(info);
				return json({ message: 'success' });
			})
			.catch((err) => {
				console.error(err);
				throw new Error(err);
			});
	}
};
