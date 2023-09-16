import { gql } from '@apollo/client';

import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $after: String, $first: Int) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, after: $after, first: $first) {
      edges {
        cursor
        node {
          ...repositoryBaseFields
          ratingAverage
          reviewCount
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
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
  query Repository($repositoryId: ID!, $after: String, $first: Int) {
    repository(id: $repositoryId) {
      reviews(after: $after, first: $first) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
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
            id
            rating
            repository {
              id
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
