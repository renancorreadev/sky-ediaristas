import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Link from './Link';

export default {
  title: 'navigation/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
  href: '/#',
  children: 'click',
};
