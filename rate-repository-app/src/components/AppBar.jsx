import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const style = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.secondary
  },
  bar: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const AppBar = () => {
  return (
    <View style={style.container}>
      <ScrollView style={style.bar} horizontal>
        <AppBarTab label="Repositories" link='/' />
        <AppBarTab label="Sign In" link='/signin' />
      </ScrollView>
    </View>
  )
};

export default AppBar;
