import type { ComponentMeta } from '@storybook/react-native';
import Textarea from './Textarea';

const TextareaMeta: ComponentMeta<typeof Textarea> = {
  title: 'stories/FORMS/Textarea',
  component: Textarea,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isHovered: {
      control: 'boolean',
      options: [true, false],
    },
    isFocused: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isInvalid: false,
    isHovered: false,
    isFocused: false,
    isDisabled: false,
  },
};

export default TextareaMeta;

export { Textarea };
