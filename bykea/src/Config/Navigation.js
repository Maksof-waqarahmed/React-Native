import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignUp from '../Views/Signup';
import Login from '../Views/Login';
import Dashboard from '../Views/Dashboard';
import PickUp from '../Views/Pickup';
import Destination from '../Views/Destination';
import CarSelection from '../Views/CarSelection';
import RideHistory from '../Views/RideHistory';
import RideHistoryDetail from '../Views/RideHistoryDetail';
import RideAccepted from '../Views/RideAccepted'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
            {/* <Drawer.Screen name="Authentication" component={AuthenticationNavigator} /> */}
                <Drawer.Screen name="Book a Ride" component={DashboardNavigator} />
                <Drawer.Screen name="Ride History" component={HistoryNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

function DashboardNavigator() {
    return <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DashBoard" component={Dashboard} />
        <Stack.Screen name="PickUp" component={PickUp} />
        <Stack.Screen name="Destination" component={Destination} />
        <Stack.Screen name="Vehicles" component={CarSelection} />
        <Stack.Screen name="RideAccepted" component={RideAccepted} />
    </Stack.Navigator>
}

function HistoryNavigator() {
    return <Stack.Navigator>
        <Stack.Screen name="RideHistory" component={RideHistory} />
        <Stack.Screen name="RideHistoryDetail" component={RideHistoryDetail} />
    </Stack.Navigator>
}

export default Navigator;