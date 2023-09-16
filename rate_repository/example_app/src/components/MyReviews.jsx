import useMyReviews from "../hooks/useMyReviews";
import MyReviewListContainer from "./MyReviewListContainer";

const MyReviews = () => {
  const { me, loading } = useMyReviews()

  if (loading) {
    return null
  }

  console.log(me)

  const reviews = me.reviews

  return (
    <>
      <MyReviewListContainer reviews={reviews} />
    </>
  )
};

export default MyReviews;
