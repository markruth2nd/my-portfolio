import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="Project" element={<Project/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
