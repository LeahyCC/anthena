import styles from './Button.styles'

type ButtonProps = {
  text: string | number
  onClick?: () => void
  isPrimary?: boolean
}

export const Button = ({ onClick, text, isPrimary = true }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      css={[isPrimary ? styles.primaryStyles : styles.secondaryStyles]}
    >
      {text}
    </button>
  )
}
