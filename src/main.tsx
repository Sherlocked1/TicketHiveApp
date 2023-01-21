import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TabOptions } from "./features/core/constants/tab_style";
import Home from "./features/home/page/home"

const Main = () => {
    const Tab = createBottomTabNavigator<RootTabParams>();

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={TabOptions}>
                <Tab.Screen options={{headerShown:false}} component={Home} name="Home"/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export type RootTabParams = {
    Home:undefined,
}

export default Main;