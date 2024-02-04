import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();

import {Groups} from '@screens/Groups';
import {Players} from '@screens/Players';
import {NewGroup} from '@screens/NewGroup';



export function AppRoutes(){
    return(
        <Navigator>
            <Screen
                name='groups'
                component={Groups}>
            </Screen>
            <Screen
                name='new'
                component={NewGroup}>
            </Screen>
            <Screen
                name='player'
                component={Players}>
            </Screen>
        </Navigator>
    )
}
