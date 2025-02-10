import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './view/pages/main/main';
import { NotFound } from './view/pages/notfound/notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
