import { View, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";

const style = StyleSheet.create({
  flexGrow: 0,
  padding: 10
});

const AppBarTab = ({ label, link }) => {
  return (
    <View style={style} >
      <Link to={link}>
        <Text fontSize='subheading' fontWeight='bold' style={{color: 'white'}}>{label}</Text>
      </Link>
    </View>
  )
};

export default AppBarTab