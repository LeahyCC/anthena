import { css } from '@emotion/react'
import Theme from '@/theme'

const baseStyles = {
  fontWeight: Theme.fonts.weight.bold,
  lineHeight: 0.5,
  padding: '16px 8px',
  borderRadius: Theme.border.radius.large,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
}

const styles = {
  primaryStyles: css({
    backgroundColor: Theme.colors.primaryColor,
    color: Theme.colors.highlightColor,
    ...baseStyles,
  }),
  secondaryStyles: css({
    backgroundColor: Theme.colors.white,
    color: Theme.colors.primaryColor,
    border: `1px solid ${Theme.colors.primaryColor}`,
    ...baseStyles,
  }),
}

export default styles
