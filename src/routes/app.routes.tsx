import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Groups} from '@screens/Groups';
import {Players} from '@screens/Players';
import {NewGroup} from '@screens/NewGroup';
import theme from 'src/theme/theme';

//routes created
const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){

    
    return(
        <Navigator  screenOptions={{headerShown : false}}>
            <Screen
                name="groups"
                component={Groups}
                options={{
                    title: 'Grupos',
                    headerStyle: {
                        backgroundColor: theme.COLORS.GRAY_600,
                    },
                    headerTintColor: theme.COLORS.WHITE,
                    
                }}
                  
            />

            <Screen
                name="new"
                component={NewGroup}
                options={{
                    title: 'Novo Grupo',
                    headerStyle: {
                        backgroundColor: theme.COLORS.GRAY_600,
                    },
                    headerTintColor: theme.COLORS.WHITE,
                    
                }}
            />

            <Screen
                name="players"
                component={Players}
                options={{
                    title: 'Jogadores',
                    headerStyle: {
                        backgroundColor: theme.COLORS.GRAY_600,
                    },
                    headerTintColor: theme.COLORS.WHITE,
                    
                }}
            />
            
        </Navigator>
    )
}
