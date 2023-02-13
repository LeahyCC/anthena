import styles from './Button.styles'
import classNames from 'classnames'

type ButtonProps = {
  text: string | number
  onClick?: () => void
  isPrimary?: boolean
}

export const Button = ({ onClick, text, isPrimary = true }: ButtonProps) => {
  return (
    <button onClick={onClick} css={styles(isPrimary)}>
      {text}
    </button>
  )
}
