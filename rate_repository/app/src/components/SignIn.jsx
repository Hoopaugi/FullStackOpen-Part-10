import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useApolloClient } from '@apollo/client';

import Text from './Text';
import FormikTextInput from './FormikTextInput'
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  submitButton: {
    padding: 10,
    margin: 10,
    backgroundColor: '#0366d6',
    borderRadius: 5
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10
  }
});

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" style={styles.inputField} />
      <FormikTextInput name="password" placeholder="Password" style={styles.inputField} />
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text style={{color: 'white'}}>Sign In</Text>
      </Pressable>
    </View>
  );
}

const initialValues = {
  username: '',
  password: ''
}

const SignIn = () => {
  const [signIn] = useSignIn();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });

      apolloClient.resetStore();
      console.log('data', data);
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
