import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { TabOptions } from "./features/core/constants/tab_style";
import Home from "./features/home/page/home"

const Tabs = () => {
    const Tab = createBottomTabNavigator<RootTabParams>();
    return (
    <Tab.Navigator screenOptions={TabOptions} initialRouteName='Home'>
        <Tab.Screen options={{ headerShown: false }} component={View} name="Starred" />
        <Tab.Screen options={{ headerShown: false }} component={Home} name="Home" />
        <Tab.Screen options={{ headerShown: false }} component={View} name="Tickets" />
    </Tab.Navigator>
    )
}

export type RootTabParams = {
    Starred:undefined,
    Home:undefined,
    Tickets:undefined
}

export default Tabs;