import { ThemeProvider } from 'styled-components';
import { useFonts,Roboto_400Regular, Roboto_700Bold,Roboto_500Medium } from '@expo-google-fonts/roboto';
import theme from './src/theme/theme'
import {Loading} from '@components/Loading'
import { StatusBar } from 'react-native';
import { NewGroup } from '@screens/NewGroup';
import {Routes} from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes/> : <Loading/>}
    </ThemeProvider>
  );
}

