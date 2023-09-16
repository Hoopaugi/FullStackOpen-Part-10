import { useMutation } from '@apollo/client';

import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_MY_REVIEWS } from '../graphql/queries';

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW, { refetchQueries: [{ query: GET_MY_REVIEWS }], });

  const deleteReview = async (deleteReviewId) => {

    const payload = await mutate({ variables: { deleteReviewId } });
  
    return payload;
  };

  return [deleteReview, result];
};

export default useDeleteReview
