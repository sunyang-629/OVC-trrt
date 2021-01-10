import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

type IconLabelButtonsProps = {
  icon: JSX.Element,
  label: string,
  click: Function
}

const IconLabelButtons:React.FunctionComponent<IconLabelButtonsProps> = ({icon,label,click}) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={icon}
        onClick={() => click()}
      >
        {label}
      </Button>
      
    </div>
  );
}

export default IconLabelButtons;