import { gql } from '@apollo/client';

import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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

export const GET_MY_REVIEWS = gql`
  query Me {
    me {
      reviews {
        edges {
          node {
            rating
            repository {
              fullName
            }
            createdAt
            text
          }
        }
      }
    }
  }
`;
