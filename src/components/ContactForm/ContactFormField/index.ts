import { ContactFormField as RootContactFormField } from './ContactFormField'
import { ContactFormFieldInput } from './ContactFormFieldInput'
import { ContactFormFieldLabel } from './ContactFormFieldLabel'
import { ContactFormFieldTextarea } from './ContactFormFieldTextarea'

type ContactFormField = typeof RootContactFormField & {
  Label: typeof ContactFormFieldLabel
  Input: typeof ContactFormFieldInput
  Textarea: typeof ContactFormFieldTextarea
}

const ContactFormField = RootContactFormField as ContactFormField
ContactFormField.Label = ContactFormFieldLabel
ContactFormField.Input = ContactFormFieldInput
ContactFormField.Textarea = ContactFormFieldTextarea

export default ContactFormField
