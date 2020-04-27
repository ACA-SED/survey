import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.customSpacing.base
  },
  answerDetails: {
    border: `1px solid ${theme.color.mainColorDarkBlue}`,
    borderRadius: theme.customSpacing.small,
    padding: theme.customSpacing.base,
    margin: theme.customSpacing.base,

  },
  avarageVal: {
    border: `1px solid ${theme.colors}`
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  rangeBarChart: {
    margin: `${theme.customSpacing.small} ${theme.customSpacing.xxxLarge} ${theme.customSpacing.xxLarge} ${theme.customSpacing.small}`
  },
  chartList: {
    position: 'relative',
    right: 34
  }
}));
