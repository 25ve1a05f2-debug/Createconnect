import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { HeroSection } from './home/HeroSection'
import { HowItWorksSection } from './home/HowItWorksSection'
import { StatsSection } from './home/StatsSection'
import { UserTypeSection } from './home/UserTypeSection'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash !== '#how-it-works') return
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash, location.pathname])

  return (
    <>
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <UserTypeSection />
    </>
  )
}
