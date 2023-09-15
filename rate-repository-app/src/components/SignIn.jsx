import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import Text from './Text';
import FormikTextInput from './FormikTextInput'

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
  const onSubmit = values => {
    console.log('Sign In')
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
