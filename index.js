const express = require("express");
const path = require('path');

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use('/', router);
app.use(express.static(path.join(__dirname, 'css')))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use(express.static(path.join(__dirname, 'node_modules/@popperjs/core/dist/umd')))

app.listen(process.env.port || 3000);
