import { Dispatch, SetStateAction } from 'react'
import styles from './NumberSelector.styles'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

type NumberSelectorProps = {
  title: string
  value: number
  setAgeValue: Dispatch<SetStateAction<number>>
}

export const NumberSelector = ({
  title,
  value,
  setAgeValue,
}: NumberSelectorProps) => {
  const handleInputUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10)
    setAgeValue(newValue)
  }

  return (
    <div>
      <h4 css={styles.title}>{title}</h4>
      <div css={styles.container}>
        <input
          css={styles.input}
          type="number"
          value={value}
          onChange={(event) => handleInputUpdate(event)}
        />
        <div css={styles.buttonContainer}>
          <button
            css={styles.button}
            onClick={() => setAgeValue((prev) => prev + 1)}
          >
            <IoIosArrowUp color="#939292" />
          </button>
          <button
            css={styles.button}
            onClick={() => setAgeValue((prev) => prev - 1)}
          >
            <IoIosArrowDown color="#939292" />
          </button>
        </div>
      </div>
    </div>
  )
}
