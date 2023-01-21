import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./features/home/page/home"

const Main = () => {
    const Tab = createBottomTabNavigator<RootTabParams>();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{headerShown:false}} component={Home} name="Home"/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export type RootTabParams = {
    Home:undefined,
}

export default Main;