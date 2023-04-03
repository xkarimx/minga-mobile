import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/Home'
import MangaDetailsScreen from "../screens/MangaDetails";

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Manga" component={MangaDetailsScreen} />
        </Tab.Navigator>
    );
}