import React from 'react';
import VerticalTabs from './VerticalTabs';
import MainContent from './MainContent'; 
import CombinedContent from './CombinedContent';

function Landing() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
     <CombinedContent/>
    </div>
  );
}

export default Landing;
