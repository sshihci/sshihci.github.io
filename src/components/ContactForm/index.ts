import { ContactForm as RootContactForm } from './ContactForm'
import ContactFormField from './ContactFormField'

type ContactForm = typeof RootContactForm & {
  Field: typeof ContactFormField
}

const ContactForm = RootContactForm as ContactForm
ContactForm.Field = ContactFormField

export default ContactForm
