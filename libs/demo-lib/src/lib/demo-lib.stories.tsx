import React from 'react';
import { DemoLib, DemoLibProps } from './demo-lib';

export default {
  component: DemoLib,
  title: 'DemoLib',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: DemoLibProps = {};

  return <DemoLib />;
};
