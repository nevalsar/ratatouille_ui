const express = require("express");
const path = require("path");
const sassMiddleWare = require("node-sass-middleware");

const app = express();
const router = express.Router();

app.use(
  sassMiddleWare({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
    sourceMap: true,
  })
);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/", router);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use(
  express.static(path.join(__dirname, "node_modules/@popperjs/core/dist/umd"))
);

port = process.env.port || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on port ${port}`);
});
