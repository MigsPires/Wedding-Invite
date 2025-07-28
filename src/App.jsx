import { Routes, Route } from 'react-router-dom';
import CountdownPage from './CountdownPage';
import InvitePage from './InvitePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CountdownPage />} />
      <Route path="/invite" element={<InvitePage />} />
    </Routes>
  );
};

export default App;