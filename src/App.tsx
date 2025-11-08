import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilmDetails from './pages/FilmDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films/:id" element={<FilmDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
