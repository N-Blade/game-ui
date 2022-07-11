import React, { FC, memo } from 'react';

const Test: FC<{ text?: string }> = ({ text }) => (
  <>
    <div>Привет мир</div>

    {text && <div>{text}</div>}
  </>
);

export default memo(Test);
