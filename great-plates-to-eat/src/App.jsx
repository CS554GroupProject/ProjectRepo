// Main app file, holds the router and use context providers usually 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Page1 from './pages/Page1';

function App() {
  return (
    <>
      <Router>
        <div>
          <Header/>
            <Routes>
              <Route path="/" element={<h1>This is the default page or path</h1>} />

            </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
