import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  theme => ({
    surveyTitleCreatorContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    textFieldWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '@media only screen and (min-width: 600px)': {
        flexDirection: 'row',
        justifyContent: 'center'
      }
    },
    titleLabel: {
      display: 'flex',
      alignItems: 'center',
      height: '48px',
      '@media only screen and (min-width: 600px)': {
        paddingRight: `${theme.customSpacing.base}`
      }
    },
    textFieldSection: {
      width: '80%',
      '@media only screen and (min-width: 600px)': {
        width: '50%'
      }
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      cursor: 'not-allowed',
      marginTop: `${theme.customSpacing.base}`
    },
    button: {
      backgroundColor: `${theme.color.mainColorGreen}`,
      color: 'white',
      '&:hover': {
        backgroundColor: `${theme.color.buttonHoverColorGreen}`
      },
      '&$disabled': {
        pointerEvents: 'none'
      }
    },
    disabled: {}
  }),
  { name: 'MuiButton' }
);