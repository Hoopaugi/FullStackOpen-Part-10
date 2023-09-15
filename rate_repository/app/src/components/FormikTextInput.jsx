import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a'
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  if (showError) {
    const style = { ...props.style, borderColor: 'red'}
    const modifiedProps = { ...props, style: style }
    return (
      <>
        <TextInput
          onChangeText={value => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...modifiedProps}
        />
        <Text style={styles.errorText}>{meta.error}</Text>
      </>
    );
  } else {
    return (
      <>
        <TextInput
          onChangeText={value => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...props}
        />
      </>
    );
  }
};

export default FormikTextInput;
