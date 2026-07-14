import { Router, Route } from 'wouter'
import HomePage from './pages/HomePage'
import BrandGuide from './pages/BrandGuide'

export default function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/brand-guide" component={BrandGuide} />
    </Router>
  )
}
