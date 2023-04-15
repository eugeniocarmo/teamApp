import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading'
import theme from './src/theme';
import { Groups } from '@screens/Groups';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular,Roboto_700Bold,});

  return (
    <ThemeProvider theme={ theme }>
      <StatusBar 
      barStyle={'light-content'}
      translucent
      />
      { fontsLoaded ? <Groups />: <Loading /> } 
    </ThemeProvider>
  );      
}
