import react from 'react';
import Sidebar from './components/Sidebar';
import ProfilePage from './pages/ProfilePage';
import News from './pages/News';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/news" element={<News />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
