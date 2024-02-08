import {NavigationContainer} from '@react-navigation/native';
import { AppRoutes } from './app.routes';

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