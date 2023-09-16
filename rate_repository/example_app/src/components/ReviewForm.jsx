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

const ReviewForm = ({ initialValues, onSubmit, validationSchema }) => {
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
        <FormikTextInput name="ownerName" placeholder="Repository Owner name" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="repositoryName" placeholder="Repository name" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name="text" placeholder="Review" />
      </View>
      <Button onPress={onSubmit}>Create a review</Button>
    </View>
  );
};

export default ReviewForm
