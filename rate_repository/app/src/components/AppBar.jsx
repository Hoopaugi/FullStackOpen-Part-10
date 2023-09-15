import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { useNavigate } from "react-router-native";
import { useApolloClient } from '@apollo/client';

import theme from '../theme';
import Text from './Text';
import AppBarTab from './AppBarTab';
import useMe from '../hooks/useMe';
import useAuthStorage from '../hooks/useAuthStorage'

const style = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.secondary
  },
  bar: {
    display: 'flex',
    flexDirection: 'row'
  },
  logoutButton: {
    flexGrow: 0,
    padding: 10
  }
});

const LogoutButton = () => {
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const logout = async () => {
    console.log('logout')
    await authStorage.removeAccessToken()
    console.log('a')
    apolloClient.resetStore();
    navigate("/");
  }
  return (
    <View style={style.logoutButton} >
      <Pressable onPress={logout}>
        <Text fontSize='subheading' fontWeight='bold' style={{color: 'white'}}>Logout</Text>
      </Pressable>
    </View>
  )
};

const AppBar = () => {
  const { me, loading } = useMe();

  if (loading) {
    return null
  }

  const currentUser = me.me
  console.log(currentUser)
  return (
    <View style={style.container}>
      <ScrollView style={style.bar} horizontal>
        {!currentUser ? <AppBarTab label="Sign In" link='/signin' /> : <LogoutButton /> }
        <AppBarTab label="Repositories" link='/' />
      </ScrollView>
    </View>
  )
};

export default AppBar;
