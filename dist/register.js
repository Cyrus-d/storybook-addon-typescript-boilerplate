"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const addons_1 = require("@storybook/addons");
const constants_1 = require("./constants");
const PANEL_ID = `${constants_1.ADDON_ID}/new-panel`;
const Panel = () => {
    return React.createElement("div", null, "add on");
};
Panel.displayName = 'Panel';
addons_1.default.register(constants_1.ADDON_ID, (_api) => {
    addons_1.default.add(PANEL_ID, {
        render: () => React.createElement(Panel, null),
        title: 'Addon panel',
        type: addons_1.types.PANEL,
    });
});
//# sourceMappingURL=register.js.map