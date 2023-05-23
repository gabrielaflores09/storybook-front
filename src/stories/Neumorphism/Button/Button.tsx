import React from 'react'
import './Button.scss'

interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  label: string
  icon: any
  borderRadius: string
  onClick?: () => void
  className: string
}

export const Button = ({
  size = 'small',
  label,
  borderRadius = '65px',
  icon: Icon,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <div
      className={`button ${size} ${className}`}
      {...props}
      style={{
        borderRadius: borderRadius || '65px',
      }}
    >
      {Icon && (
        <div className={size}>
          <Icon />
        </div>
      )}
      {label && <span className="label">{label}</span>}
    </div>
  )
}
