import useReviews from "../hooks/useReviews";

import MyReviewListContainer from "./MyReviewListContainer";

const MyReviewList = ({ id }) => {
  const { reviews } = useReviews(id);

  return <MyReviewListContainer reviews={reviews} />
};

export default MyReviewList

