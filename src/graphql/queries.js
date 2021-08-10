/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMemories = /* GraphQL */ `
  query GetMemories($id: ID!) {
    getMemories(id: $id) {
      id
      name
      description
      city
      createdAt
      updatedAt
    }
  }
`;
export const listMemories = /* GraphQL */ `
  query ListMemories(
    $filter: ModelMemoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        city
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
