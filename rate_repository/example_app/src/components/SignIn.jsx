import * as yup from 'yup';
import { useNavigate } from 'react-router-native';

import useSignIn from '../hooks/useSignIn';
import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    await signIn({ username, password });

    navigate('/', { replace: true });
  };

  return <SignInForm initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} />

};

export default SignIn;
