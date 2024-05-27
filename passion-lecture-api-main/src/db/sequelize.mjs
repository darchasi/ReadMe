import { Sequelize, DataTypes } from "sequelize";
import bcrypt from "bcrypt";

import { BookModel } from "../models/books.mjs";
import { AuthorModel } from "../models/authors.mjs";
import { CategoryModel } from "../models/categories.mjs";
import { UserModel } from "../models/users.mjs";
import { CommentModel } from "../models/comments.mjs";
import { NoteModel } from "../models/notes.mjs";

import { books } from "./mock-book.mjs";
import { users } from "./mock-user.mjs";

const sequelize = new Sequelize(
  "db_passion_lecture", // Nom de la DB qui doit exister
  "root", // Nom de l'utilisateur
  "root", // Mot de passe de l'utilisateur
  {
    host: "localhost",
    port: "6033",
    dialect: "mysql",
    logging: false,
  }
);

// Les modèles sont instanciés ici afin de
// - pouvoir créer les tables correspondantes dans MySQL grâce à la synchronisation
// - les exporter
const Book = BookModel(sequelize, DataTypes);
const Author = AuthorModel(sequelize, DataTypes);
const Category = CategoryModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);
const Comment = CommentModel(sequelize, DataTypes);
const Note = NoteModel(sequelize, DataTypes);

const models = {
  Book,
  Author,
  Category,
  User,
  Comment,
  Note,
};

// Définition des associations
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

let initDb = async () => {
  try {
    await sequelize.sync({ force: true });
    await importBooks();
    await importUsers();
    console.log(
      "La base de données db_passion_lecture a bien été synchronisée"
    );
  } catch (error) {
    console.error(
      "Erreur lors de l'initiaffsdfsdfsdfdsflisation de la base de données :",
      error
    );
  }
};

const importBooks = async () => {
  for (const book of books) {
    // Créer ou trouver l'auteur avant de créer le livre
    const [author, authorCreated] = await Author.findOrCreate({
      where: {
        lastname: book.author.lastname,
        firstname: book.author.firstname,
      },
    });

    // Créer ou trouver la catégorie avant de créer le livre
    const [category, categoryCreated] = await Category.findOrCreate({
      where: {
        name: book.category,
      },
    });

    // Création du nouveau livre
    const newBook = await Book.create({
      title: book.title,
      numberOfPages: book.numberOfPages,
      pdfLink: book.pdfLink,
      abstract: book.abstract,
      editor: book.editor,
      editionYear: book.editionYear,
      imagePath: book.imagePath,
      categoryId: category.id,
      authorId: author.id,
      userId: book.userId,
    });

    // console.log(newBook.toJSON());
  }
  console.log("Tous les livres ont été importés avec succès.");
};

const importUsers = async () => {
  for (const user of users) {
    const hash = await bcrypt.hash(user.password, 10); // temps pour hasher = du sel
    const createdUser = await User.create({
      username: user.username,
      password: hash,
      isAdmin: user.isAdmin,
    });
    // console.log(createdUser.toJSON());
  }
};

export { sequelize, initDb, Book, Author, Category, User, Comment, Note };
