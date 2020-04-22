import React from 'react';
import addons, { types } from '@storybook/addons';
import { ADDON_ID } from './constants';
import { Tool } from './components/tool';
import { DemoPanel } from './components/panel';
// import { Preview } from './components';

const PANEL_ID = `${ADDON_ID}/new-panel`;
const TOOL_ID = `${ADDON_ID}/new-tool`;

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    render: () => <Tool api={api} />,
    title: 'Addon tool',
    type: types.TOOL,
  });

  addons.add(PANEL_ID, {
    render: () => <DemoPanel api={api} />,
    title: 'Addon panel',
    type: types.PANEL,
  });

  // addons.add(PANEL_ID, {
  //   render: Preview as any,
  //   title: 'Addon Preview',
  //   type: types.PREVIEW,
  // });
});
