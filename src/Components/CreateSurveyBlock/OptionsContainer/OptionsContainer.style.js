import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column'
    // height: '268px'
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  inputWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.large}`
  },
  textFieldWrapper: {
    width: '60%'
  },
  chipsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.large}`
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    border: `2px solid ${theme.color.mainColorGreen}`,
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxSizing: 'border-box',
    height: '114px',
    overflowY: 'auto',
    padding: `${theme.customSpacing.small}`,
    width: '60%'
  },
  chip: {
    margin: `${theme.customSpacing.small}`,
    maxWidth: '47%'
  },
  checkboxWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  checkboxSection: {
    width: '60%'
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `${theme.customSpacing.base}`
  },
  button: {
    backgroundColor: `${theme.color.mainColorGreen}`,
    color: 'white',
    '&:hover': {
      backgroundColor: `${theme.color.buttonHoverColorGreen}`
    }
  }
}));