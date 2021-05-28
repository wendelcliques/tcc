import React, {useState, useEffect} from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import Treinamento from './pages/Treinamento';
import TreinamentoAdm from './pages/TreinamentoAdm';
import Aventura from './pages/Aventura';
import AventuraAdm from './pages/AventuraAdm';

const AppScreens = () => {
    // const AppScreens = ({logged}) => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'Treinamento'}
            //initialRouteName={logged? 'Welcome' : 'SignIn}
            >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Treinamento" component={Treinamento} />
            <Stack.Screen name="TreinamentoAdm" component={TreinamentoAdm} />
            <Stack.Screen name="Aventura" component={Aventura} />
            <Stack.Screen name="AventuraAdm" component={AventuraAdm} />


        </Stack.Navigator>
    )
}

const Routes = () => {
    /* const [logged, setLogged] = useState(false);
    
    useEffect(() => {
        async function initialVerifications() {
            if (await isLogged()) {
                setLogged(true);
            }
            
            initialVerifications();
        })*/
    return (
       <NavigationContainer>
           <AppScreens
           // logged={logged}
           />
       </NavigationContainer>
    );
};

export default Routes
