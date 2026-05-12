import type { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  withDot?: boolean
  href?: string
  target?: string
  rel?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  withDot = false,
  href,
  target,
  rel,
  type = 'button',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `button button--${variant} button--${size} ${withDot ? 'button--with-dot' : ''} ${className}`

  const inner = (
    <>
      <span>{children}</span>
      {withDot && <span className="button__dot" aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {inner}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {inner}
    </button>
  )
}