// src/index.ts
import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

const startServer = async () => {
  try {
    await createConnection();
    console.log('Connected to the database');

    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

startServer();