import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(
  View,
  {
    w: '$5',
    h: '$5',
    bg: '$success500',
    borderRadius: '$full',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderColor: 'white',
    borderWidth: 2,
  },
  {
    componentName: 'AvatarBadge',
    ancestorStyle: ['_badge'],
  } as const
);
