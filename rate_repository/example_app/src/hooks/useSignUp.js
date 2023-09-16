import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../graphql/mutations';
import useSignIn from './useSignIn';

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const [signIn] = useSignIn();

  const signUp = async ({ username, password }) => {
    const user = { username, password };

    const payload = await mutate({ variables: { user } });
    const { data } = payload;

    if (data?.createUser) {
      await signIn({ username, password });
    }

    return payload;
  };

  return [signUp, result];
};

export default useSignUp
