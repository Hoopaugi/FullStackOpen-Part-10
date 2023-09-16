import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (order) => {
  const orderBy = order === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE'
  const orderDirection = order === 'latest' ? 'DESC' : order === 'highest' ? 'DESC' : 'ASC'

  const { data, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network', variables: { orderBy, orderDirection }
  });

  return { repositories: data ? data.repositories : undefined, ...result };
};

export default useRepositories;
