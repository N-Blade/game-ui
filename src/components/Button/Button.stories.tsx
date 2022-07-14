import React from 'react'
import { Story } from '@storybook/react'

import Button from './Button'

import getStoriesConfig from 'utils/getStoriesConfig'

import { IButtonProps } from './types'

export default getStoriesConfig(Button)

const Template: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Применить',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Применить',
  disabled: true,
}

export const Circle = Template.bind({})
Circle.args = {
  children: '+',
  type: 'circle',
}
