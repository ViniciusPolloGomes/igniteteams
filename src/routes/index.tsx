import {NavigationContainer} from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { Groups } from '@screens/Groups';

//create index Routes
export function Routes(){
    return(
        <>
            <NavigationContainer>
                <AppRoutes/>      
            </NavigationContainer>
        </>
    )
}