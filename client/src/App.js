import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div className='App'>
      <Router>
        <div className='navbar'>
          <Link to='/'> Home</Link>
          <Link to='/createpost'> Create Post</Link>
        </div>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
