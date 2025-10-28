import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutBook from './pages/AboutBook'
import AboutWill from './pages/AboutWill'
import BookTour from './pages/BookTour'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-book" element={<AboutBook />} />
            <Route path="/about-will" element={<AboutWill />} />
            <Route path="/book-tour" element={<BookTour />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

