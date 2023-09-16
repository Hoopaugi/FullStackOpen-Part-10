import { useQuery } from '@apollo/client';

import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (id) => {
  const { data, ...result } = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network', variables: { repositoryId: id }
  });

  return { reviews: data ? data.repository.reviews : undefined, ...result };
};

export default useReviews;
