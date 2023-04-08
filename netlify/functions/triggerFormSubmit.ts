import { Handler } from '@netlify/functions';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const handler: Handler = async function (event) {
	if (event.body === null) {
		return {
			statusCode: 400,
			body: JSON.stringify('Payload required')
		};
	}

	const requestBody = JSON.parse(event.body) as FormData;

	const name = requestBody.get('name') as string;
	const email = requestBody.get('email') as string;
	const message = requestBody.get('message') as string;

	try {
		await fetch(`https://giomascardo.com/.netlify/functions/emails/formSubmit`, {
			headers: {
				'netlify-emails-secret': process.env.NETLIFY_EMAILS_SECRET as string
			},
			method: 'POST',
			body: JSON.stringify({
				from: process.env.EMAIL,
				to: process.env.EMAIL,
				subject: 'New Message From Portfolio Form',
				parameters: {
					name: name,
					email: email,
					message: message
				}
			})
		});

		return {
			statusCode: 200,
			body: JSON.stringify('Subscribe email sent!')
		};
	} catch (err) {
		console.log(err);
		return {
			statusCode: 500,
			body: JSON.stringify('Error sending email')
		};
	}
};

export { handler };
