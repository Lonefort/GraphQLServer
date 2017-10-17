import casual from 'casual';

const mocks = {
  Surname: () => 'Stadnyk!',
  Query: () => ({
    person: (root, args) => {
      return { firstName: args.firstName, lastName: args.lastName };
    },
  }),
  Person: () => ({ firstName: () => casual.first_name, lastName: () => casual.last_name }),
  Work: () => ({ title: casual.title, text: casual.sentences(3) }),
};

export default mocks;
