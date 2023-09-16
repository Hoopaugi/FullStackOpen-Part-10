import { FlatList, View, StyleSheet } from 'react-native';

import MyReviewItem from './MyReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviewListContainer = ({ reviews }) => {
  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <MyReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default MyReviewListContainer

