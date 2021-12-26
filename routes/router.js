import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Home } from '../src/pages/home';
import { Detail } from '../src/pages/detail';
import { Biography } from '../src/pages/biography';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRouters() {
  const theme = useTheme();

  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.CBiografia,
          tabBarStyle: {
            height: 80,
            width: '100%',
            paddingTop: 15,
            paddingBottom: 15,
            backgroundColor: theme.colors.backgroundColor
          }
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: (({ color }) => 
              <Feather name='home' size={25} color={color} />
            )}}
        />

      </Tab.Navigator>
  )
}

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Main"
          component={TabRouters}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={
            { headerShown: false }
          }
        />

        <Stack.Screen
          name="Biography"
          component={Biography}
          options={
            { headerShown: false }
          }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
