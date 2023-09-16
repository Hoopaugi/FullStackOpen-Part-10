import { View, StyleSheet } from 'react-native';
import { format, parseISO } from 'date-fns'

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
  },
  leftContainer: {
    flexDirection: 'column'
  },
  rightContainer: {
    flexDirection: 'column'
  },
  ratingContainer: {
    width: 50,
    height: 50,
    margin: 10,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    color: theme.colors.primary,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  countItem: {
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  countItemCount: {
    marginBottom: 5,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  languageText: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
});

const ReviewItem = ({ review }) => {
  const {
    text,
    rating,
    createdAt,
    user
  } = review;

  return (
    <View testID="reviewItem" style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.ratingContainer}>
          <Text fontSize='subheading' fontWeight='bold' style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text fontSize='subheading' fontWeight='bold' >{user.username}</Text>
        <Text>{format(parseISO(createdAt), 'dd.MM.yyyy')}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;