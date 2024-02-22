import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ManufactureHomeScreen } from '@/main/screens/Home';
import React from 'react';
// import { Detail } from '../src/pages/detail';
// import { Biography } from '../src/pages/biography';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function TabRouters() {
//   const theme = useTheme();

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: theme.colors.CBiografia,
//         tabBarStyle: {
//           height: 80,
//           width: '100%',
//           paddingTop: 15,
//           paddingBottom: 15,
//           backgroundColor: theme.colors.backgroundColor,
//         },
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: () => {
//             return null;
//           },
//           tabBarIcon: ({ color }: any) => (
//             <Feather name="home" size={25} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={ManufactureHomeScreen}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
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
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
