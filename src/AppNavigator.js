import { StyleSheet, Text, SafeAreaView ,View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Help from './screens/Help';
import Chat from './screens/Chat';
import Blog from './screens/Blog';
import Community from './screens/Community';
import Fundraiser from './screens/Fundraiser';
import Ionicons from 'react-native-vector-icons/Ionicons';
import getHeaderComponent from './helper/getHeaderComponent';
import env from './helper/env';

const Bottom = createBottomTabNavigator();
const helpline = env.helpline;
const chat = env.chat;
const community = env.community;
const blog = env.blog;
const fundraiser = env.fundraiser;
 
export default function AppNavigator() {

  return (
        <NavigationContainer>
        <Bottom.Navigator
            initialRouteName={blog}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    const routeName = route.name;
                    
                    if (routeName === helpline)
                    {
                        iconName = focused ? "fitness-sharp" : "fitness-outline";
                    }
                    else if (routeName === chat)
                    {
                        iconName = focused ? "chatbubbles" : "chatbubbles-outline";
                    }
                    else if (routeName === community)
                    {
                        iconName = focused ? "ios-earth-outline" : "ios-earth-outline";
                    }
                    else if (routeName === blog)
                    {
                        iconName = focused ? "ios-book-sharp" : "ios-book-outline";
                    }
                    else if (routeName === fundraiser)
                    {
                        iconName = focused ? "cash-sharp" : "cash-outline";
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color} />
               
             } ,
                headerShown: false,
            })}
            tabBarOptions={{
                activeTintColor: "dodgerblue",
                inactiveTintColor: "grey",
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70},
            }}
            >
                
                 <Bottom.Screen name={helpline} component={Help} options={{
                        header: () => getHeaderComponent(helpline),
                    }} />
                <Bottom.Screen name={chat} component={Chat} options={{
                        header: () => getHeaderComponent(chat),
                    }} />
                <Bottom.Screen name={community} component={Community} options={{
                        header: () => getHeaderComponent(community),
                    }} />
                <Bottom.Screen name={blog} component={Blog} options={{
                        header: () => getHeaderComponent(blog),
                    }} />
                <Bottom.Screen name={fundraiser} component={Fundraiser} options={{
                        header: () => getHeaderComponent(fundraiser),
                    }} />
            
            </Bottom.Navigator>
        </NavigationContainer>
  );
  }