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

const styles = (isPrimary: boolean) =>
  css({
    ...baseStyles,
    backgroundColor: isPrimary ? Theme.colors.primaryColor : Theme.colors.white,
    color: isPrimary ? Theme.colors.highlightColor : Theme.colors.primaryColor,
    border: isPrimary ? 'none' : `1px solid ${Theme.colors.primaryColor}`,
  })

export default styles
