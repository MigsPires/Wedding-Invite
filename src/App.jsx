import React, { useState } from 'react';
import CountdownPage from './CountdownPage';
import InvitePage from './InvitePage';

const App = () => {
  const [showInvite, setShowInvite] = useState(false);

  return showInvite
    ? <InvitePage />
    : <CountdownPage onEnter={() => setShowInvite(true)} />;
};

export default App;

