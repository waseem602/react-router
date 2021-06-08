import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  const Home = () => (<div>This is Home</div>)
  const Blog = () => (<div>This is Blog</div>)
  return (
    <Router>
      <div>
        <ul className="navbar">
          <NavLink as="li" to="/">Home</NavLink>
          <NavLink as="li" to="blog">Blog</NavLink>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
