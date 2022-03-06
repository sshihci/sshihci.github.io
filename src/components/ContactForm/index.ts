import { ContactForm as RootContactForm } from './ContactForm'
import { ContactFormButton } from './ContactFormButton'
import ContactFormField from './ContactFormField'

type ContactForm = typeof RootContactForm & {
  Field: typeof ContactFormField
  Button: typeof ContactFormButton
}

const ContactForm = RootContactForm as ContactForm
ContactForm.Field = ContactFormField
ContactForm.Button = ContactFormButton

export default ContactForm
