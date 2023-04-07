<script>
	// @ts-ignore
	import { Container, Hr, Html, Text } from 'svelte-email';

	export let name = 'Unknown';
	export let email = 'Missing email';
	export let message = 'Missing message';
</script>

<Html lang="en">
	<Text>
		{name} sent a message
	</Text>
	<Hr />
	<Text>
		Email: {email}
	</Text>
	<Hr />
	<Container>
		<Text>
			{message}
		</Text>
	</Container>
</Html>
