import React from 'react';
import addons, { types } from '@storybook/addons';
import { ADDON_ID } from './constants';
import { Panel } from './components';

const PANEL_ID = `${ADDON_ID}/new-panel`;

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    // eslint-disable-next-line react/display-name
    render: () => <Panel {...api} />,
    title: 'Addon panel',
    type: types.PANEL,
  });
});
