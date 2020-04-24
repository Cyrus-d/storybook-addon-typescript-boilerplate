import React, { SFC } from 'react';
import { API } from '@storybook/api';
import { RenderOptions } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';

interface DemoPanelProps extends RenderOptions {
  api: API;
}

const DemoPanel: SFC<DemoPanelProps> = (props) => {
  const { active, key } = props;
  return (
    <AddonPanel active={active} key={key}>
      <div>add on panel</div>
    </AddonPanel>
  );
};

DemoPanel.displayName = 'DemoPanel';

export { DemoPanel };
