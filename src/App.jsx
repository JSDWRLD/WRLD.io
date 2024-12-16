import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

// created index.js in pages to simplify import 1 line > 4 lines of text
import { Home, About, Projects, Contact } from './pages';

const App = () => {
  return (
    <main className='bg-black'>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            
        </Router>
        
    </main>
  )
}

export default App