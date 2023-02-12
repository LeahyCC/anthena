import { css } from '@emotion/react'
import Theme from '@/theme'

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minWidth: '420px',
    backgroundColor: Theme.colors.white,
  }),
  header: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.green,
    color: Theme.text.primaryColor,
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
    color: Theme.text.primaryColor,
    fontSize: Theme.fonts.size.xxLarge,
    fontWeight: Theme.fonts.weight.extraBold,
    textShadow: Theme.boxShadow.primary,
    marginBottom: '8px',
  }),
  contentSubHeader: css({
    textAlign: 'center',
    fontSize: Theme.fonts.size.xLarge,
    color: Theme.text.secondaryColor,
    marginBottom: '8px',
  }),
}

export default styles
