import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from '.';

export default {
  title: 'Surfaces/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
