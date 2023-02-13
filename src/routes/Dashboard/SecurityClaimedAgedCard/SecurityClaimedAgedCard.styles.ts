import { css } from '@emotion/react'
import Theme from '@/theme'

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '420px',
    backgroundColor: Theme.colors.white,
  }),
  header: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.green,
    color: Theme.colors.primaryColor,
    padding: '4px 0',
    fontWeight: Theme.fonts.weight.extraBold,
    boxShadow: Theme.boxShadow.primary,
  }),
  content: css({
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
  }),
  contentHeader: css({
    textAlign: 'center',
    color: Theme.colors.primaryColor,
    fontSize: Theme.fonts.size.xxLarge,
    fontWeight: Theme.fonts.weight.extraBold,
    textShadow: Theme.boxShadow.primary,
    marginBottom: '8px',
  }),
  contentSubHeader: css({
    textAlign: 'center',
    fontSize: Theme.fonts.size.xLarge,
    color: Theme.colors.secondaryColor,
    marginBottom: '8px',
  }),
  buttonWrapper: css({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',

    '> button': {
      width: '100%',
    },

    '> button:not(:last-of-type)': {
      marginRight: '8px',
    },
  }),
}

export default styles
