import { useState, useRef } from 'react';
import {Picker} from '@react-native-picker/picker';
import { TextInput, StyleSheet } from 'react-native';
import { useDebounce } from 'use-debounce';

import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const RepositoryList = () => {
  const [order, setOrder] = useState('latest')
  const [keyword, setSearchKeyword] = useState('')

  const [searchKeyword] = useDebounce(keyword, 500);

  const pickerRef = useRef();

  const orderBy = order === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE'
  const orderDirection = order === 'latest' ? 'DESC' : order === 'highest' ? 'DESC' : 'ASC'


  const variables = {
    orderBy,
    orderDirection,
    searchKeyword,
    first: 5
  }

  const { repositories, fetchMore } = useRepositories(variables);

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore()
  };

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setSearchKeyword}
        value={keyword}
        placeholder="Search"
        keyboardType="default"
      />
      <Picker
        ref={pickerRef}
        selectedValue={order}
        // eslint-disable-next-line no-unused-vars
        onValueChange={(itemValue, itemIndex) =>
          setOrder(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
      <RepositoryListContainer repositories={repositories} onEndReach={onEndReach} />
    </>
  )
};

export default RepositoryList;
