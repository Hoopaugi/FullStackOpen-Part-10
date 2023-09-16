import useMyReviews from "../hooks/useMyReviews";
import ReviewListContainer from "./ReviewListContainer";

const MyReviews = () => {
  const { me, loading } = useMyReviews()

  if (loading) {
    return null
  }

  console.log(me)

  const reviews = me.reviews

  return (
    <>
      <ReviewListContainer reviews={reviews} />
    </>
  )
};

export default MyReviews;
