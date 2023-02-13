import styles from './SecurityClaimedAgedCard.styles'
import { Button } from '@/components/Button'

import { HouseHoldGraph } from './HouseHoldGraph'
import { HouseHoldConstraints } from './HouseHoldConstraints'

export const SecurityClaimedAgedCard = () => {
  return (
    <div css={styles.container}>
      <div css={styles.header}>Interaction</div>
      <div css={styles.content}>
        <h3 css={styles.contentHeader}>Best Social Security Claimed Age</h3>
        <h4 css={styles.contentSubHeader}>Our Recommendation</h4>
        <HouseHoldGraph />
        <HouseHoldConstraints />
        <div css={styles.buttonWrapper}>
          <Button text="Use ideal 63" isPrimary={false} />
          <Button text="Accept 70" />
        </div>
      </div>
    </div>
  )
}
