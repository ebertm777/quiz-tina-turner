import React from 'react';
import { hot } from 'react-hot-loader/root';

import InfoartePaywallPreview from '!/components/common/InfoartePaywallPreview/InfoartePaywallPreview';

import InfoFooter from './components/common/InfoFooter/InfoFooter';
import PageStack from './components/PageStack';
import DataContextProvider from './contexts/DataContext';
import NavigationContextProvider from './contexts/NavigationContext';

function App() {
  return (
    <div className="infoarte">
      <InfoartePaywallPreview>
        <DataContextProvider>
          <NavigationContextProvider>
            <PageStack />
          </NavigationContextProvider>
        </DataContextProvider>
      </InfoartePaywallPreview>
      <div id="pub-taboola" />
      <InfoFooter />
    </div>
  );
}

export default hot(App);
