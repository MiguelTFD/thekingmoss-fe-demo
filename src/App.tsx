import { ThemeProvider } from "@/components/theme-provider"
import  Page  from '@/app/dashboard/page'
import './App.css'

function App() {

  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Page/>
    </ThemeProvider>
  )
}

export default App
