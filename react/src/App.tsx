// import { useState } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';

const Home = () => <div className="card home">Home</div>;
const About = () => <div className="card about">About</div>;
const News = () => <div className="card news">News</div>;

function App() {
  return (
    <>
      <h1>ようこそ、SPA練習サイトへ</h1>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/news">News</NavLink>
      </nav>

      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
      </SlideRoutes>
    </>
  );
}

export default App;
