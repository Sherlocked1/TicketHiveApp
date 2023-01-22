import { NavigationContainer ,DefaultTheme} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UIColors from "./features/core/constants/color_constants";
import Movie from "./features/core/models/movie";
import MovieDetails from "./features/movie_details/page/movie_details";
import Tabs from "./tabs";


const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: UIColors.primary
    },
  };

const Main = () => {
    const Stack = createStackNavigator<RootStackParams>();

    return (
        <NavigationContainer theme={MyTheme}>
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