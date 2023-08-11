import React from 'react';
import VerticalTabs from './VerticalTabs';
import MainContent from './MainContent';

function Landing() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <VerticalTabs onChange={setSelectedTab} value={selectedTab} />
      <MainContent onSectionInView={setSelectedTab} />
    </div>
  );
}

export default Landing;
