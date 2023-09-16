import { useNavigate } from 'react-router-native';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';

import RepositoryItem from '../RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, onEndReach }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const navigate = useNavigate();

  return (
    <FlatList
      data={repositoryNodes}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <Pressable onPress={() => {navigate(`/repositories/${item.id}`)}}><RepositoryItem repository={item} /></Pressable>}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryListContainer;
