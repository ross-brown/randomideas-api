import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import IdeaFrom from "./components/IdeaForm";
import "./css/style.css";

const modal = new Modal();
const ideaForm = new IdeaFrom();
ideaForm.render();

// LEARNED THIS LESSON:
// creating a webpack boilerplate
// src folder - all of our source code that we write
// dist/public folder - webpack will create when we run a build command
// --- what goes to the server
// --- keeps it clean when being in production

// DevServer Plugin -- allows you to change code and not have to keep running npm run build each time

// Babel (a transcomplier) -- turns your ES6 code into old versions of JS so it works in all types of browers

// CSS minify Extract Plugin -- allows you to add css to dist folder on npm run build
