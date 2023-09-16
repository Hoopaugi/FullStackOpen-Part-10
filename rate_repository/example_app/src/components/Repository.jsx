import { useParams } from "react-router-native";
import * as Linking from 'expo-linking';

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import Button from "./Button";
import ReviewList from "./ReviewList";

const Repository = () => {
  const { id } = useParams()

  const { repository, loading } = useRepository(id)

  const onPress = () => {
    Linking.openURL(repository.url);
  }

  if (loading) {
    return null
  }

  return (
    <>
      <RepositoryItem repository={repository} />
      <Button onPress={onPress}>Github</Button>
      <ReviewList id={id} />
    </>
  )
};

export default Repository;
