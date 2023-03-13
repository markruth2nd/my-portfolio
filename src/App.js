import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/HomePage';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Routes>

          <Route path="/" element={<Home name={"Mark"} title={"Front End Web Developer"}/>} />
          <Route path="/home" element={<Home name={"Mark"} title={"Front End Web Developer"}/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project" element={<Project/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
