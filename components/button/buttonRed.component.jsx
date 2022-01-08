import { Button } from '@mui/material';
import { redColor } from '@styles/theme.module.scss';

const ButtonRed = props => {
  const p = {
    variant: props.variant || 'contained',
    size: props.size || 'large',
    style: {
      backgroundColor: redColor,
      ...props.style,
    },
  };

  return (
    <Button variant={p.variant} size={p.size} style={p.style} className={props.className} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default ButtonRed;
