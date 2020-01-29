import React, {Fragment, Component} from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, dark as theme} from '@eva-design/eva';
import {AppNavigator} from './src/navigation/AppNavigator';
import {darkCustom} from './src/constant';
import {Provider} from 'react-redux';
import store from './src/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={darkCustom}>
          <AppNavigator />
        </ApplicationProvider>
      </Provider>
    );
  }
}
export default App;
