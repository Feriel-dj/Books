import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './componenets/Footer';
import NavBar from './componenets/NavBar';
import AddBooks from './Containers/AddBooks';
import SearchBooks from './Containers/SearchBooks';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route  path="/" element={<AddBooks />} />
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
