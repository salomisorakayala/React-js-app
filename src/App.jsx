import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FormAction from './components/FormAction';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Use Routes component to wrap Route configurations */}
          <Route path="/" element={<Home />} /> {/* Use element prop to render component */}
          <Route path="/form" element={<FormAction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
