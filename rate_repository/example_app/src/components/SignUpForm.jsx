import { Formik } from 'formik';
import { View, StyleSheet } from "react-native";

import FormikTextInput from "./FormikTextInput";
import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  fieldContainer: {
    marginBottom: 15,
  },
});

const SignUpForm = ({ initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
    </Formik>
  );
};

const Form = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="username" placeholder="Username" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="password" placeholder="Password" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="confirmPassword" placeholder="Password confirmation" />
      </View>
      <Button onPress={onSubmit}>Sign up</Button>
    </View>
  );
};

export default SignUpForm
