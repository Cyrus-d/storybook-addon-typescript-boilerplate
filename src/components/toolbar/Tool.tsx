import React, { SFC, useCallback } from 'react';
import { Icon } from '../../icons/Icon';
import { IconButton, Separator } from '@storybook/components';
import { API, useStorybookApi } from '@storybook/api';

export interface ToolProps {
  api?: API;
}

const Tool: SFC<ToolProps> = () => {
  const api = useStorybookApi();

  const handleClick = useCallback(() => {
    console.log((api.getCurrentStoryData() as any).parameters.fileName);
  }, [api]);

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
