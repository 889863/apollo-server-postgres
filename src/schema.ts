// src/schema.ts
import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Query {
    users: [User]
  }
`;

export default typeDefs;