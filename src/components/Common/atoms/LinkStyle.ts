import clsx from 'clsx'

export const LinkStyle = clsx(
  'overflow-hidden relative py-1.5 px-16 text-sm bg-gray-50 border border-cyan-600 text-cyan-600',
  'before:absolute before:w-full before:h-full before:bg-blue-200 before:bg-opacity-30 before:duration-200',
  'before:top-0 before:right-full hover:before:right-0',
  'hover:rounded-2xl duration-500',
)
