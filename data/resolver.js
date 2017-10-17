const resolvers = {
  Query: {
    person(root, args) {
      return { id: 1, firstName: 'Yurii', lastName: 'Stadnyk' };
    },
  },
  Person: {
    work(person) {
      return [
        { id: 1, title: 'Making tea', text: 'Make tea twice a day', makes: 2 },
        { id: 2, title: 'Making coffee', text: 'Make coffee once a month', makes: 1 }
      ];
    },
  },
  Work: {
    person(work) {
      return { id: 1, firstName: 'Yurii', lastName: 'Stadnyk' };
    },
  },
};

export default resolvers;
