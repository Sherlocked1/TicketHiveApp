import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Movie from "./features/core/models/movie";
import MovieDetails from "./features/movie_details/page/movie_details";
import Tabs from "./tabs";

const Main = () => {
    const Stack = createStackNavigator<RootStackParams>();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} component={Tabs} name="Tabs"/>
                <Stack.Screen component={MovieDetails} name="Movie"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export type RootStackParams = {
    Tabs:undefined,
    Movie:{movie:Movie}
}

export default Main;