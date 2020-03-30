import GLOBAL_STYLES from '../../../Theme/GlobalStyles';

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: `${GLOBAL_STYLES.spacing.small}`
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%'
  },
  titleLabel: {
    display: 'flex',
    padding: `0 ${GLOBAL_STYLES.spacing.xxLarge}`
  },
  editIcon: {
    position: 'absolute',
    right: 0
  }
};
