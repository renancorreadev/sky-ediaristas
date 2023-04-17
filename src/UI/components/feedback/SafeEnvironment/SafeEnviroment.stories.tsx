import type { ComponentMeta, ComponentStory } from '@storybook/react';

import SafeEnvironment from './SafeEnvironment';

export default {
  title: 'feedback/SafeEnvironment',
  component: SafeEnvironment,
} as ComponentMeta<typeof SafeEnvironment>;

// eslint-disable-next-line unused-imports/no-unused-vars
const Template: ComponentStory<typeof SafeEnvironment> = (args) => {
  return <SafeEnvironment />;
};

export const Default = Template.bind({});

Default.args = {};
