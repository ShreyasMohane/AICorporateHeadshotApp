import { useState } from 'react'
import SplashScreen from './screens/SplashScreen'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import StyleSelectionScreen from './screens/StyleSelectionScreen'
import UploadScreen from './screens/UploadScreen'
import CheckoutScreen from './screens/CheckoutScreen'
import ConfirmationScreen from './screens/ConfirmationScreen'
import ResultsScreen from './screens/ResultsScreen'
import AboutScreen from './screens/AboutScreen'

export type Screen =
  | 'splash'
  | 'login'
  | 'dashboard'
  | 'styles'
  | 'upload'
  | 'checkout'
  | 'confirmation'
  | 'results'
  | 'about'

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash')

  const nav = (s: Screen) => setScreen(s)

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      {screen === 'splash' && <SplashScreen nav={nav} />}
      {screen === 'login' && <LoginScreen nav={nav} />}
      {screen === 'dashboard' && <DashboardScreen nav={nav} />}
      {screen === 'styles' && <StyleSelectionScreen nav={nav} />}
      {screen === 'upload' && <UploadScreen nav={nav} />}
      {screen === 'checkout' && <CheckoutScreen nav={nav} />}
      {screen === 'confirmation' && <ConfirmationScreen nav={nav} />}
      {screen === 'results' && <ResultsScreen nav={nav} />}
      {screen === 'about' && <AboutScreen nav={nav} />}
    </div>
  )
}
