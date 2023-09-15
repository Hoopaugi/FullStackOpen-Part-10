import { Pressable, StyleSheet } from "react-native";

import Text from "./Text";

const style = StyleSheet.create({
  flexGrow: 0,
  padding: 10
});

const AppBarTab = ({ onPress, label }) => {
  return (
    <Pressable style={style} onPress={() => onPress()}>
      <Text color='primary'>{label}</Text>
    </Pressable>
  )
};

export default AppBarTab