import {
  makeExecutableSchema,
} from 'graphql-tools';
import resolvers from './resolver';

const typeDefs = `
type Query {
 person(firstName: String, lastName: String): Person
}
type Person {
  id: Int
  firstName: String
  lastName: String
  work: [Work]
}
type Work {
  id: Int
  title: String
  text: String
  views: Int
  person: Person
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
