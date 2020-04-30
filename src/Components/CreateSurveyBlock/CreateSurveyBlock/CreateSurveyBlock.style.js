import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  createSurveyBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    padding: `${theme.customSpacing.small} ${theme.customSpacing.base}`,
    width: '100%',
    '@media only screen and (min-width: 600px)': {
      padding: `${theme.customSpacing.base}`
    }
  },
  blockTitleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  createSurveyWrapper: {
    marginTop: `${theme.customSpacing.base}`,
    '@media only screen and (min-width: 600px)': {
      marginTop: `${theme.customSpacing.large}`
    }
  },
  titleWrapper: {
    height: '160px',
    paddingBottom: `${theme.customSpacing.base}`,
    '@media only screen and (min-width: 600px)': {
      height: '114px',
      padding: `${theme.customSpacing.base} 0`
    }
  }
}));