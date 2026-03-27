import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing region="Purwokerto" landmark="Purwokerto" />} />
        <Route path="/purwokerto" element={<Landing region="Purwokerto" landmark="Purwokerto" />} />
        <Route path="/purbalingga" element={<Landing region="Purwokerto" landmark="Purbalingga" />} />
        <Route path="/banjarnegara" element={<Landing region="Purwokerto" landmark="Banjarnegara" />} />
        <Route path="/cilacap" element={<Landing region="Purwokerto" landmark="Cilacap" />} />
        <Route path="/kebumen" element={<Landing region="Purwokerto" landmark="Kebumen" />} />
      </Routes>
    </Router>
  );
}

export default App;
