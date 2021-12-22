import clsx from 'clsx'
import GatsbyLink from 'gatsby-link'
import { forwardRef } from 'react'

export const NewsListItem = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['section'] & {
    newsId: string
  }
>(({ className, newsId, ...props }, ref) => {
  return (
    <li>
      <GatsbyLink to={`/news/${newsId}`}>
        <section
          className={clsx(
            'flex flex-col-reverse mx-auto max-w-4xl border-b border-cyan-600',
            className,
          )}
          {...props}
          ref={ref}
        />
      </GatsbyLink>
    </li>
  )
})
