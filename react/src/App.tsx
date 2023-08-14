// import { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';

const Home = () => (
  <div className="card home">
    <h2 className="heading">Home ホーム</h2>
    <p className="text">
      <strong>Homeページです。</strong>
      <br />
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    </p>
  </div>
);
const About = () => (
  <div className="card about">
    <h2 className="heading">About アバウト</h2>
    <p className="text">
      <strong>Aboutページです。</strong>
      <br />
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    </p>
  </div>
);
const News = () => (
  <div className="card news">
    <h2 className="heading">news ニュース</h2>
    <p className="text">
      <strong>Newsページです。</strong>
      <br />
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    </p>
  </div>
);

function App() {
  return (
    <>
      <h1>ReactでSPAの練習サイト</h1>

      <nav>
        <NavLink to="/react-spa/" end>
          Home
        </NavLink>
        <NavLink to="/react-spa/about">About</NavLink>
        <NavLink to="/react-spa/news">News</NavLink>
      </nav>

      <div id="content">
        <SlideRoutes animation="slide" duration={300}>
          <Route path="/react-spa/" element={<Home />} />
          <Route path="/react-spa/about" element={<About />} />
          <Route path="/react-spa/news" element={<News />} />
        </SlideRoutes>
      </div>
    </>
  );
}

export default App;
