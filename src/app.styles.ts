import { css } from '@emotion/react'
import Theme from '@/theme'

export const App = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: Theme.fonts.size.medium,
  color: Theme.colors.primaryColor,
  fontFamily: Theme.fonts.family,
})
