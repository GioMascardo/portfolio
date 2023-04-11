import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Email from '$lib/components/Email.svelte';
import { render } from 'svelte-email';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();
	const name = data.get('name')?.toString();
	const email = data.get('email')?.toString();
	const message = data.get('message')?.toString();

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
		subject: 'New Message From Portfolio Form',
		html: emailHtml
	};

	const response = transporter.sendMail(options);

	return json(response);
};
