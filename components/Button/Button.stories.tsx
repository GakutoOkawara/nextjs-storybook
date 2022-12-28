import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: "ボタン"
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: "ボタン"
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: "outlined",
  children: "ボタン"
}

export const Attention = Template.bind({})
Attention.args = {
  variant: "attention",
  children: "ボタン"
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true,
  children: "ボタン"
}