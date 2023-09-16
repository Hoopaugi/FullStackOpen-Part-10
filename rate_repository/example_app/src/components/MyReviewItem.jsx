import { View, StyleSheet, Alert } from 'react-native';
import { format, parseISO } from 'date-fns'
import { useNavigate } from 'react-router-native';

import theme from '../theme';
import Text from './Text';
import Button from './Button'
import useDeleteReview from '../hooks/useDeleteReview';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 5,
  },
  topContainer: {
    flexDirection: 'row',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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

const MyReviewItem = ({ review }) => {
  const {
    id,
    text,
    rating,
    createdAt,
    user,
    repository
  } = review;

  const [deleteReview] = useDeleteReview()

  const navigate = useNavigate()

  const viewRepository = () => {
    navigate(`/repositories/${repository.id}`)
  }

  const createTwoButtonAlert = () =>
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      {
        text: 'CANCEL',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'DELETE', onPress: () => deleteReview(id)},
    ]);

  return (
    <View testID="reviewItem" style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.ratingContainer}>
            <Text fontSize='subheading' fontWeight='bold' style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          {
            user ? <Text fontSize='subheading' fontWeight='bold' >{user.username}</Text> : repository ? <Text fontSize='subheading' fontWeight='bold' >{repository.fullName}</Text> : null
          }
          <Text>{format(parseISO(createdAt), 'dd.MM.yyyy')}</Text>
          <Text>{text}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
          <Button onPress={viewRepository}>View repository</Button>
          <Button onPress={createTwoButtonAlert}>Delete review</Button>
        </View>
    </View>
  );
};

export default MyReviewItem;