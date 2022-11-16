/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import theme from './src/global/styles/theme';
import Routes from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
