import { FlatList, View, StyleSheet } from 'react-native';

import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewListContainer = ({ reviews, onEndReach }) => {
  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default ReviewListContainer

