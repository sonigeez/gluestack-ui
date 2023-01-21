import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        p: '$4',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        borderTopWidth: 1,
        bg: '$white',
        borderColor: '$muted200',
      },
      colorMode: {
        dark: {
          style: {
            bg: '$muted800',
            borderColor: '$muted700',
          },
        },
      },
    },
  },
  {}
);
