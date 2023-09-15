import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const style = StyleSheet.create({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  paddingTop: Constants.statusBarHeight,
  backgroundColor: theme.colors.secondary,
});

const AppBar = () => {
  const repositoriesOnPress = () => {
    console.log('Repositories')
  }

  return (
    <View style={style}>
      <AppBarTab label="Repositories" onPress={repositoriesOnPress} />
      <AppBarTab label="Repositories" onPress={repositoriesOnPress} />
    </View>
  )
};

export default AppBar;
