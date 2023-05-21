const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const cors = require("cors");
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const PORT = process.env.PORT || 3000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.db = router.db;
server.use(auth);
server.use(router);
server.use(cors());
server.listen(PORT, () => {
  console.log("Server is running");
});
