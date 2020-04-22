import * as React from 'react';
import addons, { types } from '@storybook/addons';
import { ADDON_ID } from './constants';

const PANEL_ID = `${ADDON_ID}/new-panel`;

const Panel = () => {
  return <div>add on</div>;
};

Panel.displayName = 'Panel';

addons.register(ADDON_ID, (_api) => {
  addons.add(PANEL_ID, {
    // eslint-disable-next-line react/display-name
    render: () => <Panel />,
    title: 'Addon panel',
    type: types.PANEL,
  });
});
