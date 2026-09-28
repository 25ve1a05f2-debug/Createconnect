import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { ComingSoonPage } from './pages/ComingSoonPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/talent"
            element={
              <ComingSoonPage
                title="Find Talent"
                description="The talent marketplace, filters, and hiring flow ship in the next phase."
              />
            }
          />

          <Route
            path="/projects"
            element={
              <ComingSoonPage
                title="Find Projects"
                description="Project discovery for professionals ships in a later phase."
              />
            }
          />

          <Route
            path="/projects/new"
            element={
              <ComingSoonPage
                title="Post a Project"
                description="The multi-step project form ships after the marketplace pages."
              />
            }
          />

          <Route
            path="/about"
            element={
              <ComingSoonPage
                title="About CreateConnect"
                description="Company story and positioning will live here. For now, the Home page covers the product."
              />
            }
          />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}