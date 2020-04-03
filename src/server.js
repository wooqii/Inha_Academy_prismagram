import "./env";

import { GraphQLServer } from "graphql-yoga";
<<<<<<< HEAD
import { authenticateJwt } from "./passport";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { isAuthenticated } from "./middleware";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ 
    schema,
    context: ({ request }) => ({ request, isAuthenticated })
=======
import logger from "morgan";
import schema from "./schema"; 
import "./passport";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middleware";


const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ 
  schema, 
  context: ({ request }) => ({ request, isAuthenticated })
>>>>>>> master
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`👺 Server running on  http://localhost:${PORT}`)
);