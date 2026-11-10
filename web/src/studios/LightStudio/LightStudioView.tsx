import React from 'react';
import { ConfigPanel } from '../../components/ConfigPanel';
import { PropCatalog } from '../../components/PropCatalog';

export const LightStudioView: React.FC = () => {
  return (
    <>
      <ConfigPanel />
      <PropCatalog />
    </>
  );
};

