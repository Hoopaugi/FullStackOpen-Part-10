import { gql } from '@apollo/client';

import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...repositoryBaseFields
          ratingAverage
          reviewCount
        }
      }
    }
  }

  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_CURRENT_USER = gql`
  query {
    me {
      ...userBaseFields
    }
  }

  ${USER_BASE_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...repositoryBaseFields
    }
  }

  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_REVIEWS = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      reviews {
        edges {
          node {
            text
            rating
            createdAt
            user {
              username
            }
          }
        }
      }
    }
  }
`;
