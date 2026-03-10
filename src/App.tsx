import { useState } from 'react'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import CaseStudy1 from '@/pages/CaseStudy1'
import CaseStudy2 from '@/pages/CaseStudy2'
import CaseStudy3 from '@/pages/CaseStudy3'
import CaseStudy4 from '@/pages/CaseStudy4'

type Page = 'home' | 'about' | 'case-study-1' | 'case-study-2' | 'case-study-3' | 'case-study-4' | 'contact'

const navItems: { page: Page; label: string }[] = [
  { page: 'home', label: 'Home' },
  { page: 'about', label: 'About' },
  { page: 'case-study-1', label: 'Building the Practice' },
  { page: 'case-study-2', label: 'Breadth at Scale' },
  { page: 'case-study-3', label: 'Depth at Fortune 500' },
  { page: 'case-study-4', label: 'Classic Product Design' },
]

function App() {
  const [showLogin] = useState(() =>
    new URLSearchParams(window.location.search).has('login')
  )

  const [currentPage, setCurrentPage] = useState<Page>('home')

  if (showLogin) return <Login />

  const navigateTo = (page: string) => {
    setCurrentPage(page as Page)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigateTo={navigateTo} />
      case 'about': return <About navigateTo={navigateTo} />
      case 'case-study-1': return <CaseStudy1 navigateTo={navigateTo} />
      case 'case-study-2': return <CaseStudy2 navigateTo={navigateTo} />
      case 'case-study-3': return <CaseStudy3 navigateTo={navigateTo} />
      case 'case-study-4': return <CaseStudy4 navigateTo={navigateTo} />
      case 'contact': return <Contact />
      default: return <Home navigateTo={navigateTo} />
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header-brand" onClick={() => navigateTo('home')}>Nick Kazmer</div>
        <div className="site-header-tabs">
          {navItems.map(({ page, label }) => (
            <button
              key={page}
              className={`nav-btn${currentPage === page ? ' active' : ''}`}
              onClick={() => navigateTo(page)}
            >
              {label}
            </button>
          ))}
        </div>
        <button className="site-header-cta" onClick={() => navigateTo('contact')}>Get in touch</button>
      </header>

      <div className="container">
        {renderPage()}
      </div>

      {currentPage !== 'home' && (
        <footer className="footer">
          <div className="footer-left">
            <div className="footer-text">© 2026 Nick Kazmer</div>
          </div>
          <div className="footer-right">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('about') }} className="footer-link">About</a>
            <a href="https://linkedin.com/in/nkazmer" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
            <a href="mailto:nicholas.a.kazmer@gmail.com" className="footer-link">Email</a>
          </div>
        </footer>
      )}
    </>
  )
}

export default App
