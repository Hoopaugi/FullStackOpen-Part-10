import useReviews from "../hooks/useReviews";

import ReviewListContainer from "./ReviewListContainer";

const ReviewList = ({ id }) => {
  const { reviews } = useReviews(id);

  return <ReviewListContainer reviews={reviews} />
};

export default ReviewList

