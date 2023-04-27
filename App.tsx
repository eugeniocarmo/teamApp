import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading'
import theme from './src/theme';
import { Groups } from '@screens/Groups';
import { Players } from '@screens/Players';
// import { NewGroup } from '@screens/NewGroup';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular,Roboto_700Bold,});

  return (
    <ThemeProvider theme={ theme }>
      <StatusBar 
      barStyle={'light-content'}
      translucent
      />
      { fontsLoaded ? <Players />: <Loading /> } 
    </ThemeProvider>
  );      
}
