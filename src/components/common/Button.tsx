import { teal } from '@radix-ui/colors';
import { styled } from '@stitches/react';

export const Button = styled('button', {
  all: 'unset',
  padding: '12px 16px',
  border: '1px solid currentColor',
  borderRadius: 9999,
  fontSize: 16,
  color: teal.teal11,
  cursor: 'pointer',
  transitionDuration: '0.2s',

  '&:hover': {
    borderColor: teal.teal11,
    color: teal.teal1,
    backgroundColor: teal.teal11,
  },
});
