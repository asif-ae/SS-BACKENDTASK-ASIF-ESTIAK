const cors = require('cors')
let express = require('express')
const { ApolloServer } = require('apollo-server-express')
const bodyParser = require('body-parser')

const { connectDB } = require('./db')

const baseTypeDefs = require('./src/baseTypeDefs')
const users = require('./src/users')
const movies = require('./src/movies')
const { createAccessToken } = require('./utils/auth')
const { authenticate } = require('./middleware/auth')

const app = express()

const allowedOrigins = [
  'http://localhost:3000', 'http://localhost:3333', 'https://studio.apollographql.com',
];

const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not ' +
        'allow access from the specified origin: ' + origin;
      return callback(new Error(msg), false);
    }
    return callback(null, origin);
  },
  credentials: true,
}

const server = new ApolloServer({
  typeDefs: [
    baseTypeDefs.typeDefs, users.typeDefs, movies.typeDefs,
  ],
  resolvers: [
    users.resolvers, movies.resolvers,
  ],
  context: ({ req, res }) => {
    return {
      res,
      req
    };
  },
  cors: corsOptions,
})

app.use(bodyParser.json({limit: '1024mb'}))
app.use(bodyParser.urlencoded({limit: '1024mb', extended: true}))
app.use(cors(corsOptions))
app.use('*', cors(corsOptions))
app.use(authenticate)

connectDB(app, server, corsOptions)

// app.get('/authTest', (req, res) => {
//   res.json(createAccessToken({
//     firstName: 'ATC',
//     lastName: 'ATC',
//     username: 'atc',
//     email: 'atc@cc.cc',
//   }))
// })
