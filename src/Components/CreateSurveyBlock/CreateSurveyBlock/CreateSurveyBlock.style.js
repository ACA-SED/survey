import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  createSurveyBlockContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: `${theme.borders.borderRadius.base}`,
    boxShadow: `${theme.boxShadow.base}`,
    boxSizing: 'border-box',
    padding: `0 ${theme.customSpacing.small} ${theme.customSpacing.base}`
  },
  createSurveyBlockBlockTitleWrapper: {
    display: 'flex',
    justifyContent: 'center'
  },
  createSurveyBlockCreateSurveyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: `${theme.customSpacing.large}`,
    padding: `0 ${theme.customSpacing.small}`
  },
  createSurveyBlockTitleWrapper: {
    height: '114px'
  }
}));