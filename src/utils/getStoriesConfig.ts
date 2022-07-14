import { FC } from 'react'

interface IConfigParams {
  description?: string
  status?: 'develop' | 'ready'
}

export default <P>(component: FC<P>, config?: IConfigParams) => ({
  component,
  parameters: {
    docs: {
      description: {
        component: config?.description,
      },
    },
    status: config?.status || 'develop',
  },
  title: component.displayName,
})
