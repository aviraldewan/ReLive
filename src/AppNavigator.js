import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Help from './screens/Help';
import Chat from './screens/Chat';
import Blog from './screens/Blog';
import Community from './screens/Community';
import Fundraiser from './screens/Fundraiser';
import Ionicons from 'react-native-vector-icons/Ionicons';
import env from './helper/env';
import BlogContent from './components/BlogContent';

const Bottom = createBottomTabNavigator();
const BlogStack = createStackNavigator();

const helpline = env.helpline;
const chat = env.chat;
const community = env.community;
const blog = env.blog;
const fundraiser = env.fundraiser;

export default function AppNavigator() {
  const BlogStackScreen = () => {
    return (
      <BlogStack.Navigator>
        <BlogStack.Screen
          name="Blog"
          component={Blog}
          options={{ headerShown: false }}
        />
        <BlogStack.Screen
          name="BlogContent"
          component={BlogContent}
        />
      </BlogStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Bottom.Navigator
        initialRouteName={helpline}
        screenOptions={({ route }) => ({
          tabBarLabel: route.name,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            const routeName = route.name;

            if (routeName === helpline) {
              iconName = focused ? 'fitness-sharp' : 'fitness-outline';
            } else if (routeName === chat) {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (routeName === community) {
              iconName = focused ? 'ios-earth-outline' : 'ios-earth-outline';
            } else if (routeName === blog) {
              iconName = focused ? 'ios-book-sharp' : 'ios-book-outline';
            } else if (routeName === fundraiser) {
              iconName = focused ? 'cash-sharp' : 'cash-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Bottom.Screen name={helpline} component={Help} />
        <Bottom.Screen name={chat} component={Chat} />
        <Bottom.Screen name={community} component={Community} />
        <Bottom.Screen
          name={blog}
          component={BlogStackScreen}
          options={{ headerShown: false }}
        />
        <Bottom.Screen name={fundraiser} component={Fundraiser} />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}
