import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  developerInfo: {
    padding: `${theme.customSpacing.small}`,
    marginBottom: theme.customSpacing.base,
  },
  socialWrapper: {
    marginLeft: theme.customSpacing.xLarge,
  },
  socialSection: {
    '& .MuiListItem-gutters': {
      padding: 0,
      alignItems: 'start',
      '& .MuiListItemIcon-root': {
        minWidth: 30
      }
    }
  },
  iconContainer: {
    marginRight: `${theme.customSpacing.small}`
  },
  icon: {
    height: '20px',
    width: '20px'
  },
  link: {
    display: 'flex',
    color: `${theme.customTypography.fontColor.base}`,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));
