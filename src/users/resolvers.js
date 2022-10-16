const User = require('./User');

const resolvers = {
  Query: {},
  Mutation: {
    login: async (_, args, context) => await User.login(_, args, context),
    createUser: async (_, args, context) => await User.createUser(_, args, context),
    makeAuthorizedUser: async (_, args, context) => await User.makeAuthorizedUser(_, args, context),
  },
};

module.exports = {
  resolvers
}
