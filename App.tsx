import { ThemeProvider } from 'styled-components';
import { useFonts,Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme/theme'
import {Loading} from '@components/Loading'
import { StatusBar } from 'react-native';
import { NewGroup } from '@components/NewGroup';
import { Players } from '@screens/Players';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Players/> : <Loading/>}
    </ThemeProvider>
  );
}

