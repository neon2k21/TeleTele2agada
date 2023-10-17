import { View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabHave from "./TabHave";
import TabWanted from "./TabWanted";

const Tab = createMaterialTopTabNavigator();


export default function MyBookScreen(){
    return(
        <Tab.Navigator>
        <Tab.Screen name="Библиотека" options={{headerShown: true}} component={TabHave} />
        <Tab.Screen name="Желаемое" options={{headerShown: true}} component={TabWanted} />
    </Tab.Navigator>
    )
}



