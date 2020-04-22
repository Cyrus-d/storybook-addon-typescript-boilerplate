import React, { SFC } from 'react';
import { API } from '@storybook/api';

const Panel: SFC<API> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = props;

  return <div>add on</div>;
};

Panel.displayName = 'Panel';

export { Panel };
