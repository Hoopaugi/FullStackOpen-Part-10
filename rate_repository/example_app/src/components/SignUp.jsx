import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import useSignUp from '../hooks/useSignUp';
import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  confirmPassword: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().min(5).max(30).required('Username is required'),
  password: yup.string().min(5).max(50).required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required('Password confirm is required'),
});

const SignUp = () => {
  const [signUp] = useSignUp();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    await signUp({ username, password });

    navigate('/', { replace: true });
  };

  return <SignUpForm initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} />

};

export default SignUp
