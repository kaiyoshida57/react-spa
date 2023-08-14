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
    <h2 className="heading">News ニュース</h2>
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
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/news">News</NavLink>
      </nav>

      <div id="content">
        <SlideRoutes animation="slide" duration={300}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </SlideRoutes>
      </div>
    </>
  );
}

export default App;
