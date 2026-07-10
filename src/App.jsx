import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LangLayout from './components/LangLayout'
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
      <main className="site-main">
        <Routes>
          <Route element={<LangLayout lang="de" />}>
            <Route path="/" element={<Home />} />
            <Route path="/programme" element={<Programs />} />
            <Route path="/ergebnisse" element={<Results />} />
            <Route path="/kontakt" element={<Contact />} />
          </Route>
          <Route element={<LangLayout lang="en" />}>
            <Route path="/en" element={<Home />} />
            <Route path="/en/programs" element={<Programs />} />
            <Route path="/en/results" element={<Results />} />
            <Route path="/en/contact" element={<Contact />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}
