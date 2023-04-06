// Sveltekit load function for the page that accepts form data and emails it out to the site owner
export const actions = {
  default: async ({request}) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    // Send email here
    
  }
};