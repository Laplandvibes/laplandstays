import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { loadCopy } from './locales/copy'
import { langFromPath } from './i18n/useLang'

// Start the reader's locale chunk now, not after the first render: the page
// waits for it (useCopy suspends), so it should download alongside the page chunk.
void loadCopy(langFromPath(window.location.pathname))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
