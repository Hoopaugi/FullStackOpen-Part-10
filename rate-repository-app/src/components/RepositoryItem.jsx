import { View, StyleSheet, Image } from "react-native";

import Text from "./Text";

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 5
  },
  languages: {
    display: 'flex',
    flexDirection: 'row'
  },
  language: {
    color: 'white',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#0366d6',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

const formatNumber = (num) => {
  if (num > 1000) {
    return `${(num / 1000).toFixed(1)}k`
  } else {
    return num
  }
}

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image style={styles.avatar} source={{uri: item.ownerAvatarUrl}} />
        <View style={styles.infoContainer}>
          <Text fontWeight='bold' fontSize='subheading'>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <View style={styles.languages}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{formatNumber(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{formatNumber(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{formatNumber(item.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.stat}>
          <Text fontWeight='bold'>{formatNumber(item.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  )
};

export default RepositoryItem
