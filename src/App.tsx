import { Route, Routes, useSearchParams } from 'react-router-dom';
import './App.css';
import Main from './view/pages/main/main';
import { NotFound } from './view/pages/notfound/notfound';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main searchParams={searchParams} setSearchParams={setSearchParams} />
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
