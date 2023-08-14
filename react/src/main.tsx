import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
// import About from './pages/About';
// import News from './pages/News';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* # ここからRouting設定（適応させたいコンポーネントをBrowserRouterで挟む。） */}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
    {/* ここまでRouting設定 */}
  </React.StrictMode>,
);
