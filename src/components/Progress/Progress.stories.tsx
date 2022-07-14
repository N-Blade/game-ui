import React from 'react'

import Progress from './Progress'

import getStoriesConfig from 'utils/getStoriesConfig'

export default getStoriesConfig(Progress)

export const Default = () => {
  return <Progress />
}
