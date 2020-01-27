import React, {Fragment} from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, dark as theme} from '@eva-design/eva';
import {AppNavigator} from './src/navigation/AppNavigator';
import {darkCustom} from './src/constant';

const App = () => (
  <Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={darkCustom}>
      <AppNavigator />
    </ApplicationProvider>
  </Fragment>
);
export default App;
