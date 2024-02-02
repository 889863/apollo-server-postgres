// src/resolvers.ts
import { getRepository } from 'typeorm';
import { User } from './entities/User';

const resolvers = {
  Query: {
    users: async () => {
      const userRepository = getRepository(User);
      return await userRepository.find();
    },
  },
};

export default resolvers;