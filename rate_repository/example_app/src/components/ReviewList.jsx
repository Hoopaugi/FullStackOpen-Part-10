import useReviews from "../hooks/useReviews";

import ReviewListContainer from "./ReviewListContainer";

const ReviewList = ({ id }) => {
  const variables = { repositoryId: id, first: 5 }

  const { reviews, fetchMore } = useReviews(variables);

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore()
  };

  return <ReviewListContainer reviews={reviews} onEndReach={onEndReach} />
};

export default ReviewList

