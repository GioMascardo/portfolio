import { error } from '@sveltejs/kit';
import fetch from 'node-fetch';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const message = data.get('message')?.toString();

		// Send email here
		try {
			await fetch(`https://giomascardo.com/.netlify/functions/emails/form-submission`, {
				headers: {
					'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET as string
				},
				method: 'POST',
				body: JSON.stringify({
					from: process.env.EMAIL,
					to: process.env.EMAIL,
					subject: 'New Message From Portfolio Site',
					parameters: {
						name: name,
						email: email,
						message: message
					}
				})
			});

			return { success: true };
		} catch (err) {
			console.error(err);
			throw error(500, 'Something went wrong');
		}
	}
};
