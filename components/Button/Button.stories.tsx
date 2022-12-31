import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Buttonコンポーネントの説明文上書き"
      }
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>ボタン</Button>
)

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: "outlined"
}

export const Attention = Template.bind({})
Attention.args = {
  variant: "attention"
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  fullWidth: true
}
FullWidth.storyName = "FullWidth(モバイル向け)"