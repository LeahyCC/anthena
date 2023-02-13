import { Route } from 'wouter'

import * as style from './app.styles'

// Routes
import { Dashboard } from '@/routes/Dashboard'

function App() {
  return (
    <div css={style.App}>
      <Route path="/" component={Dashboard} />
    </div>
  )
}

export default App
