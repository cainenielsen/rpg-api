const functions = require("firebase-functions");
const express = require("express");
const app = express();

exports.api = functions.https.onRequest(app);

// functions.logger.info("Hello logs!", {structuredData: true});

app.get("/", (req, res) => {
  res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>This is a test</p>
    </body>
  </html>`);
});

app.get("/api", (req, res) => {
  res.json({
    bongs: "BONG",
  });
});
