import React, { FC, memo } from 'react'

import Button from 'components/Button'

import { DEFAULT_ACTIVE_POINTS, DEFAULT_MAX_POINTS } from './store'
import img from './images/element.png'
import Svg from './images/test.svg'

import { IProgressProps } from './types'

import styles from './Progress.module.sass'

const Progress: FC<IProgressProps> = ({
  countActivePoints = DEFAULT_ACTIVE_POINTS,
  countPoints = DEFAULT_MAX_POINTS,
  onMinusClick,
  onPlusClick,
}) => (
  <div>
    <div>
      {[...Array(countPoints)].map((_, index) => (
        <>
          <img key={index} src={img} />
          <Svg key={index} />
        </>
      ))}
    </div>
    <div>
      <Button onClick={onPlusClick}>+</Button>

      {onMinusClick && <Button onClick={onMinusClick}>-</Button>}
    </div>
  </div>
)

export default memo(Progress)
