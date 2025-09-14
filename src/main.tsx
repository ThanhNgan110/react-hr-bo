import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
