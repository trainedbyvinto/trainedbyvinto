import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Results from './pages/Results'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <div className="grain"></div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Programs />} />
        <Route path="/ergebnisse" element={<Results />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
