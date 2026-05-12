type TagProps = {
  label: string
  size?: 'sm' | 'md'
  variant?: 'light' | 'dark'
}

export function Tag({
  label,
  size = 'md',
  variant = 'light',
}: TagProps) {
  return (
    <span className={`tag tag--${size} tag--${variant}`}>
      {label}
    </span>
  )
}