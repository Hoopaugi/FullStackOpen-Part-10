import { useQuery } from '@apollo/client';

import { GET_MY_REVIEWS } from '../graphql/queries';

const useMyReviews = () => {
  const { data, ...result } = useQuery(GET_MY_REVIEWS, {
    fetchPolicy: 'cache-and-network'
  });

  return { me: data ? data.me : undefined, ...result };
};

export default useMyReviews
