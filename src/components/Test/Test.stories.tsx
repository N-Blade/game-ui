import React from 'react';

import getStoriesConfig from 'utils/getStoriesConfig';

import Test from './Test';

export default getStoriesConfig(Test);

export const Default = () => <Test />;
