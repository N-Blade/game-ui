import { ReactNode } from 'react'

export type TButtonTypes = 'normal' | 'circle'

export interface IButtonProps {
  /* контент для кнопки */
  children: ReactNode
  /* дополнительные стили */
  className?: string
  /* атрибут неактивной кнопки */
  disabled?: boolean
  /* событие срабатывающее при клике */
  onClick(): void
  /* тип кнопки */
  type?: TButtonTypes
}
