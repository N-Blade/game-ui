import React, { FC } from 'react'
import cn from 'classnames'

import { IButtonProps } from './types'

import styles from './Button.module.sass'

const Button: FC<IButtonProps> = ({ children, className, disabled, onClick, type = 'normal' }) => (
  <button
    className={cn(styles.button, styles[`button-${type}`], className)}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
