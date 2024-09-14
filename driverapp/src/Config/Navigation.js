import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import 'react-native-gesture-handler';

import Signup from '../Component/Signup';
import Login from '../Component/Login';
import Dashboard from '../Component/Dashboard';
import PickupARide from '../Component/PickupRide';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
            {/* <Drawer.Screen name="Authentication" component={AuthenticationNavigator} /> */}
                <Drawer.Screen name="Pickup a Ride" component={DashboardNavigator} />
                {/* <Drawer.Screen name="Ride History" component={HistoryNavigator} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

function DashboardNavigator() {
    return <Stack.Navigator>
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DashBoard" component={Dashboard} />
        <Stack.Screen name="Pick a Ride" component={PickupARide} />
    </Stack.Navigator>
}

// function HistoryNavigator() {
//     return <Stack.Navigator>
//         <Stack.Screen name="RideHistory" component={RideHistory} />
//         <Stack.Screen name="RideHistoryDetail" component={RideHistoryDetail} />
//     </Stack.Navigator>
// }
