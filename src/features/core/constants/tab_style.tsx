import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { RouteProp } from '@react-navigation/core'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RootTabParams } from '../../../tabs';
import { Platform, StyleSheet, View } from "react-native";
import StyledText from '../components/styled_text';
import UIColors from './color_constants';

export const TabOptions: ((props: {
    route: RouteProp<RootTabParams, keyof RootTabParams>;
    navigation: any;
}) => BottomTabNavigationOptions) = ({ route }) => {
    return {
        tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            switch (route.name) {
                case 'Home':
                    iconName = focused ? 'home' : 'home-outline'
                    break;

                case 'Starred':
                    iconName = focused ? 'star' : 'star-outline'
                    break;
                case 'Tickets':
                    iconName = focused ? 'ticket' : 'ticket-outline'
                    break;
                default:
                    iconName = focused ? 'home' : 'home-outline'
                    break;
            }

            return (
                <View style={{
                    alignItems: 'center', justifyContent: 'center', top: Platform.OS == 'ios' ? 10 : 0,
                    backgroundColor: focused ? UIColors.accent : UIColors.secondary, padding: 10, borderRadius: 25
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon style={{marginRight:5}}
                            name={iconName} size={30}
                            color={focused ? UIColors.primary : UIColors.grey} />
                        <StyledText fontSize={14} fontWeight='Medium' style={{ color: 'white' }}>
                            {route.name}
                        </StyledText>
                    </View>
                </View>
            )
        },
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabBar, styles.shadow]
    }
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 40,
        height: 80,
        paddingHorizontal:15,
        backgroundColor: UIColors.secondary,
        borderTopColor: UIColors.secondary,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
    shadow: {
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 2,
        shadowOpacity: 0.3,

    }
})