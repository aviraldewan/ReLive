import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
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
import BlogPost from './components/BlogPost';
import CommunityContent from './components/CommunityContent';
import CommunityPost from './components/CommunityPost';
import Input from './components/Input';
import AddComment from './components/AddComment';

const Bottom = createBottomTabNavigator();
const BlogStack = createStackNavigator();
const CommunityStack = createStackNavigator();

const helpline = env.helpline;
const chat = env.chat;
const community = env.community;
const blog = env.blog;
const fundraiser = env.fundraiser;

export default function AppNavigator() {
  const BlogStackScreen = ({ navigation }) => {
    return (
      <BlogStack.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
          headerTintColor: 'white',
          headerRight: () => {
            if (route.name !== 'BlogPost') {
              return (
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => navigation.navigate('BlogPost')}
                >
                  <View
                    style={{
                      backgroundColor: 'dodgerblue',
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 2,
                      borderColor: 'white',
                    }}
                  >
                    <Ionicons name="add" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              );
            }
            return null;
          },
        })}
      >
        <BlogStack.Screen
          name="BlogHome"
          component={Blog}
          options={{ title: 'Blog' }}
        />
        <BlogStack.Screen
          name="BlogContent"
          component={BlogContent}
          options={{ title: 'Blog Reader' }}
        />
        <BlogStack.Screen
          name="BlogPost"
          component={BlogPost}
          options={{ title: 'Post a Blog' }}
        />
      </BlogStack.Navigator>
    );
  };

  const CommunityStackScreen = ({ navigation }) => {
    return (
      <CommunityStack.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
          headerTintColor: 'white',
          headerRight: () => {
            if (route.name !== 'CommunityPost') {
              return (
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => navigation.navigate('CommunityPost')}
                >
                  <View
                    style={{
                      backgroundColor: 'dodgerblue',
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 2,
                      borderColor: 'white',
                    }}
                  >
                    <Ionicons name="add" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              );
            }
            return null;
          },
        })}
      >
        <CommunityStack.Screen
          name="CommunityHome"
          component={Community}
          options={{ title: 'Community' }}
        />
        <CommunityStack.Screen
          name="CommunityContent"
          component={CommunityContent}
          options={{ title: 'Post Viewer' }}
        />
        <CommunityStack.Screen
          name="CommunityPost"
          component={CommunityPost}
          options={{ title: 'Create a Post' }}
        />
        <CommunityStack.Screen
          name="AddComment"
          component={AddComment}
          options={{ title: 'Community' }}
        />
      </CommunityStack.Navigator>
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
          activeTintColor: 'dodgerblue',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Bottom.Screen name={helpline} component={Help} />
        <Bottom.Screen name={chat} component={Chat} />
        <Bottom.Screen
          name={community}
          component={CommunityStackScreen}
          options={{ headerShown: false }}
        />
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
