const { default: mongoose } = require("mongoose");
const { DB_URI } = require('../constants')

const connectDB = async (app, server, corsOptions) => {
  await server.start();

  server.applyMiddleware({ app, cors: corsOptions, path: '/graphql' });

  app.use((req, res) => {
    res.send('Hello from express apollo server')
  })

  await mongoose.connect(DB_URI)

  // console.log('Server connected', DB_URI);

  app.listen(PORT, () => `Server is running on port: ${PORT}`)
}

module.exports = { connectDB }
