import { useState } from 'react'

import styles from './SecurityClaimedAgedCard.styles'
import { Button } from '@/components/Button'
import { NumberSelector } from '@/components/NumberSelector'

import { HouseHoldGraph } from './HouseHoldGraph'
import { HouseHoldConstraints } from './HouseHoldConstraints'

export const SecurityClaimedAgedCard = () => {
  const [ageValue, setAgeValue] = useState(69)

  return (
    <div css={styles.container}>
      <div css={styles.header}>Interaction</div>
      <div css={styles.content}>
        <h3 css={styles.contentHeader}>Best Social Security Claimed Age</h3>
        <h4 css={styles.contentSubHeader}>Our Recommendation</h4>
        <HouseHoldGraph />
        <HouseHoldConstraints />
        <NumberSelector
          title="Your ideal retire age"
          value={ageValue}
          setAgeValue={setAgeValue}
        />
        <div css={styles.buttonWrapper}>
          <Button
            text={`Use ideal ${ageValue ? ageValue : 0}`}
            isPrimary={false}
          />
          <Button text={`Accept 70`} />
        </div>
      </div>
    </div>
  )
}
