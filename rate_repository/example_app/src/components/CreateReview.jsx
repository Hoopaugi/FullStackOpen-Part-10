import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import useCreateReview from '../hooks/useCreateReview';
import ReviewForm from './ReviewForm';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Username is required'),
  repositoryName: yup.string().required('Password is required'),
  rating: yup.number().min(0).max(100).required('Rating between 0 - 100 is required'),
  text: yup.string()
});

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    const result = await createReview({ ownerName, repositoryName, rating: Number(rating), text })

    const id = result.data.createReview.repository.id

    navigate(`/repositories/${id}`, { replace: true });
  };

  return <ReviewForm initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} />

};

export default CreateReview
