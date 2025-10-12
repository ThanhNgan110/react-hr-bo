import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './store.ts'
import { Provider } from 'react-redux'

import App from './App.tsx'

// styles
import './styles/tailwind.css'
import './styles/index.css'

// contexts
import { SidebarProvider } from './contexts/SidebarContext.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { BrowserRouter } from 'react-router'
import { initRequest } from './services/initRequest.ts'

initRequest();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
