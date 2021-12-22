import clsx from 'clsx'
import { FormEventHandler, forwardRef, useCallback } from 'react'
import { useToasts } from 'react-toast-notifications'

export const ContactForm = forwardRef<
  HTMLFormElement,
  JSX.IntrinsicElements['form']
>(({ className, children, ...props }, ref) => {
  const { addToast } = useToasts()

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    (e) => {
      setTimeout(() => {
        if (e.target instanceof HTMLFormElement) {
          e.target.reset()
        }
        addToast('お問い合わせありがとうございます。', { autoDismiss: true })
      })
    },
    [addToast],
  )

  return (
    <form
      className={clsx('', className)}
      method="POST"
      onSubmit={onSubmit}
      ref={ref}
      target="contact-form-iframe"
      {...props}
    >
      {children}

      <iframe className="hidden" name="contact-form-iframe" />
    </form>
  )
})
