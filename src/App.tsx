import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Testimonials from './components/Testimonials'
import Corporate from './components/Corporate'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Testimonials />
        <Corporate />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App