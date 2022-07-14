export interface IProgressProps {
  /* количество активных очков */
  countActivePoints?: number
  /* количество очков для отображения */
  countPoints?: number
  /* атрибут неактивной полосы прогресса*/
  disabled?: boolean
  /* событие срабатывающее при клике на значок минус */
  onMinusClick?(): void
  /* событие срабатывающее при клике на значок плюс */
  onPlusClick(): void
}
