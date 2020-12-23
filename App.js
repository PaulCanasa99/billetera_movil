import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import PhoneSignIn from './src/screens/PhoneSignIn';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00ADB5',
    accent: '#EEEEEE',
    background: '#A6E3E9',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <PhoneSignIn />
    </PaperProvider>
  );
};
export default App;
