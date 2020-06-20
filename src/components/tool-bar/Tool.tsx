import React, { SFC, useCallback } from 'react';
import { Icon } from '../../icons/Icon';
import { IconButton, Separator } from '@storybook/components';
import { API } from '@storybook/api';

export interface ToolProps {
  api?: API;
}

const Tool: SFC<ToolProps> = () => {
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <>
      <Separator />
      <IconButton onClick={handleClick} key="tool" title="tool icon">
        <Icon />
      </IconButton>
      <Separator />
    </>
  );
};

Tool.displayName = 'Tool';

export { Tool };
