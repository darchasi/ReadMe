import express from "express";
import cors from "cors";
const app = express();

const port = 3001;

// Configuración de CORS
var corsOptions = {
  origin: `http://localhost:5173`,
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
app.use(express.json());

import { sequelize, initDb } from "./db/sequelize.mjs";

sequelize
  .authenticate()
  .then((_) =>
    console.log("La connexion à la base de données a bien été établie")
  )
  .catch((error) => {
    console.log(error);
    console.error("Impossible de se connecter à la DB");
  });

initDb();

app.get("/", (req, res) => {
  res.send("API REST pour l'application 'Passion Lecture' !");
});

app.get("/api/", (req, res) => {
  res.redirect(`http://localhost:${port}/`);
});

import { categoriesRouter } from "./routes/categories.mjs";
app.use("/api/categories", categoriesRouter);

import { authorsRouter } from "./routes/authors.mjs";
app.use("/api/authors", authorsRouter);

import { booksRouter } from "./routes/books.mjs";
app.use("/api/books", booksRouter);

import { loginRouter } from "./routes/login.mjs";
app.use("/api/login", loginRouter);

// Si aucune route ne correspondant à l'URL demandée par le consommateur
app.use(({ res }) => {
  const message =
    "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json({ message });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});
