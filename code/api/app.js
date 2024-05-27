//Auteur : jmy
//Date   : 24.04.2024
//Lieu   : ETML
//Descr. : squelette pour api avec blob

const express = require("express");
const Sequelize = require("sequelize");
const FS = require("fs");
const app = express();
const port = 3000;

const sequelize = new Sequelize("passionlecture", "root", "root", {
  host: "localhost",
  port: "6033",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const Book = sequelize.define("Book", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },

  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  epub: {
    type: Sequelize.BLOB("long"),
  },
});

//FROM FILE
app.get("/epub/1", async (req, res) => {
  const file = `${__dirname}/Dickens, Charles - Oliver Twist.epub`;
  res.download(file, (err) => {
    if (err) {
      if (!res.headersSent) {
        res.status(500).send("Error: " + err.message);
      } else {
        console.error("Error:", err);
      }
    }
  });
});

//FROM DB
app.get("/epub/2", async (req, res) => {
  try {
    const result = await Book.findOne({ attributes: ["epub", "title"] });
    if (result && result.epub) {
      const blob = result.epub;
      res
        .header("Content-Type", "application/epub+zip")
        .header(
          "Content-Disposition",
          `attachment; filename="${result.title}.epub"`
        )
        .header("Content-Length", blob.length)
        .send(blob);
    } else {
      res.status(404).send("Epub non trouvé.");
    }
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  sequelize.authenticate();
  Book.sync();

  //Insert epub
  const epubPath = `${__dirname}/Dumas, Alexandre - Les trois mousquetaires.epub`;
  var epubData = FS.readFileSync(epubPath);
  Book.create({
    title: "mousquetaires",
    epub: epubData,
  });
});
