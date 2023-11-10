import { createStackNavigator } from '@react-navigation/stack';

import PagCadastro from '../pages/PagCadastro';
import Paglogin from '../pages/PagLogin';
import PagPrincipal from '../pages/PagPrincipal';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PagLogin"
                component={Paglogin}
                options={{
                    title: 'Tela Login',
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: '#fff',
                    headerShown: false
                }}


            />

            <Stack.Screen
                name="PagCadastro"
                component={PagCadastro}
                options={{
                    title: 'Tela cadastro',
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: '#fff',
                    headerShown: false
                }}


            />




            <Stack.Screen
                name="PagPrincipal"
                component={PagPrincipal}
                options={{
                    title: 'Tela Principal',
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: '#fff',
                    headerShown: false
                }}

            />



        </Stack.Navigator>
    )
}
