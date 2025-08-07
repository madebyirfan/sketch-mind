'use server'

type ContactFormState = {
  message: string
  errors: Record<string, string>
}

export default async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''

  const errors: Record<string, string> = {}

  if (!name) errors.name = 'Name is required.'
  if (!email || !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(email)) {
    errors.email = 'Valid email is required.'
  }
  if (!message || message.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  if (Object.keys(errors).length > 0) {
    return { message: '', errors }
  }

  // Simulate success response (e.g. save to DB or send email)
  return {
    message: 'Your message has been sent successfully!',
    errors: {},
  }
}
