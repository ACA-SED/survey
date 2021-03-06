import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: theme.customSpacing.base,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.customSpacing.base} ${theme.customSpacing.large} ${theme.customSpacing.base} ${theme.customSpacing.small}`,
    '@media screen and (max-width: 600px)': {
      flexDirection: 'column',
      paddingBottom: theme.customSpacing.base
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '800px',
    height: '500px',
    overflowY: 'auto',
    border: '1px solid grey',
    borderRadius: '10px',

    '&:focus': {
      outline: 'none'
    }
  },
  modalButton: {
    margin: 18
  },
  modalList: {}
}));
