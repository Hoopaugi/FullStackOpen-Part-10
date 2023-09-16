import { useState, useRef } from 'react';
import {Picker} from '@react-native-picker/picker';

import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [order, setOrder] = useState('latest')

  const pickerRef = useRef();

  const { repositories } = useRepositories(order);

  return (
    <>
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
      <RepositoryListContainer repositories={repositories} />
    </>
  )
};

export default RepositoryList;
