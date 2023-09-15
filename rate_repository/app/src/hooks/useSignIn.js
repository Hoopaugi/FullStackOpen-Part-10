import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";

import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const result = await mutate({ variables: { credentials: { username, password } } })

    console.log('result', result)

    if(result.data.authenticate.accessToken) {
      await authStorage.setAccessToken(result.data.authenticate.accessToken)

      navigate("/");
    }

    return result
  };

  return [signIn, result];
};

export default useSignIn
