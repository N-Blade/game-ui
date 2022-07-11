import { ComponentType, MemoExoticComponent, NamedExoticComponent } from 'react';

type TMemo = MemoExoticComponent<ComponentType>;

type TStoriesComponent = ComponentType | NamedExoticComponent | TMemo;

interface IConfigParams {
  description?: string;
  status?: 'develop' | 'ready';
}

export default (component: TStoriesComponent, config?: IConfigParams) => ({
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
});
