/*import React, { useState } from 'react';
import CountdownPage from './CountdownPage';
import InvitePage from './InvitePage';

const App = () => {
  const [showInvite, setShowInvite] = useState(false);

  return showInvite
    ? <InvitePage />
    : <CountdownPage onEnter={() => setShowInvite(true)} />;
};
*/

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