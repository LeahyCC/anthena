import { Link, Route } from 'wouter'

import * as style from './app.styles'

// Routes
import { Dashboard } from '@/routes/Dashboard'

function App() {
  return (
    <div className={style.App}>
      <Route path="/" component={Dashboard} />
    </div>
  )
}

export default App
